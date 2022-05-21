/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    resBody: Types.User
    reqBody: Types.CreateUserInput
  }

  get: {
    status: 201
    resBody: Types.User[]
  }
}
