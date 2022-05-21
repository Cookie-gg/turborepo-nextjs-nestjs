import { User } from "~/apis/@types";
import { Client } from "~/libs/httpClient";

const getUsers = async (client: Client): Promise<User[]> => {
  const data = await client.user.$get();
  return data;
};

export const userImpl = (client: Client) => {
  return {
    getUsers: () => getUsers(client),
  };
};

export type UserUseCase = ReturnType<typeof userImpl>;
