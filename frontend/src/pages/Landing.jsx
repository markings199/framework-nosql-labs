export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-3">Welcome to ShopHub</h1>
      <p className="text-slate-600 mb-6">A minimal e-commerce MVP built with React and MongoDB</p>
      <div className="flex gap-3">
        <a href="/login" className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">Login</a>
        <a href="/signup" className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 transition">Signup</a>
      </div>
    </div>
  );
}