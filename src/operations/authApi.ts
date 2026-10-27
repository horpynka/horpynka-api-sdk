import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { authApi } from "../client"
import { RefreshTokenDto, SignInUserDTO, SignUpUserDTO } from "../api/generated"

const getSessionQuery = () =>
  queryOptions({
    queryKey: ["auth"],
    queryFn: () =>
      authApi
        .getSession()
        .then((res) => res.data),
  })

export const useAuthApi = () => {
  const queryClient = useQueryClient()

  const mutateRefresh = useMutation({
    mutationFn: ({ params: { refreshTokenDto } }: { params: { refreshTokenDto: RefreshTokenDto }; onSettledCallback?: () => void }) =>
      authApi.refresh(refreshTokenDto),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["auth"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateSignIn = useMutation({
    mutationFn: ({ params: { signInUserDTO } }: { params: { signInUserDTO: SignInUserDTO }; onSettledCallback?: () => void }) =>
      authApi.signIn(signInUserDTO),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["auth"] })
      onSettledCallback && onSettledCallback()
    },
  })

  const mutateSignUp = useMutation({
    mutationFn: ({ params: { signUpUserDTO } }: { params: { signUpUserDTO: SignUpUserDTO }; onSettledCallback?: () => void }) =>
      authApi.signUp(signUpUserDTO),
    onSettled: (_data, _error, { onSettledCallback }) => {
      queryClient.invalidateQueries({ queryKey: ["auth"] })
      onSettledCallback && onSettledCallback()
    },
  })

  return {
    getSessionQuery,
    mutateRefresh,
    mutateSignIn,
    mutateSignUp,
  }
}
