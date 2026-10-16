import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { categoriesApi } from "../client"
import { CreateCategoryDto, UpdateCategoryDto } from "../api/generated"

const getCategoriesQuery = () =>
  queryOptions({
    queryKey: ["categories"],
    queryFn: () =>
      categoriesApi
        .findAll()
        .then((res) => res.data),
  })

const getCategoryQuery = (id: number) =>
  queryOptions({
    queryKey: ["categories", id],
    queryFn: () =>
      categoriesApi
        .findOne(id)
        .then((res) => res.data),
  })

export const useCategoriesApi = () => {
  const queryClient = useQueryClient()

  const mutateCreateCategory = useMutation({
    mutationFn: ({ params: { createCategoryDto } }: { params: { createCategoryDto: CreateCategoryDto }; onSettledCallback?: () => void }) =>
      categoriesApi.create(createCategoryDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateUpdateCategory = useMutation({
    mutationFn: ({ params: { id, updateCategoryDto } }: { params: { id: number; updateCategoryDto: UpdateCategoryDto }; onSettledCallback?: () => void }) =>
      categoriesApi.update(id, updateCategoryDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateRemoveCategory = useMutation({
    mutationFn: ({ params: { id } }: { params: { id: number }; onSettledCallback?: () => void }) =>
      categoriesApi.remove(id),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    getCategoriesQuery,
    getCategoryQuery,
    mutateCreateCategory,
    mutateUpdateCategory,
    mutateRemoveCategory,
  }
}
