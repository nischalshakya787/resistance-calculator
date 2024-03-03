import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [color, setColor] = useState([
    "white",
    "white",
    "white",
    "white",
    "white",
  ]);

  return (
    <UserContext.Provider value={{ color, setColor }}>
      {children}
    </UserContext.Provider>
  );
}
