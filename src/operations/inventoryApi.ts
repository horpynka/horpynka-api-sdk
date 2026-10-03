import { queryOptions } from "@tanstack/react-query"
import { inventoryApi } from "../client"

const getInventoriesQuery = () =>
  queryOptions({
    queryKey: ["inventory"],
    queryFn: () =>
      inventoryApi
        .findAll()
        .then((res) => res.data),
  })

const getInventoryQuery = (id: number) =>
  queryOptions({
    queryKey: ["inventory", id],
    queryFn: () =>
      inventoryApi
        .findOne(id)
        .then((res) => res.data),
  })

export const useInventoryApi = () => {
  return {
    getInventoriesQuery,
    getInventoryQuery,
  }
}
