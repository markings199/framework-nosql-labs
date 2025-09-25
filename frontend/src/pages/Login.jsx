import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../lib/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setMsg("Signing in...");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json(); // ✅ parse only once

      if (res.ok) {
        console.log("Login success:", data);
        setToken(data.token);
        navigate("/dashboard");
      } else {
        console.warn("Login failed:", data);
        setMsg(data.message || "Login failed. Check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMsg("Server error, please try again.");
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-sm mx-auto mt-10 space-y-3"
    >
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Password"
      />
      <button
        className="w-full bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 transition"
      >
        Login
      </button>
      {msg && <p className="text-sm text-slate-600">{msg}</p>}
    </form>
  );
}
