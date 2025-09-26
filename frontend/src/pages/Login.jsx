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
      
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
        navigate("/dashboard");
      } else {
        setMsg("Login failed. Check your credentials.");
      }
    } catch (error) {
      setMsg("Network error. Please try again.");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login to ShopHub</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input 
          type="email"
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email" 
          required
        />
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password" 
          required
        />
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors font-medium"
        >
          Login
        </button>
        {msg && <p className="text-center text-sm text-gray-600">{msg}</p>}
      </form>
    </div>
  );
}