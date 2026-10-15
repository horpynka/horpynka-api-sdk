---
name: generate-openapi-client
description: >-
  Syncs the Horpynka API SDK with the deployed OpenAPI spec at
  https://horpynka.com/api/docs-json. Regenerates the TypeScript Axios client
  when that spec changed, then wires new or changed endpoints into src/client
  and src/operations. Use when the user asks to generate, update, or add an
  API, OpenAPI endpoints, SDK clients, or operation hooks for the Horpynka API SDK.
---

# Generate Horpynka OpenAPI client

Work in `horpynka-api-sdk`. Do not edit `src/api/generated` by hand. Do not commit, tag, bump the version, or publish unless the user asks.

## 1. Check the deployed spec

The JSON document is `OPENAPI_SPEC_URL` in `.env`: `https://horpynka.com/api/docs-json`.

`https://horpynka.com/docs/json` and `https://horpynka.com/docs-json` return HTML. Do not generate from those URLs. Do not switch the spec to localhost unless the user explicitly asks.

Fetch `OPENAPI_SPEC_URL`. Continue only when the response is JSON and has a `paths` object. If the fetch fails or the body is HTML, stop and report that.

## 2. Regenerate, then compare with implemented hooks

From `horpynka-api-sdk`, pull, then always run the client generator. Do not skip it after fetching the spec, and do not substitute another command:

```bash
git pull
```

```bash
yarn run generate-api-client
```

`yarn run generate-api-client` reads `OPENAPI_SPEC_URL`, runs OpenAPI Generator (`typescript-axios`) into `src/api/generated`, and patches `createRequestFunction` in `common.ts`. Compare hooks only after this command finishes.

Do not decide what is done from `git diff -- src/api/generated` or from `src/api/generated/docs`. Those files are generated output. A clean diff only means the Axios client already matches the spec. Hooks can still be missing.

Compare each spec endpoint with the hooks in `src/operations`:

1. From the fetched spec, list every operation as `METHOD path` (`POST /ingredients`). Skip `GET /` (`AppApi.getHello`). Leave that endpoint unwired.
2. Match each operation to the public method on its `export class *Api` in `src/api/generated/api.ts`. Read the method signature there for parameter names and DTO types.
3. An endpoint is implemented when an operations file calls that method. It is not implemented when no operations file calls it.
4. A hook that calls a method the generated class no longer has is an endpoint removed from the spec.

Wire every endpoint that is not implemented. If an endpoint disappeared, remove its client instance, operation helper, and barrel exports. Leave generated files to the generator.

If every endpoint except `GET /` is already called from `src/operations`, stop. Tell the user which endpoints are implemented and that none are missing.

## 3. Wire `src/client`

For each API class except `AppApi`, in `src/client/clients.ts`:

- import the class from `../api/generated`
- `export let` a camelCase instance (`CashShiftsApi` → `cashShiftsApi`)
- construct it inside `initApiClient` as `new CashShiftsApi(configuration, undefined, apiClient)`

Keep imports, `export let`s, and constructors in alphabetical order. Match the semicolons and quotes already in that file.

Re-export each new instance from `src/client/index.ts`.

## 4. Wire `src/operations`

Add or update `src/operations/<instanceName>.ts`. Match the existing files: no semicolons, double quotes, `queryFn` unwraps `res.data`, mutations return the client call as-is.

Use the deployed spec to classify each public method. `operationId` is the Nest method name.

- **GET** → `queryOptions`. List helper `get<Plural>Query`, query key `[resource]` (`["cash-shifts"]`, `["orders", params]`). `findOne` → `get<Singular>Query` with query key `[resource, id]`. A single custom GET such as `getStats` → `getStatsQuery`.
- **POST, PUT, PATCH, DELETE** → `useMutation`, named `mutate<Action>` (`mutateCreateOrder`). Call `useQueryClient` only when the hook has a mutation. On settle, invalidate the resource query key and call the optional callback:

```ts
mutationFn: ({ params: { id }, onSettledCallback }: { params: { id: number }; onSettledCallback?: () => void }) =>
  ordersApi.removeActiveReceipt(id),
onSettled: (_data, _error, { onSettledCallback }) => {
  queryClient.invalidateQueries({ queryKey: ["orders"] })
  onSettledCallback && onSettledCallback()
},
```

Read the generated method signature for parameter names and DTO types. Import DTO types from `../api/generated`. When `findAll` takes query params, accept them as an optional object and include that object in the query key, as in `src/operations/ordersApi.ts`.

Do not rename helpers that already exist. Copy the shape of `src/operations/dishesApi.ts` for reads and `src/operations/ordersApi.ts` for writes.

Export the hook as `use<ClassName>` (`useCashShiftsApi`) and return every query and mutation helper.

## 5. Export the hook

- `src/hooks/index.ts` — `export { useCashShiftsApi } from "../operations/cashShiftsApi"`
- `src/index.ts` — `export * from "./operations/cashShiftsApi"`

Keep both lists alphabetical.

## 6. Check

Run `yarn typecheck` in `horpynka-api-sdk`. Fix wiring errors. Do not hand-edit generated files to silence them; adjust `src/client` and `src/operations` instead.

Tell the user which endpoints are already implemented in hooks, which were missing and are now wired, and which were removed.
