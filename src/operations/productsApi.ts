import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { productsApi } from "../client"
import { CreateProductDto, UpdateProductDto } from "../api/generated"

const getProductsQuery = () =>
  queryOptions({
    queryKey: ["products"],
    queryFn: () =>
      productsApi
        .findAll()
        .then((res) => res.data),
  })

const getProductQuery = (id: number) =>
  queryOptions({
    queryKey: ["products", id],
    queryFn: () =>
      productsApi
        .findOne(id)
        .then((res) => res.data),
  })

export const useProductsApi = () => {
  const queryClient = useQueryClient()

  const mutateCreateProduct = useMutation({
    mutationFn: ({ params: { createProductDto } }: { params: { createProductDto: CreateProductDto }; onSettledCallback?: () => void }) =>
      productsApi.create(createProductDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateUpdateProduct = useMutation({
    mutationFn: ({ params: { id, updateProductDto } }: { params: { id: number; updateProductDto: UpdateProductDto }; onSettledCallback?: () => void }) =>
      productsApi.update(id, updateProductDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateRemoveProduct = useMutation({
    mutationFn: ({ params: { id } }: { params: { id: number }; onSettledCallback?: () => void }) =>
      productsApi.remove(id),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    getProductsQuery,
    getProductQuery,
    mutateCreateProduct,
    mutateUpdateProduct,
    mutateRemoveProduct,
  }
}
