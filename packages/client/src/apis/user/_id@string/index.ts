/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 201
    resBody: Types.User
  }

  delete: {
    status: 200
  }

  put: {
    status: 200
    reqBody: Types.UpdateUserInput
  }
}
