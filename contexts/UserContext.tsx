import React, { createContext, ReactElement, useState } from "react";
import { State } from "react-native-gesture-handler";
import { User } from "../types";

export interface IUser {
  signed: boolean;
  user: User | null;
  updateUser: (user: User | null) => void;
}

export const UserContext = createContext<IUser>({
  signed: false,
  user: null,
  updateUser: () => null,
});

export const UserProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [user, setUser] = useState<IUser>({
    signed: false,
    user: null,
    updateUser: (user: User | null) => {
      setUser((state) => ({ ...state, user }));
    },
  });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
