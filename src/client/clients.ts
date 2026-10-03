import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import {
  AuthApi,
  CashShiftsApi,
  CategoriesApi,
  Configuration,
  DashboardApi,
  DishesApi,
  IngredientsApi,
  InventoryApi,
  MenuApi,
  OrdersApi,
  ProductsApi,
  TransactionsApi,
} from "../api/generated";
import { QueryClient } from "@tanstack/react-query";

export let tanstackClient: QueryClient;
export let authApi: AuthApi;
export let cashShiftsApi: CashShiftsApi;
export let categoriesApi: CategoriesApi;
export let dashboardApi: DashboardApi;
export let dishesApi: DishesApi;
export let ingredientsApi: IngredientsApi;
export let inventoryApi: InventoryApi;
export let menuApi: MenuApi;
export let ordersApi: OrdersApi;
export let productsApi: ProductsApi;
export let transactionsApi: TransactionsApi;

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
  cashShiftsApi = new CashShiftsApi(configuration, undefined, apiClient);
  categoriesApi = new CategoriesApi(configuration, undefined, apiClient);
  dashboardApi = new DashboardApi(configuration, undefined, apiClient);
  dishesApi = new DishesApi(configuration, undefined, apiClient);
  ingredientsApi = new IngredientsApi(configuration, undefined, apiClient);
  inventoryApi = new InventoryApi(configuration, undefined, apiClient);
  menuApi = new MenuApi(configuration, undefined, apiClient);
  ordersApi = new OrdersApi(configuration, undefined, apiClient);
  productsApi = new ProductsApi(configuration, undefined, apiClient);
  transactionsApi = new TransactionsApi(configuration, undefined, apiClient);

  return apiClient;
}
