export type ResponseSupport = {
  url: string
  text: string
}

export type GetUserResponse = {
  data: {
    id: string
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
  support: ResponseSupport
}

export type User = GetUserResponse['data']

export type GetUsersResponse = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
  support: ResponseSupport
}

export type CreateUserRequest = Record<never, unknown>

export type CreateUserResponse =
  | CreateUserRequest
  | {
      id: number
      createdAt: string
    }
