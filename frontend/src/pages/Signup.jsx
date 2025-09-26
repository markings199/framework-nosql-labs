import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setMsg("Creating account...");
    
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      
      setMsg(res.ok ? "Account created. You can now login." : "Signup failed.");
      
      if (res.ok) {
        setForm({ name: "", email: "", password: "" });
      }
    } catch (error) {
      setMsg("Network error. Please try again.");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for ShopHub</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input 
          placeholder="Full Name" 
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.name} 
          onChange={e => setForm({ ...form, name: e.target.value })} 
          required
        />
        <input 
          type="email"
          placeholder="Email" 
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.email} 
          onChange={e => setForm({ ...form, email: e.target.value })} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.password} 
          onChange={e => setForm({ ...form, password: e.target.value })} 
          required
        />
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors font-medium"
        >
          Sign Up
        </button>
        {msg && <p className="text-center text-sm text-gray-600">{msg}</p>}
      </form>
    </div>
  );
}