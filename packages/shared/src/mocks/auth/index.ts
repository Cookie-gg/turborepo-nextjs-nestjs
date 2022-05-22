import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';
import { zAuth, zUser } from '~/models';

const auth = generateMock(
  zAuth.omit({ user: true }).merge(
    z.object({
      user: zUser.omit({ createdAt: true, updatedAt: true }),
    }),
  ),
);

export const mockAuth = {
  auth,
};
