---
name: npm-publish
description: >-
  Regenerates the Horpynka API SDK from the deployed OpenAPI spec, runs the
  TypeScript check, and publishes a patch of @horpynka/api-sdk only when that
  check passes. Use when the user asks to publish, ship, or patch an npm
  update of the Horpynka API SDK.
---

# Publish an npm patch

Work in `horpynka-api-sdk`. Do not bump the version, commit, tag, or publish until the typecheck below passes.

## 1. Get the latest OpenAPI client

Follow [generate-openapi-client](../generate-openapi-client/SKILL.md) from the start.

Regenerate with:

```bash
yarn generate-api-client
```

Wire any new or changed API classes into `src/client` and `src/operations`. Leave `src/api/generated` to the generator.

A matching spec is not a reason to stop. Continue to the typecheck, then publish.

## 2. Typecheck

```bash
yarn typecheck
```

If it fails, stop the process and tell the user there are problems with types

## 3. Publish

Run this only after `yarn typecheck` exits 0. `prepublishOnly` already runs `npm run build` before the upload.

A patch bumps only the last number (`1.0.12` → `1.0.13`).

```bash
npm version patch
npm publish
```

`npm version patch` writes the new version into `package.json`, commits that change, and creates a git tag `v1.0.13`. `npm publish` uploads that version.

If the commit and tag should stay separate from the version bump:

```bash
npm version patch --no-git-tag-version
```

That only changes `package.json`. Commit and tag yourself, then run `npm publish`.

## Install patch updates of dependencies

```bash
npm outdated
npm update
```

`npm update` installs the newest version still allowed by each range in `package.json`. A range like `^1.11.0` accepts both patch (`1.11.1`) and minor (`1.12.0`) releases. To move ranges to the latest patch only:

```bash
npx npm-check-updates -u -t patch
npm install
```
