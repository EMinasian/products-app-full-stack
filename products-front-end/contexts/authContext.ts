import { createContext } from "react";

export type UserType = {
  userId: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  profilePictureUrl: string;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | null;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
});

export default AuthContext;
