import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function GuestGuard() {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
