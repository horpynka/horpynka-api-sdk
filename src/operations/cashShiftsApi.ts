import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { cashShiftsApi } from "../client"
import { CloseCashShiftDto, OpenCashShiftDto } from "../api/generated"

const getCashShiftsQuery = () =>
  queryOptions({
    queryKey: ["cash-shifts"],
    queryFn: () =>
      cashShiftsApi
        .findAll()
        .then((res) => res.data),
  })

const getCashShiftQuery = (id: number) =>
  queryOptions({
    queryKey: ["cash-shifts", id],
    queryFn: () =>
      cashShiftsApi
        .findOne(id)
        .then((res) => res.data),
  })

export const useCashShiftsApi = () => {
  const queryClient = useQueryClient()

  const mutateOpenCashShift = useMutation({
    mutationFn: ({ params: { openCashShiftDto } }: { params: { openCashShiftDto: OpenCashShiftDto }; onSettledCallback?: () => void }) =>
      cashShiftsApi.open(openCashShiftDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["cash-shifts"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateCloseCashShift = useMutation({
    mutationFn: ({ params: { id, closeCashShiftDto } }: { params: { id: number; closeCashShiftDto: CloseCashShiftDto }; onSettledCallback?: () => void }) =>
      cashShiftsApi.close(id, closeCashShiftDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["cash-shifts"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    getCashShiftsQuery,
    getCashShiftQuery,
    mutateOpenCashShift,
    mutateCloseCashShift,
  }
}
