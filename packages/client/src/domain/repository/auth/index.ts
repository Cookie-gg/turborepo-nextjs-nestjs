import { LoginInput } from '~/apis/@types';
import { Client } from '~/libs/httpClient';

export interface AuthHeaders {
  authorization?: string;
}

const login = async (client: Client, body: LoginInput) => {
  return await client.auth.$post({ body });
};

const status = async (client: Client, headers: AuthHeaders) => {
  return await client.auth.refresh.$get({ headers });
};

const refresh = async (client: Client, headers: AuthHeaders) => {
  return await client.auth.refresh.$get({ headers });
};

export const authImpl = (client: Client) => {
  return {
    login: (body: LoginInput) => login(client, body),
    status: (headers: AuthHeaders) => status(client, headers),
    refresh: (headers: AuthHeaders) => refresh(client, headers),
  };
};

export type AuthUseCase = ReturnType<typeof authImpl>;
