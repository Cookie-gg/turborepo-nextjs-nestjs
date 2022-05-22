import { renderHook } from '@testing-library/react-hooks';
import { useUsers } from '~/store/globals/user';
import { mocks } from '@cookie-gg/shared';

describe('useUser', () => {
  test('ユーザーを取得できる', async () => {
    const { result, waitForNextUpdate } = renderHook(useUsers);

    expect(result.current.users).toStrictEqual(undefined);

    await waitForNextUpdate();

    expect(result.current.users).toStrictEqual(expect.objectContaining(mocks.user.users));
  });
});
