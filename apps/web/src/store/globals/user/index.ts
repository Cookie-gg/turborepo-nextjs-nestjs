import useSWR from "swr";
import { backend } from "~/domain/backend";
import { swrConfig } from "~/libs/hooks";
import { User } from "client";

export const useUser = () => {
  const { data: users, mutate: mutateUsers } = useSWR<User[]>(
    "user",
    backend.user.getUsers,
    swrConfig
  );

  return { users, mutateUsers };
};
