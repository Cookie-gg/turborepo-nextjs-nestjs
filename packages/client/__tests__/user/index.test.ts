import { mocks } from '@cookie-gg/shared';
import { httpClient } from '~/libs/httpClient';
import { testServer } from '~/libs/msw';

describe('/user', () => {
  beforeAll(() => testServer.listen());
  afterEach(() => testServer.resetHandlers());
  afterAll(() => testServer.close());
  it('/user (Get)', async () => {
    const users = await httpClient().user.$get();

    expect(users).toStrictEqual(expect.objectContaining(mocks.user.users));
  });
});
