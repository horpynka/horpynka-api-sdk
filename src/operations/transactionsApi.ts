import { queryOptions } from "@tanstack/react-query"
import { transactionsApi } from "../client"

const getTransactionsQuery = (params?: { from?: string; to?: string }) =>
  queryOptions({
    queryKey: ["transactions", params],
    queryFn: () =>
      transactionsApi
        .findAll(params?.from, params?.to)
        .then((res) => res.data),
  })

export const useTransactionsApi = () => {
  return {
    getTransactionsQuery,
  }
}
