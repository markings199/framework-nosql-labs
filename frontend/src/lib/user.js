// Decode JWT payload to read role/client hints
export function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  
  // JWT: header.payload.signature
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  
  try {
    const payload = JSON.parse(atob(parts[1]));
    // expecting { id, email, role, ... }
    return { id: payload.id, email: payload.email, role: payload.role };
  } catch {
    return null;
  }
}