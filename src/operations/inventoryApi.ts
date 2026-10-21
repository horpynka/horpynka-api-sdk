import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { inventoryApi } from "../client"
import { SaveInventoryDto } from "../api/generated"

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
  const queryClient = useQueryClient()

  const mutateStartInventory = useMutation({
    mutationFn: ({ onSettledCallback }: { onSettledCallback?: () => void } = {}) =>
      inventoryApi.startInventory(),
    onSettled: (_data, _error, variables) => {
      queryClient.invalidateQueries({ queryKey: ["inventory"] })
      variables?.onSettledCallback && variables.onSettledCallback()
    },
  })

  const mutateSaveInventoryActualQuantities = useMutation({
    mutationFn: ({ params: { id, saveInventoryDto } }: { params: { id: number; saveInventoryDto: SaveInventoryDto }; onSettledCallback?: () => void }) =>
      inventoryApi.saveInventoryActualQuantities(id, saveInventoryDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["inventory"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateCompleteInventory = useMutation({
    mutationFn: ({ params: { id } }: { params: { id: number }; onSettledCallback?: () => void }) =>
      inventoryApi.completeInventory(id),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["inventory"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    getInventoriesQuery,
    getInventoryQuery,
    mutateStartInventory,
    mutateSaveInventoryActualQuantities,
    mutateCompleteInventory,
  }
}
