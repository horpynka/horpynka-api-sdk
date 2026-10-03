import { queryOptions } from "@tanstack/react-query"
import { menuApi } from "../client"

const getMenuQuery = () =>
  queryOptions({
    queryKey: ["menu"],
    queryFn: () =>
      menuApi
        .findAll()
        .then((res) => res.data),
  })

export const useMenuApi = () => {
  return {
    getMenuQuery,
  }
}
