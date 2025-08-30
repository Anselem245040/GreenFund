import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  useEffect(() => {
    if (name) {
      localStorage.setItem("name", name);
    }
  }, [name]);
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
