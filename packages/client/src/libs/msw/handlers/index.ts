import { mocks } from '@cookie-gg/shared';
import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost/user', async (req, res, ctx) => {
    return await res(ctx.json(mocks.user.users));
  }),
];
