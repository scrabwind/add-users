import type {
  CreateUserRequest,
  CreateUserResponse,
  GetUserResponse,
  GetUsersResponse,
  User
} from '@/common/types/request.types'

export const getUser = async (id: string): Promise<User> => {
  const fetchResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${id}`
  )
  const response: GetUserResponse = await fetchResponse.json()

  return response.data
}

export const getUsersRepsonse = async (
  page = 1,
  perPage = 8
): Promise<GetUsersResponse> => {
  const fetchResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/users?per_page=${perPage}&page=${page}`
  )
  const response: GetUsersResponse = await fetchResponse.json()

  return response
}

export const createUser = async (
  data: CreateUserRequest
): Promise<CreateUserResponse> => {
  const fetchResponse = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    body: JSON.stringify(data),
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const response: CreateUserResponse = await fetchResponse.json()

  return response
}

export const deleteUser = async (id: string): Promise<number> => {
  const fetchResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${id}`
  )
  const response = fetchResponse.status

  return response
}
