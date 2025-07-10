import { createContext } from "react";

type UserType = {
  name: string;
  email: string;
};

export const UserContext = createContext<{
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}>({
  user: null,
  setUser: () => {},
});
