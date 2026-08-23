import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ordersApi } from "../client"

const getOrdersQuery = (params?: {
  page?: number
  limit?: number
  status?: string
}) =>
  queryOptions({
    queryKey: ["orders", params],
    queryFn: () =>
      ordersApi
        .findAll(params?.page, params?.limit, params?.status)
        .then((res) => res.data),
  })

export const useOrdersApi = () => {
  const queryClient = useQueryClient()

  const mutateDeleteReceipt = useMutation({
    mutationFn: ({ params: { id } }: { params: { id: number }; onSettledCallback?: () => void }) =>
      ordersApi.removeActiveReceipt(id),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    mutateDeleteReceipt,
    getOrdersQuery
  }
}
