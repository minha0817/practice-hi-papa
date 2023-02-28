import Link from "next/link";
import react, { useEffect, useState } from "react";
import { useAuthContext } from "../pages/context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <nav>
      <Link href="/">
        <h1>Hipapa</h1>
      </Link>
      {user ? (
        <>
          {user.isTeacher && <p>Welcome, teacher!</p>}
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <button onClick={login}>login</button>
      )}
      <Link href="/reports">reports</Link>
    </nav>
  );
}
