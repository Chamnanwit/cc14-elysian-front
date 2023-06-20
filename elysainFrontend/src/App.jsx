import { useState } from "react";
import LoginButton from "./features/auth/components/LoginButton";
import LogoutButton from "./features/auth/components/LogoutButton";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default App;
