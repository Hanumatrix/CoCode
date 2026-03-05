import "./App.css";
import { SignInButton, SignOutButton, UserButton, useUser } from "@clerk/react";

function App() {
  const { user } = useUser();

  return (
    <>
      <h1>Welcome to CoCode</h1>

      {!user ? <SignInButton mode="modal" /> : <SignOutButton />}

      <UserButton />
    </>
  );
}

export default App;
