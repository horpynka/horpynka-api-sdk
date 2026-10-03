import { queryOptions } from "@tanstack/react-query"
import { cashShiftsApi } from "../client"

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
  return {
    getCashShiftsQuery,
    getCashShiftQuery,
  }
}
