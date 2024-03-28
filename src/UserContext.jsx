import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [color, setColor] = useState([""]);

  return (
    <UserContext.Provider value={{ color, setColor }}>
      {children}
    </UserContext.Provider>
  );
}
