/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 201
    resBody: Types.User
  }

  delete: {
    status: 201
    resBody: Types.DeleteResult
  }

  put: {
    status: 201
    resBody: Types.UpdateResult
    reqBody: Types.UpdateUserInput
  }
}
