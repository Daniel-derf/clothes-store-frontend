import { createContext, ReactElement, useContext, useState } from "react";

type AuthContextType = {
  jwt: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setJwt(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setJwt(null);
  };

  return <AuthContext.Provider value={{ jwt, login, logout }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext) as AuthContextType;
