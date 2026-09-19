import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import {
  AuthApi,
  CategoriesApi,
  Configuration,
  DishesApi,
  OrdersApi,
  ProductsApi,
} from "../api/generated";
import { QueryClient } from "@tanstack/react-query";

export let tanstackClient: QueryClient;
export let authApi: AuthApi;
export let categoriesApi: CategoriesApi;
export let dishesApi: DishesApi;
export let ordersApi: OrdersApi;
export let productsApi: ProductsApi;

export function initApiClient(config: CreateAxiosDefaults): AxiosInstance {
  const apiClient = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout ?? 10_000,
  });

  const configuration = new Configuration({
    basePath: config.baseURL,
  });

  tanstackClient = new QueryClient();
  authApi = new AuthApi(configuration, undefined, apiClient);
  categoriesApi = new CategoriesApi(configuration, undefined, apiClient);
  dishesApi = new DishesApi(configuration, undefined, apiClient);
  ordersApi = new OrdersApi(configuration, undefined, apiClient);
  productsApi = new ProductsApi(configuration, undefined, apiClient);

  return apiClient;
}
