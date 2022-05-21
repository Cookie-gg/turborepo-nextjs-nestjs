/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    reqHeaders?: {
      /** must be started with "bearer" */
      authorization?: string | undefined
    } | undefined

    status: 201
    resBody: Types.Auth
  }
}
