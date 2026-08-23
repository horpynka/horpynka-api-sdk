import axios, { CreateAxiosDefaults } from "axios";
import { Configuration, OrdersApi } from "../api/generated";
import { QueryClient } from "@tanstack/react-query";

export let tanstackClient: QueryClient;
export let ordersApi: OrdersApi;

export function initApiClient(config: CreateAxiosDefaults): void {
  const apiClient = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout ?? 10_000,
  });

  const configuration = new Configuration({
    basePath: config.baseURL,
  });

  tanstackClient = new QueryClient();
  ordersApi = new OrdersApi(configuration, undefined, apiClient);
}
