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

## 2. Regenerate, then see what changed

From `horpynka-api-sdk` run:

```bash
git pull
```

```bash
yarn generate-api-client
```

That command reads `OPENAPI_SPEC_URL`, runs OpenAPI Generator (`typescript-axios`) into `src/api/generated`, and patches `createRequestFunction` in `common.ts`.

Then compare:

- `git diff -- src/api/generated` for spec changes
- every `export class *Api` in `src/api/generated/api.ts`, except `AppApi`, against `src/client/clients.ts` and `src/operations`

`AppApi` is only `GET /` (`getHello`). Leave it unwired.

If the generated diff is empty and every other API class already has a client instance and an operations hook that covers its public methods, stop. Tell the user the deployed spec matches the SDK.

If a class or method disappeared from the spec, remove its client instance, operation file, and barrel exports. Leave generated files to the generator.

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

Tell the user which endpoints were added, updated, or removed, or that the deployed spec had no SDK changes.
