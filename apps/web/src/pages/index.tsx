import type { NextPage } from "next";
import { Button } from "ui";
import { useUser } from "~/store/globals/user";

const Page: NextPage = () => {
  const { users } = useUser();

  return (
    <>
      <Button />
      <ul>
        {users &&
          users.map((user) =>
            Object.entries(user).map(([key, value], i) => (
              <li key={i}>
                {key} {value}
              </li>
            ))
          )}
      </ul>
    </>
  );
};

export default Page;
