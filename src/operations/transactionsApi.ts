import { queryOptions } from "@tanstack/react-query"
import { transactionsApi } from "../client"

const getTransactionsQuery = () =>
  queryOptions({
    queryKey: ["transactions"],
    queryFn: () =>
      transactionsApi
        .findAll()
        .then((res) => res.data),
  })

export const useTransactionsApi = () => {
  return {
    getTransactionsQuery,
  }
}
