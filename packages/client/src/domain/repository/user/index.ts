import { CreateUserInput, UpdateUserInput } from '~/apis/@types';
import { Client } from '~/libs/httpClient';

const getUsers = async (client: Client) => {
  const data = await client.user.$get();
  return data;
};

const getUser = async (client: Client, id: string) => {
  const data = await client.user._id(id).$get();
  return data;
};

const createUser = async (client: Client, body: CreateUserInput) => {
  const data = await client.user.$post({ body });
  return data;
};

const deleteUser = async (client: Client, id: string) => {
  return await client.user._id(id).$delete();
};

const updateUser = async (client: Client, id: string, body: UpdateUserInput) => {
  return await client.user._id(id).$put({ body });
};

export const userImpl = (client: Client) => {
  return {
    getUser: (id: string) => getUser(client, id),
    deleteUser: (id: string) => deleteUser(client, id),
    updateUser: (id: string, body: UpdateUserInput) => updateUser(client, id, body),
    getUsers: () => getUsers(client),
    createUser: (body: CreateUserInput) => createUser(client, body),
  };
};

export type UserUseCase = ReturnType<typeof userImpl>;
