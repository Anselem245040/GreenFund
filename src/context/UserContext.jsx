import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  const [email, setEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";
  });

  useEffect(() => {
    if (name) {
      localStorage.setItem("name", name);
    }
    if (email) {
      localStorage.setItem("email", email);
    }
  }, [name, email]);
  return (
    <UserContext.Provider value={{ name, setName, email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};
