import { queryOptions } from "@tanstack/react-query"
import { categoriesApi } from "../client"

const getCategoriesQuery = () =>
  queryOptions({
    queryKey: ["categories"],
    queryFn: () =>
      categoriesApi
        .findAll()
        .then((res) => res.data),
  })

export const useCategoriesApi = () => {
  return {
    getCategoriesQuery,
  }
}
