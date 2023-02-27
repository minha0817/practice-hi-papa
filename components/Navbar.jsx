import Link from "next/link";
import react, { useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../pages/api/firebase";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <nav>
      <Link href="/">
        <h1>Hipapa</h1>
      </Link>
      <p>Welcome, teacher!</p>
      {!user ? (
        <button onClick={login}>login</button>
      ) : (
        <button onClick={logout}>logout</button>
      )}
      <Link href="/reports">reports</Link>
    </nav>
  );
}
