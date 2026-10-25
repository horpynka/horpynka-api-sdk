import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { usersApi } from "../client"
import { CreateUserDto, UpdateUserPasswordDto, UpdateUserRolesDto } from "../api/generated"

const getUsersQuery = () =>
  queryOptions({
    queryKey: ["users"],
    queryFn: () =>
      usersApi
        .findAll()
        .then((res) => res.data),
  })

export const useUsersApi = () => {
  const queryClient = useQueryClient()

  const mutateCreateUser = useMutation({
    mutationFn: ({ params: { createUserDto } }: { params: { createUserDto: CreateUserDto }; onSettledCallback?: () => void }) =>
      usersApi.create(createUserDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateUpdatePassword = useMutation({
    mutationFn: ({ params: { id, updateUserPasswordDto } }: { params: { id: number; updateUserPasswordDto: UpdateUserPasswordDto }; onSettledCallback?: () => void }) =>
      usersApi.updatePassword(id, updateUserPasswordDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateUpdateRoles = useMutation({
    mutationFn: ({ params: { id, updateUserRolesDto } }: { params: { id: number; updateUserRolesDto: UpdateUserRolesDto }; onSettledCallback?: () => void }) =>
      usersApi.updateRoles(id, updateUserRolesDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    getUsersQuery,
    mutateCreateUser,
    mutateUpdatePassword,
    mutateUpdateRoles,
  }
}
