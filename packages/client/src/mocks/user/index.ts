/* eslint-disable @typescript-eslint/no-unused-vars */
import { mocks } from '@cookie-gg/shared';
import { UserUseCase } from '~/domain/repository/user';

export const user: UserUseCase = {
  getUser: async (id) => mocks.user.user,
  deleteUser: async (id) => ({ affected: 1 }),
  updateUser: async (id) => ({ affected: 1, generatedMaps: [] }),
  getUsers: async () => mocks.user.users,
  createUser: async (body) => mocks.user.user,
};
