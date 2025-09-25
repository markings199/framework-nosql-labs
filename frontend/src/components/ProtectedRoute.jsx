import { Navigate } from "react-router-dom";
import { getToken } from "../lib/auth";

export default function ProtectedRoute({ children }) {
  const token = getToken();
  // If token exists, render children; else redirect to login
  return token ? children : <Navigate to="/login" replace />;
}
