import { queryOptions } from "@tanstack/react-query"
import { ingredientsApi } from "../client"

const getIngredientsQuery = () =>
  queryOptions({
    queryKey: ["ingredients"],
    queryFn: () =>
      ingredientsApi
        .findAll()
        .then((res) => res.data),
  })

const getIngredientQuery = (id: number) =>
  queryOptions({
    queryKey: ["ingredients", id],
    queryFn: () =>
      ingredientsApi
        .findOne(id)
        .then((res) => res.data),
  })

export const useIngredientsApi = () => {
  return {
    getIngredientsQuery,
    getIngredientQuery,
  }
}
