import type {
  CreateUserRequest,
  CreateUserResponse,
  GetUserResponse,
  GetUsersResponse,
  User
} from '@/common/types/request.types'

export const getUser = async (id: number): Promise<User> => {
  const fetchResponse = await fetch(`https://reqres.in/api/users/${id}`)
  const response: GetUserResponse = await fetchResponse.json()

  return response.data
}

export const getUsersRepsonse = async (): Promise<GetUsersResponse> => {
  const fetchResponse = await fetch('https://reqres.in/api/users?per_page=8')
  const response: GetUsersResponse = await fetchResponse.json()

  return response
}

export const createUser = async (
  data: CreateUserRequest
): Promise<CreateUserResponse> => {
  const fetchResponse = await fetch('https://reqres.in/api/users', {
    body: JSON.stringify(data),
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const response: CreateUserResponse = await fetchResponse.json()

  return response
}

export const deleteUser = async (id: number): Promise<number> => {
  const fetchResponse = await fetch(`https://reqres.in/api/users/${id}`)
  const response = fetchResponse.status

  return response
}
