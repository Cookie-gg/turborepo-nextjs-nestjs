import { userImpl } from "~/domain/repository/User";
import { httpClient } from "~/libs/httpClient";

export const backend = (baseURL?: string) => {
  const client = httpClient(baseURL);

  return {
    user: userImpl(client),
  };
};

export type Backend = ReturnType<typeof backend>;

export type Domain = keyof Backend;
