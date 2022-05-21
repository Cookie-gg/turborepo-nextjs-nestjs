/* eslint-disable */
export type CreateUserInput = {
  /** The id of user */
  uid: string
  /** Your name */
  name: string
  /** Your email */
  email: string
  /** Your password */
  password: string
  /** Is Your account published? */
  published?: boolean | null | undefined
}

export type User = {
  /** The id of user */
  uid: string
  /** Your name */
  name: string
  /** Your email */
  email: string
  /** Your password */
  password: string
  /** Is Your account published? */
  published?: boolean | null | undefined
  /** The date which the user was created */
  createdAt?: string | null | undefined
  /** The date which the user was updated */
  updatedAt?: string | null | undefined
}

export type UpdateUserInput = {
  /** The id of user */
  uid: string
  /** Your name */
  name: string
  /** Your email */
  email: string
  /** Your password */
  password: string
  /** Is Your account published? */
  published?: boolean | null | undefined
}

export type LoginInput = {
  /** Uid and email are unique value */
  uniqueInfo: string
  /** The password of the user */
  password: string
}

export type Auth = {
  /** The token of authentication availables for 2 hours */
  token: string
  /** The refreshtoken of authentication availables for 2 weeks */
  refreshToken: string

  user: {
    /** The id of user */
    uid: string
    /** Your name */
    name: string
    /** Your email */
    email: string
    /** Your password */
    password: string
    /** Is Your account published? */
    published?: boolean | null | undefined
    /** The date which the user was created */
    createdAt?: string | null | undefined
    /** The date which the user was updated */
    updatedAt?: string | null | undefined
  }
}
