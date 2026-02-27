# awscc Local Provider Smoke Test Results

**Date:** 2026-02-27
**stackql version:** v0.9.339
**Provider:** awscc (local, `openapi/src`)
**Region:** us-east-1
**Resource:** `awscc.ssm.parameters` (`AWS::SSM::Parameter` via Cloud Control API)

---

## Setup

```bash
# 1. Download stackql
curl -L https://bit.ly/stackql-zip -O && unzip stackql-zip

# 2. Set registry to local provider
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}/openapi'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}/openapi'", "verifyConfig": {"nopVerify": true}}'

# 3. Run stackql
./stackql shell --registry="${REG_STR}" \
  --http.proxy.host=<host> --http.proxy.port=<port> \
  --http.proxy.user=<user> --http.proxy.password=<pass>
```

---

## Test Results

| # | Operation | SQL Verb | Result | Notes |
|---|-----------|----------|--------|-------|
| 1 | List services | `SHOW SERVICES IN awscc` | ✅ PASS | 237 services listed |
| 2 | List resources | `SHOW RESOURCES IN awscc.ssm` | ✅ PASS | parameters, associations, etc. |
| 3 | Create param1 | `INSERT INTO awscc.ssm.parameters` | ✅ PASS | Cloud Control CREATE dispatched |
| 4 | Create param2 | `INSERT INTO awscc.ssm.parameters` | ✅ PASS | Cloud Control CREATE dispatched |
| 5 | List parameters | `SELECT FROM awscc.ssm.parameters_list_only` | ✅ PASS | Both params visible |
| 6 | Update param1 | `UPDATE awscc.ssm.parameters SET data__PatchDocument` | ✅ PASS | After fix (see below) |
| 7 | Delete param2 | `DELETE FROM awscc.ssm.parameters` | ✅ PASS | Cloud Control DELETE dispatched |
| 8 | Delete param1 | `DELETE FROM awscc.ssm.parameters` | ✅ PASS | Cloud Control DELETE dispatched |

**All 8/8 tests passed.**

---

## Bug Found & Fixed: PatchDocument Serialization

### Problem

Before the fix, `UPDATE` operations sent `PatchDocument` as a raw JSON array:

```json
{"Identifier": "/stackql/smoke-test/param1", "PatchDocument": [{"op":"replace","path":"/Value","value":"updated"}], "TypeName": "AWS::SSM::Parameter"}
```

AWS Cloud Control API rejected this with:
```
SerializationException: Start of list found where not expected
```

### Root Cause

The `PatchDocument` field in the `UpdateResource` path inline schema lacked the `x-stackQL-stringOnly: true` annotation. Without it, stackql parsed the SQL string value (which looks like JSON) and embedded it as a raw JSON array in the request body.

### Fix

Added `x-stackQL-stringOnly: true` to the `PatchDocument` property in the UpdateResource path's inline request body schema across all 235 service YAML files:

```yaml
# Before (in /?Action=UpdateResource path requestBody)
PatchDocument:
  type: string

# After
PatchDocument:
  type: string
  x-stackQL-stringOnly: true
```

After the fix, the request body correctly serializes `PatchDocument` as a JSON string:

```json
{"Identifier": "/stackql/smoke-test/param1", "PatchDocument": "[{\"op\":\"replace\",\"path\":\"/Value\",\"value\":\"updated-by-stackql-smoketest\"}]", "TypeName": "AWS::SSM::Parameter"}
```

---

## Example SQL Queries

### INSERT

```sql
/*+ create */
INSERT INTO awscc.ssm.parameters (Type, Value, Name, Description, region)
SELECT
  'String',
  'hello-from-stackql',
  '/stackql/smoke-test/param1',
  'stackql awscc smoke test parameter',
  'us-east-1';
```

### SELECT

```sql
SELECT name FROM awscc.ssm.parameters_list_only
WHERE region = 'us-east-1';
```

### UPDATE

```sql
UPDATE awscc.ssm.parameters
SET data__PatchDocument = '[{"op":"replace","path":"/Value","value":"updated-value"}]'
WHERE data__Identifier = '/stackql/smoke-test/param1'
AND region = 'us-east-1';
```

### DELETE

```sql
/*+ delete */
DELETE FROM awscc.ssm.parameters
WHERE data__Identifier = '/stackql/smoke-test/param1'
AND region = 'us-east-1';
```

---

## Notes

- All Cloud Control API operations are **asynchronous** (`OperationStatus: IN_PROGRESS`). The operation is dispatched and tracked via a `RequestToken`.
- The `parameters_list_only` resource is used for list operations (SELECT without Identifier). The `parameters` resource is used for get-by-identifier.
- The `data__Identifier` prefix maps to the Cloud Control API `Identifier` field (parameter name for SSM parameters).
- The `data__PatchDocument` prefix maps to the Cloud Control API `PatchDocument` field (RFC 6902 JSON Patch).
