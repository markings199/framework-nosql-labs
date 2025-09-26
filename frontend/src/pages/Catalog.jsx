import { useEffect, useState } from "react";

export default function Catalog() {
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/categories")
      .then(r => r.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  useEffect(() => {
    setLoading(true);
    const q = activeCat ? `?category=${encodeURIComponent(activeCat)}` : "";
    fetch(`/api/products${q}`)
      .then(r => r.json())
      .then(setItems)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [activeCat]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Product Catalog</h1>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCat("")}
          className={`px-4 py-2 rounded-full border transition-colors ${
            activeCat === "" 
              ? "bg-blue-600 text-white border-blue-600" 
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          All Products
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 rounded-full border transition-colors ${
              activeCat === cat 
                ? "bg-blue-600 text-white border-blue-600" 
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      {loading ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading products...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(product => (
            <div key={product._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="text-2xl font-bold text-blue-600">₱{product.price.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Stock: {product.stock || 0} units</p>
              </div>
            </div>
          ))}
          
          {items.length === 0 && (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}