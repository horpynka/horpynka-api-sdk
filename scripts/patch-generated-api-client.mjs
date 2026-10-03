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

// axios 1.19 types request<T, R>() as Promise<AxiosResponseResult<T, R, ...>>,
// which does not reduce to Promise<R> while R is still a type parameter.
// The explicit Promise<R> signature has to stay so generated callers infer AxiosPromise<T>.
const unpatchedRequest = "return axios.request<T, R>(axiosRequestArgs);";
const patchedRequest = "return axios.request<T, R>(axiosRequestArgs) as Promise<R>;";

let contents = await readFile(commonPath, "utf8");
let changed = false;

if (!contents.includes(") => Promise<R> = function (")) {
  const pattern = unpatchedPatterns.find((candidate) => candidate.test(contents));
  if (!pattern) {
    throw new Error(
      "Could not patch createRequestFunction in src/api/generated/common.ts",
    );
  }
  contents = contents.replace(pattern, patchedSignature);
  changed = true;
}

if (contents.includes(unpatchedRequest)) {
  contents = contents.replace(unpatchedRequest, patchedRequest);
  changed = true;
} else if (!contents.includes(patchedRequest)) {
  throw new Error(
    "Could not patch axios.request return in src/api/generated/common.ts",
  );
}

if (changed) {
  await writeFile(commonPath, contents);
}
