import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { ingredientsApi } from "../client"
import { CreateIngredientDto } from "../api/generated"

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
  const queryClient = useQueryClient()

  const mutateCreateIngredient = useMutation({
    mutationFn: ({ params: { createIngredientDto } }: { params: { createIngredientDto: CreateIngredientDto }; onSettledCallback?: () => void }) =>
      ingredientsApi.create(createIngredientDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["ingredients"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    getIngredientsQuery,
    getIngredientQuery,
    mutateCreateIngredient,
  }
}
