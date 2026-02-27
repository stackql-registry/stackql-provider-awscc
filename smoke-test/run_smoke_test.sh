#!/bin/bash
##############################################################################
# awscc provider smoke test: INSERT, UPDATE, DELETE via stackql
#
# Prerequisites:
#   - stackql binary in the repo root (download: curl -L https://bit.ly/stackql-zip -O && unzip stackql-zip)
#   - AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY env vars set
#   - If running in a proxied environment, GLOBAL_AGENT_HTTP_PROXY env var set
#
# Usage:
#   export AWS_ACCESS_KEY_ID=...
#   export AWS_SECRET_ACCESS_KEY=...
#   bash smoke-test/run_smoke_test.sh
#
# Resource tested: awscc.ssm.parameters (AWS::SSM::Parameter via Cloud Control API)
# Region: us-east-1
# Estimated cost: negligible (<$0.01)
##############################################################################

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"
STACKQL="$REPO_ROOT/stackql"
PROVIDER_REGISTRY_ROOT_DIR="$REPO_ROOT"
REG_STR="{\"url\": \"file://${PROVIDER_REGISTRY_ROOT_DIR}/openapi\", \"localDocRoot\": \"${PROVIDER_REGISTRY_ROOT_DIR}/openapi\", \"verifyConfig\": {\"nopVerify\": true}}"

REGION="us-east-1"
PARAM_NAME="/stackql/smoke-test/param1"
PARAM_NAME2="/stackql/smoke-test/param2"

# Validate prerequisites
if [[ ! -x "$STACKQL" ]]; then
  echo "ERROR: stackql binary not found at $STACKQL"
  echo "Download with: curl -L https://bit.ly/stackql-zip -O && unzip stackql-zip"
  exit 1
fi

if [[ -z "${AWS_ACCESS_KEY_ID:-}" || -z "${AWS_SECRET_ACCESS_KEY:-}" ]]; then
  echo "ERROR: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY must be set"
  exit 1
fi

# Set up proxy args (if GLOBAL_AGENT_HTTP_PROXY is set, parse and use it)
PROXY_ARGS=""
if [[ -n "${GLOBAL_AGENT_HTTP_PROXY:-}" ]]; then
  PROXY_HOST=$(python3 -c "import urllib.parse, os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.hostname)")
  PROXY_PORT=$(python3 -c "import urllib.parse, os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.port)")
  PROXY_USER=$(python3 -c "import urllib.parse, os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.username)")
  PROXY_PASS=$(python3 -c "import urllib.parse, os; p=urllib.parse.urlparse(os.environ['GLOBAL_AGENT_HTTP_PROXY']); print(p.password)")
  PROXY_ARGS="--http.proxy.host=$PROXY_HOST --http.proxy.port=$PROXY_PORT --http.proxy.scheme=http --http.proxy.user=$PROXY_USER --http.proxy.password=$PROXY_PASS"
fi

run_stackql() {
  local query="$1"
  # shellcheck disable=SC2086
  "$STACKQL" exec \
    --registry="$REG_STR" \
    $PROXY_ARGS \
    "$query" 2>&1
}

run_stackql_file() {
  local file="$1"
  # shellcheck disable=SC2086
  "$STACKQL" exec \
    --registry="$REG_STR" \
    $PROXY_ARGS \
    --infile "$file" 2>&1
}

PASS=0
FAIL=0

check() {
  local name="$1"
  local result="$2"
  local expected_pattern="$3"
  if echo "$result" | grep -q "$expected_pattern"; then
    echo "  PASS: $name"
    PASS=$((PASS + 1))
  else
    echo "  FAIL: $name"
    echo "    Output: $result"
    FAIL=$((FAIL + 1))
  fi
}

echo ""
echo "============================================================"
echo "  awscc local provider smoke test"
echo "  stackql version: $($STACKQL --version 2>&1 | head -1)"
echo "  region: $REGION"
echo "============================================================"
echo ""

# ── SHOW SERVICES ────────────────────────────────────────────────
echo "[1/8] SHOW SERVICES IN awscc"
result=$(run_stackql "SHOW SERVICES IN awscc")
check "SHOW SERVICES lists ssm" "$result" "ssm"
check "SHOW SERVICES lists s3" "$result" "s3"

# ── SHOW RESOURCES ───────────────────────────────────────────────
echo "[2/8] SHOW RESOURCES IN awscc.ssm"
result=$(run_stackql "SHOW RESOURCES IN awscc.ssm")
check "SHOW RESOURCES lists parameters" "$result" "parameters"

# ── INSERT (create param1) ───────────────────────────────────────
echo "[3/8] INSERT awscc.ssm.parameters (param1)"
result=$(run_stackql "/*+ create */ INSERT INTO awscc.ssm.parameters (Type, Value, Name, Description, region) SELECT 'String', 'hello-from-stackql-smoketest', '$PARAM_NAME', 'stackql awscc local provider smoke test', '$REGION'")
check "INSERT param1 dispatched" "$result" "despatched successfully"

# ── INSERT (create param2 for DELETE test) ───────────────────────
echo "[4/8] INSERT awscc.ssm.parameters (param2)"
result=$(run_stackql "/*+ create */ INSERT INTO awscc.ssm.parameters (Type, Value, Name, Description, region) SELECT 'String', 'delete-me-smoketest', '$PARAM_NAME2', 'to be deleted by stackql smoke test', '$REGION'")
check "INSERT param2 dispatched" "$result" "despatched successfully"

# ── SELECT (list) ────────────────────────────────────────────────
echo "[5/8] SELECT awscc.ssm.parameters_list_only"
result=$(run_stackql "SELECT name FROM awscc.ssm.parameters_list_only WHERE region = '$REGION'")
check "SELECT lists param1" "$result" "smoke-test/param1"
check "SELECT lists param2" "$result" "smoke-test/param2"

# ── UPDATE ───────────────────────────────────────────────────────
echo "[6/8] UPDATE awscc.ssm.parameters (param1)"
UPDATE_SQL=$(mktemp /tmp/update_param.XXXXXX.sql)
cat > "$UPDATE_SQL" << SQL
UPDATE awscc.ssm.parameters
SET data__PatchDocument = '[{"op":"replace","path":"/Value","value":"updated-by-stackql-smoketest"}]'
WHERE data__Identifier = '$PARAM_NAME'
AND region = '$REGION'
SQL
result=$(run_stackql_file "$UPDATE_SQL")
rm -f "$UPDATE_SQL"
check "UPDATE param1 dispatched" "$result" "despatched successfully"

# ── DELETE (param2) ──────────────────────────────────────────────
echo "[7/8] DELETE awscc.ssm.parameters (param2)"
result=$(run_stackql "/*+ delete */ DELETE FROM awscc.ssm.parameters WHERE data__Identifier = '$PARAM_NAME2' AND region = '$REGION'")
check "DELETE param2 dispatched" "$result" "despatched successfully"

# ── DELETE (param1 cleanup) ──────────────────────────────────────
echo "[8/8] DELETE awscc.ssm.parameters (param1 cleanup)"
result=$(run_stackql "/*+ delete */ DELETE FROM awscc.ssm.parameters WHERE data__Identifier = '$PARAM_NAME' AND region = '$REGION'")
check "DELETE param1 dispatched" "$result" "despatched successfully"

# ── Summary ──────────────────────────────────────────────────────
echo ""
echo "============================================================"
echo "  Results: $PASS passed, $FAIL failed"
echo "============================================================"
echo ""

if [[ $FAIL -gt 0 ]]; then
  exit 1
fi
exit 0
