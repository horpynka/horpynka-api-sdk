import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { ordersApi } from "../client"
import { CreateOrderDto, UpdateOrderDto } from "../api/generated"

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

const getOrderQuery = (id: number) =>
  queryOptions({
    queryKey: ["orders", id],
    queryFn: () =>
      ordersApi
        .findOne(id)
        .then((res) => res.data),
  })

export const useOrdersApi = () => {
  const queryClient = useQueryClient()

  const mutateCreateOrder = useMutation({
    mutationFn: ({ params: { createOrderDto } }: { params: { createOrderDto: CreateOrderDto }; onSettledCallback?: () => void }) =>
      ordersApi.create(createOrderDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateUpdateOrder = useMutation({
    mutationFn: ({ params: { id, updateOrderDto } }: { params: { id: number; updateOrderDto: UpdateOrderDto }; onSettledCallback?: () => void }) =>
      ordersApi.update(id, updateOrderDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateDeleteReceipt = useMutation({
    mutationFn: ({ params: { id } }: { params: { id: number }; onSettledCallback?: () => void }) =>
      ordersApi.removeActiveReceipt(id),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    getOrdersQuery,
    getOrderQuery,
    mutateCreateOrder,
    mutateUpdateOrder,
    mutateDeleteReceipt,
  }
}
