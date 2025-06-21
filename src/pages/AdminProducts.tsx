// hooks
import useProducts from "../hooks/useProducts";

const AdminProducts = () => {
  const { products, error, isLoading } = useProducts();

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Products</h1>

      {isLoading && <p className="text-center text-gray-600 text-lg font-medium animate-pulse">Loading...</p>}

      {error && <p className="text-center text-red-600 font-semibold text-lg">Error loading products!</p>}

      {products && products.length > 0 ? (
        <ul className="space-y-4">
          {products.map((p) => (
            <li
              key={p.id}
              className="flex justify-between items-center bg-gray-50 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition"
            >
              <span className="font-semibold text-gray-800">{p.name}</span>
              <span className="text-green-700 font-semibold">${p.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p className="text-center text-gray-500 italic">No products found.</p>
      )}
    </div>
  );
};

export default AdminProducts;
