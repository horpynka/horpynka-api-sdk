import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { dishesApi } from "../client"
import { CreateDishDto } from "../api/generated"

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
  const queryClient = useQueryClient()

  const mutateCreateDish = useMutation({
    mutationFn: ({ params: { createDishDto } }: { params: { createDishDto: CreateDishDto }; onSettledCallback?: () => void }) =>
      dishesApi.create(createDishDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["dishes"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    getDishesQuery,
    getDishQuery,
    mutateCreateDish,
  }
}
