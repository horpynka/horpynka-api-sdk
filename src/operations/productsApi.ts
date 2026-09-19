import { queryOptions } from "@tanstack/react-query"
import { productsApi } from "../client"

const getProductsQuery = () =>
  queryOptions({
    queryKey: ["products"],
    queryFn: () =>
      productsApi
        .findAll()
        .then((res) => res.data),
  })

export const useProductsApi = () => {
  return {
    getProductsQuery,
  }
}
