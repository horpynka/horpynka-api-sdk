import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const commonPath = path.resolve("src/api/generated/common.ts");

const patchedSignature =
  `export const createRequestFunction: (
  axiosArgs: RequestArgs,
  globalAxios: AxiosInstance,
  BASE_PATH: string,
  configuration?: Configuration,
) => <T = unknown, R = AxiosResponse<T>>(
  axios?: AxiosInstance,
  basePath?: string,
) => Promise<R> = function (
  axiosArgs,
  globalAxios,
  BASE_PATH,
  configuration,
) {`;

const unpatchedPatterns = [
  /export const createRequestFunction = function \(axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration\?: Configuration\) \{/,
  /export const createRequestFunction = function \(axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration\?: Configuration\): <T = unknown, R = AxiosResponse<T>>\(axios\?: AxiosInstance, basePath\?: string\) => Promise<R> \{/,
];

let contents = await readFile(commonPath, "utf8");

if (contents.includes(") => Promise<R> = function (")) {
  process.exit(0);
}

for (const pattern of unpatchedPatterns) {
  if (pattern.test(contents)) {
    contents = contents.replace(pattern, patchedSignature);
    await writeFile(commonPath, contents);
    process.exit(0);
  }
}

throw new Error(
  "Could not patch createRequestFunction in src/api/generated/common.ts",
);
