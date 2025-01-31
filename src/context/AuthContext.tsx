import React, { createContext, ReactNode, useState, useEffect } from "react";

interface AuthContextType {
  userInfo: { id: string; name: string; email: string } | null;
  setUserInfo: React.Dispatch<
    React.SetStateAction<{ id: string; name: string; email: string } | null>
  >;
  authToken: string | null;
  setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType>({
  userInfo: null,
  setUserInfo: () => {},
  authToken: null,
  setAuthToken: () => {},
});

const decodeJwt = (token: string) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<AuthContextType["userInfo"]>(null);
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem("authToken"));

  useEffect(() => {
    if (authToken) {
      const decodedToken = decodeJwt(authToken);
      if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
        setUserInfo({
          id: decodedToken.id,
          name: decodedToken.name,
          email: decodedToken.email,
        });
      } else {
        localStorage.removeItem("authToken");
        setAuthToken(null);
        setUserInfo(null);
      }
    }
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo, authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
