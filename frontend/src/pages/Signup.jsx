import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setMsg("Creating account...");
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setMsg(res.ok ? "Account created. You can now login." : "Signup failed.");
  }

  return (
    <form onSubmit={handleSignup} className="max-w-sm mx-auto mt-10 space-y-3">
      <input placeholder="Name" className="w-full border rounded-lg px-3 py-2"
        value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" className="w-full border rounded-lg px-3 py-2"
        value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="w-full border rounded-lg px-3 py-2"
        value={form.password} onChange={e=>setForm({ ...form, password: e.target.value })} />
      <button className="w-full bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 transition">Sign up</button>
      {msg && <p className="text-sm text-slate-600">{msg}</p>}
    </form>
  );
}
