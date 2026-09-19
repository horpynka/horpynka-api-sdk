import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authApi } from "../client"
import { SignInUserDTO, SignUpUserDTO } from "../api/generated"

export const useAuthApi = () => {
  const queryClient = useQueryClient()

  const mutateRefresh = useMutation({
    mutationFn: ({ onSettledCallback }: { onSettledCallback?: () => void } = {}) =>
      authApi.refresh(),
    onSettled: (_data, _error, variables) => {
      queryClient.invalidateQueries({ queryKey: ["auth"] })
      variables?.onSettledCallback && variables.onSettledCallback()
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
    mutateRefresh,
    mutateSignIn,
    mutateSignUp,
  }
}
