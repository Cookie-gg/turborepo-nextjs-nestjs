import useSWR from "swr";
import { swrConfig } from "~/libs/hooks";
import { User } from "@cookie-gg/client";
import { backend } from "~/libs/backend";

export const useUser = () => {
  const { data: users, mutate: mutateUsers } = useSWR<User[]>(
    "user",
    backend.user.getUsers,
    swrConfig
  );

  return { users, mutateUsers };
};
