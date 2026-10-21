import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { menuApi } from "../client"
import { UpdateMenuItemSellingDto } from "../api/generated"

const getMenuQuery = () =>
  queryOptions({
    queryKey: ["menu"],
    queryFn: () =>
      menuApi
        .findAll()
        .then((res) => res.data),
  })

const getCatalogQuery = () =>
  queryOptions({
    queryKey: ["menu", "catalog"],
    queryFn: () =>
      menuApi
        .findCatalog()
        .then((res) => res.data),
  })

export const useMenuApi = () => {
  const queryClient = useQueryClient()

  const mutateUpdateSelling = useMutation({
    mutationFn: ({ params: { id, updateMenuItemSellingDto } }: { params: { id: string; updateMenuItemSellingDto: UpdateMenuItemSellingDto }; onSettledCallback?: () => void }) =>
      menuApi.updateSelling(id, updateMenuItemSellingDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["menu"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    getMenuQuery,
    getCatalogQuery,
    mutateUpdateSelling,
  }
}
