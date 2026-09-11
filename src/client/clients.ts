import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import { AuthApi, Configuration, OrdersApi } from "../api/generated";
import { QueryClient } from "@tanstack/react-query";

export let tanstackClient: QueryClient;
export let ordersApi: OrdersApi;
export let authApi: AuthApi;

export function initApiClient(config: CreateAxiosDefaults): AxiosInstance {
  const apiClient = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout ?? 10_000,
  });

  const configuration = new Configuration({
    basePath: config.baseURL,
  });

  tanstackClient = new QueryClient();
  ordersApi = new OrdersApi(configuration, undefined, apiClient);
  authApi = new AuthApi(configuration, undefined, apiClient);

  return apiClient;
}
