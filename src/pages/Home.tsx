import useProducts from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { products, isLoading, error } = useProducts();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="text-center py-12 bg-white shadow-md mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Store</h1>
        <p className="text-gray-500 mt-2 text-lg">Find your style. Shop the latest trends.</p>
      </header>

      <div className="px-6">
        {isLoading && <p className="text-center text-lg">Loading products...</p>}
        {error && <p className="text-center text-red-500">Failed to load products.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const finalPrice =
              product.appliedDiscountPercentage > 0
                ? product.price * (1 - product.appliedDiscountPercentage / 100)
                : product.price;

            return (
              <div
                key={product.id}
                onClick={() => navigate(`/products/${product.id}`)}
                className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />

                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                  <p className="text-sm text-gray-500 capitalize mb-2">{product.sex}</p>

                  {product.appliedDiscountPercentage > 0 ? (
                    <div>
                      <p className="text-red-600 font-bold text-lg">
                        ${finalPrice.toFixed(2)}
                        <span className="text-sm text-gray-400 line-through ml-2">${product.price.toFixed(2)}</span>
                      </p>
                      <p className="text-sm text-green-600 font-medium">{product.appliedDiscountPercentage}% off</p>
                    </div>
                  ) : (
                    <p className="text-gray-800 font-semibold text-lg">${product.price.toFixed(2)}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
