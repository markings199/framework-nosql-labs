import { Navigate } from "react-router-dom";

export default function RoleRoute({ user, allow = [], children }) {
  // If no user, redirect to login
  if (!user) return <Navigate to="/login" replace />;
  // If user's role is allowed, render children; else redirect to home
  return allow.includes(user.role) ? children : <Navigate to="/" replace />;
}
