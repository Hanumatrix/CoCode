import "./App.css";
import {
  SignInButton
} from "@clerk/react";

function App() {
  return (
    <>
      <h1>Welcome to CoCode</h1>

      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </>
  );
}

export default App;
