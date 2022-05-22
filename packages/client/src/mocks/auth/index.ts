/* eslint-disable @typescript-eslint/no-unused-vars */
import { mocks } from '@cookie-gg/shared';
import { AuthUseCase } from '~/domain/repository/auth';

export const auth: AuthUseCase = {
  login: async (body) => mocks.auth.auth,
  status: async (headers) => mocks.auth.auth,
  refresh: async (headers) => mocks.auth.auth,
};
