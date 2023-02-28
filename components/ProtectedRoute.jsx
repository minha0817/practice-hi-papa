import React from "react";
import Link from "next/link";
import { useAuthContext } from "../pages/context/AuthContext";

export default function ProtectedRoute({ children, reqireTeacher }) {
  const { user } = useAuthContext();
  if (!user || (reqireTeacher && !user.isTeacher)) {
    return <Link href="/" replace />;
  }
  return children;
}
