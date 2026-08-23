# @horpynka/api-sdk

Shared API layer for the Horpynka admin panel and React Native app.

## Stack

- **OpenAPI Generator CLI** — fetch Swagger/OpenAPI from backend and generate TypeScript Axios client
- **Axios** — HTTP client with shared interceptors (auth, 401 handling)
- **TanStack Query** — re-exported hooks for queries and mutations in consuming apps

## Setup

```bash
npm install
cp .env.example .env
# set OPENAPI_SPEC_URL in .env
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run fetch:openapi` | Download OpenAPI JSON from `OPENAPI_SPEC_URL` |
| `npm run generate:api` | Fetch spec and generate client into `src/generated/` |
| `npm run build` | Build ESM + CJS bundles to `dist/` |
| `npm run dev` | Watch mode for local development |
| `npm run typecheck` | Run TypeScript without emitting |

## Usage in apps

Install this package in your admin panel or React Native app together with peer dependencies:

```bash
npm install @horpynka/api-sdk axios @tanstack/react-query react
```

```ts
import { createApiClient } from "@horpynka/api-sdk/client";
import { useQuery, QueryClientProvider } from "@horpynka/api-sdk/hooks";

const api = createApiClient({
  baseURL: "https://api.example.com",
  getAccessToken: () => localStorage.getItem("token"),
});
```

## Project layout

```
src/
  client/       # Axios client factory and config types
  hooks/        # TanStack Query re-exports (+ custom hooks later)
  generated/    # OpenAPI Generator output (gitignored, run generate:api)
scripts/
  fetch-openapi.mjs
```

After you share your reference files, wire generated APIs into `src/client` and add domain-specific query hooks under `src/hooks`.
