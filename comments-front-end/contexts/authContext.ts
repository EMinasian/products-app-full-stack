import { createContext } from "react";

const AuthContext = createContext<unknown>({ isAuthenticated: false, user: null });

export default AuthContext;
