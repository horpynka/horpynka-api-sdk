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

npx openapi-generator-cli generate \
  -i "$OPENAPI_SPEC_URL" \
  -g typescript-axios \
  -o src/api/generated \
  --skip-validate-spec

node scripts/patch-generated-api-client.mjs
