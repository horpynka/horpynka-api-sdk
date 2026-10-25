#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ -z "${OPENAPI_SPEC_URL:-}" && -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

if [[ -z "${OPENAPI_SPEC_URL:-}" ]]; then
  echo "OPENAPI_SPEC_URL is not set. Copy .env.example to .env and set the backend OpenAPI URL." >&2
  exit 1
fi

# Java resolves horpynka.com to a NAT64 IPv6 address and fails with
# "Network is unreachable" instead of falling back to IPv4. Download the spec
# with curl, then generate from the local file.
spec_dir="$(mktemp -d)"
trap 'rm -rf "$spec_dir"' EXIT

curl -fsSL --retry 2 --connect-timeout 10 --max-time 60 \
  "$OPENAPI_SPEC_URL" \
  -o "$spec_dir/openapi.json"

export JAVA_OPTS="${JAVA_OPTS:+$JAVA_OPTS }-Djava.net.preferIPv4Stack=true"

npx openapi-generator-cli generate \
  -i "$spec_dir/openapi.json" \
  -g typescript-axios \
  -o src/api/generated \
  --skip-validate-spec

node scripts/patch-generated-api-client.mjs
