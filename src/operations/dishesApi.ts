import { queryOptions } from "@tanstack/react-query"
import { dishesApi } from "../client"

const getDishesQuery = () =>
  queryOptions({
    queryKey: ["dishes"],
    queryFn: () =>
      dishesApi
        .findAll()
        .then((res) => res.data),
  })

const getDishQuery = (id: number) =>
  queryOptions({
    queryKey: ["dishes", id],
    queryFn: () =>
      dishesApi
        .findOne(id)
        .then((res) => res.data),
  })

export const useDishesApi = () => {
  return {
    getDishesQuery,
    getDishQuery,
  }
}
