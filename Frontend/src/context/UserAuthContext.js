import { createContext, useContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  role: null,
  login: () => {},
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
