import { queryOptions } from "@tanstack/react-query"
import { dashboardApi } from "../client"

const getStatsQuery = () =>
  queryOptions({
    queryKey: ["dashboard"],
    queryFn: () =>
      dashboardApi
        .getStats()
        .then((res) => res.data),
  })

export const useDashboardApi = () => {
  return {
    getStatsQuery,
  }
}
