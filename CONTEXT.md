# Claude Code Sandbox — Context for awscc Smoke Testing

This file captures the quirks of the Claude Code sandbox environment so that
future sessions can skip the fumbling and go straight to running tests.

---

## 1. Sandbox Networking — Read This First

The sandbox runs in a locked-down container. There are **two layers** of
networking that behave differently:

| Layer | Works via | Limitation |
|-------|-----------|------------|
| Python `urllib` / `requests` | HTTP proxy (auto-configured) | ✅ works out of the box |
| `curl` | HTTP proxy (auto-configured) | ✅ works out of the box |
| `aws` CLI (Python) | HTTP proxy (auto-configured) | ✅ works out of the box |
| Go binaries (e.g. `stackql`) | **must be told explicitly** | ❌ fails without proxy flags |
| System DNS resolver (`/etc/resolv.conf`) | nothing — file is **empty** | ❌ nslookup/host/getaddrinfo fail |

### Why system DNS is broken but curl/Python still work

`/etc/resolv.conf` is empty, so glibc-level DNS resolution fails. However,
`curl` and Python's `urllib` go through an egress HTTP proxy that **resolves
hostnames on behalf of the client** (`CLAUDE_CODE_PROXY_RESOLVES_HOSTS=true`).
Go binaries built without CGO (like `stackql`) bypass glibc and use Go's pure
resolver, which reads `/etc/hosts` but still needs a real DNS server or an
explicit proxy.

**Do not waste time trying to fix DNS.** Just pass the proxy to the binary.

---

## 2. Getting the Proxy Details

The proxy URL is always in `GLOBAL_AGENT_HTTP_PROXY`. Parse it with Python:

```bash
python3 -c "
import urllib.parse, os
p = urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY'])
print('host:', p.hostname)
print('port:', p.port)
print('user:', p.username)
print('pass:', p.password[:20], '...')
"
```

Shell helper to extract components:

```bash
PROXY_HOST=$(python3 -c "import urllib.parse,os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.hostname)")
PROXY_PORT=$(python3 -c "import urllib.parse,os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.port)")
PROXY_USER=$(python3 -c "import urllib.parse,os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.username)")
PROXY_PASS=$(python3 -c "import urllib.parse,os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.password)")
```

> The proxy credentials (JWT token) are **session-scoped** and rotate between
> container restarts. Always parse them dynamically — never hardcode them.

---

## 3. stackql Setup (one-time per session)

### Download

```bash
cd /home/user/stackql-provider-awscc
curl -L https://bit.ly/stackql-zip -O && unzip -o stackql-zip
chmod +x stackql
./stackql --version   # expect: stackql v0.9.x Linux
```

The binary lands in the repo root. It is gitignored.

### Registry string (local provider)

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)"   # must be repo root
REG_STR="{\"url\": \"file://${PROVIDER_REGISTRY_ROOT_DIR}/openapi\", \"localDocRoot\": \"${PROVIDER_REGISTRY_ROOT_DIR}/openapi\", \"verifyConfig\": {\"nopVerify\": true}}"
```

### Canonical run helper

Copy this block to the top of any smoke-test script:

```bash
PROXY_USER=$(python3 -c "import urllib.parse,os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.username)")
PROXY_PASS=$(python3 -c "import urllib.parse,os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.password)")
PROXY_HOST=$(python3 -c "import urllib.parse,os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.hostname)")
PROXY_PORT=$(python3 -c "import urllib.parse,os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.port)")

PROVIDER_REGISTRY_ROOT_DIR="/home/user/stackql-provider-awscc"
STACKQL="$PROVIDER_REGISTRY_ROOT_DIR/stackql"
REG_STR="{\"url\": \"file://${PROVIDER_REGISTRY_ROOT_DIR}/openapi\", \"localDocRoot\": \"${PROVIDER_REGISTRY_ROOT_DIR}/openapi\", \"verifyConfig\": {\"nopVerify\": true}}"

run_stackql() {
  AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID" \
  AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY" \
  "$STACKQL" exec \
    --registry="$REG_STR" \
    --http.proxy.host="$PROXY_HOST" \
    --http.proxy.port="$PROXY_PORT" \
    --http.proxy.scheme=http \
    --http.proxy.user="$PROXY_USER" \
    --http.proxy.password="$PROXY_PASS" \
    "$1" 2>&1
}

run_stackql_file() {
  AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID" \
  AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY" \
  "$STACKQL" exec \
    --registry="$REG_STR" \
    --http.proxy.host="$PROXY_HOST" \
    --http.proxy.port="$PROXY_PORT" \
    --http.proxy.scheme=http \
    --http.proxy.user="$PROXY_USER" \
    --http.proxy.password="$PROXY_PASS" \
    --infile "$1" 2>&1
}
```

> Use `run_stackql_file` for UPDATE queries — single-quoting JSON inside a
> bash string literal is painful. Write the SQL to a temp file instead.

---

## 4. AWS Credentials

Credentials are passed as environment variables. Always verify them with the
AWS CLI before running stackql tests:

```bash
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...

# Sanity check (AWS CLI uses Python/urllib — works without proxy flags)
aws sts get-caller-identity --region us-east-1
```

Expected output shape:
```json
{ "UserId": "...", "Account": "824532806693", "Arn": "arn:aws:iam::824532806693:user/..." }
```

---

## 5. Provider Layout

```
openapi/
└── src/
    └── awscc/
        └── v00.00.00000/
            ├── provider.yaml
            └── services/
                ├── ssm.yaml          # AWS::SSM::*
                ├── s3.yaml           # AWS::S3::*
                ├── ec2.yaml          # AWS::EC2::*
                └── ...               # 237 services total
```

Each service YAML exposes resources via `components/x-stackQL-resources`.
Available SQL verbs per resource:

```bash
# Discover resources and their methods
run_stackql "SHOW RESOURCES IN awscc.ssm"
run_stackql "SHOW METHODS IN awscc.ssm.parameters"
```

---

## 6. SQL Patterns

All mutation operations go through AWS Cloud Control API and are
**asynchronous** — success means the operation was dispatched
(`"OperationStatus": "IN_PROGRESS"`), not necessarily complete.

### INSERT (create)

```sql
/*+ create */
INSERT INTO awscc.ssm.parameters (Type, Value, Name, Description, region)
SELECT 'String', 'my-value', '/my/param', 'description text', 'us-east-1';
```

Field names match the CloudFormation resource schema properties exactly
(PascalCase). `region` is always required.

### SELECT (list)

Use `*_list_only` resources for listing — the plain resource requires an
Identifier:

```sql
-- List (no identifier needed)
SELECT name FROM awscc.ssm.parameters_list_only WHERE region = 'us-east-1';

-- Get by identifier
SELECT name, type, value FROM awscc.ssm.parameters
WHERE region = 'us-east-1' AND data__Identifier = '/my/param';
```

### UPDATE

`PatchDocument` must be RFC 6902 JSON Patch. Write to a temp file to avoid
quoting hell:

```bash
UPDATE_SQL=$(mktemp /tmp/update.XXXXXX.sql)
cat > "$UPDATE_SQL" << 'SQL'
UPDATE awscc.ssm.parameters
SET data__PatchDocument = '[{"op":"replace","path":"/Value","value":"new-value"}]'
WHERE data__Identifier = '/my/param'
AND region = 'us-east-1'
SQL
run_stackql_file "$UPDATE_SQL"
rm -f "$UPDATE_SQL"
```

> **Known provider fix (already applied):** All service YAMLs have
> `x-stackQL-stringOnly: true` on the `PatchDocument` field in the
> UpdateResource path. Without this, stackql serialises the JSON string as a
> raw JSON array and Cloud Control API rejects it with `SerializationException`.
> This fix is committed — do not remove it.

### DELETE

```sql
/*+ delete */
DELETE FROM awscc.ssm.parameters
WHERE data__Identifier = '/my/param'
AND region = 'us-east-1';
```

---

## 7. Running the Existing Smoke Test

```bash
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...
bash smoke-test/run_smoke_test.sh
```

Expected output:
```
[1/8] SHOW SERVICES IN awscc              PASS ...
[2/8] SHOW RESOURCES IN awscc.ssm         PASS ...
[3/8] INSERT awscc.ssm.parameters (param1) PASS ...
...
Results: 8 passed, 0 failed
```

---

## 8. Adding New Smoke Tests

Pick a cheap, easily reversible resource. Good candidates:

| Resource | Cost | Notes |
|----------|------|-------|
| `awscc.ssm.parameters` | ~$0 | Standard tier is free; simple string key/value |
| `awscc.logs.log_groups` | ~$0 | Free to create; delete cleans up |
| `awscc.s3.buckets` | ~$0 | Free to create empty; must be empty to delete |
| `awscc.iam.roles` | ~$0 | No cost; needs trust policy JSON |

Steps to add a test:
1. Check available methods: `run_stackql "SHOW METHODS IN awscc.<service>.<resource>"`
2. Find required fields: inspect `openapi/src/awscc/v00.00.00000/services/<service>.yaml`
   under `components/schemas/Create<Resource>Request` → `DesiredState.properties`
3. Check the docs template: `website/docs/services/<service>/<resource>/index.md`
4. Add INSERT/UPDATE/DELETE to `smoke-test/run_smoke_test.sh`
5. Always clean up (DELETE) in the same test run

---

## 9. Debugging

### See the actual HTTP request stackql sends

Add `--http.log.enabled` to any `run_stackql` call to print the request URL
and body. Useful for diagnosing serialisation problems:

```bash
AWS_ACCESS_KEY_ID=... AWS_SECRET_ACCESS_KEY=... \
./stackql exec --registry="$REG_STR" \
  --http.proxy.host=... \
  --http.proxy.port=... \
  --http.proxy.scheme=http \
  --http.proxy.user=... \
  --http.proxy.password=... \
  --http.log.enabled \
  "YOUR QUERY" 2>&1
```

### Verify AWS connectivity without stackql

```bash
# Python (uses proxy automatically)
python3 -c "import socket; print(socket.getaddrinfo('cloudcontrolapi.us-east-1.amazonaws.com', 443))"
# If this fails, DNS is broken — add the IP to /etc/hosts (see below)

# curl (uses proxy automatically)
curl -s --max-time 5 https://cloudcontrolapi.us-east-1.amazonaws.com/
```

### Manually add AWS endpoints to /etc/hosts (last resort)

Only needed if system DNS breaks for Go binaries and the proxy isn't enough:

```python
python3 -c "
import urllib.request, json

def resolve(hostname):
    url = f'https://dns.google/resolve?name={hostname}&type=A'
    import urllib.request
    req = urllib.request.Request(url, headers={'User-Agent': 'curl/7.74.0'})
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read())
        return [a['data'] for a in data.get('Answer', []) if a['type'] == 1]

hosts = ['cloudcontrolapi.us-east-1.amazonaws.com', 'sts.amazonaws.com']
with open('/etc/hosts', 'a') as f:
    for h in hosts:
        ips = resolve(h)
        if ips:
            f.write(f'{ips[0]} {h}\n')
            print(f'Added: {ips[0]} {h}')
"
```

### Check Cloud Control API async operation status

```sql
-- Failed CREATEs
SELECT * FROM aws.cloud_control.resource_requests
WHERE data__ResourceRequestStatusFilter = '{"OperationStatuses":["FAILED"],"Operations":["CREATE"]}'
AND region = 'us-east-1';

-- By request token
SELECT * FROM aws.cloud_control.resource_request
WHERE data__RequestToken = '<token-from-insert-response>'
AND region = 'us-east-1';
```
