export default function Landing() {
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Welcome to ShopHub
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        A minimal e-commerce MVP built with React and MongoDB
      </p>
      <div className="space-x-4">
        <a 
          href="/login" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          Login
        </a>
        <a 
          href="/signup" 
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-block"
        >
          Signup
        </a>
      </div>
    </div>
  );
}