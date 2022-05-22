import { authImpl } from '~/domain/repository/auth';
import { userImpl } from '~/domain/repository/user';
import { httpClient } from '~/libs/httpClient';

export const backend = (baseURL?: string) => {
  const client = httpClient(baseURL);

  return {
    user: userImpl(client),
    auth: authImpl(client),
  };
};

export type Backend = ReturnType<typeof backend>;

export type Domain = keyof Backend;
