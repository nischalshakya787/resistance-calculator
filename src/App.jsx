import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import { UserContextProvider } from "./UserContext";
export default function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}
