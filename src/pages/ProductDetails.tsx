import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../types/Product";
import { request } from "../utils/request";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    setLoading(true);
    const response = await request(`/products/${id}`);

    if (!response.ok) {
      setError("Failed to load product");
      setLoading(false);
      return;
    }

    const data = await response.json();
    setProduct(data);
    setLoading(false);
  };

  if (loading) return <p className="text-center mt-20 text-lg">Loading product...</p>;
  if (error || !product) return <p className="text-center mt-20 text-red-500">{error || "Product not found."}</p>;

  const finalPrice = product.appliedDiscountPercentage
    ? product.price * (1 - product.appliedDiscountPercentage / 100)
    : product.price;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <img src={product.imageUrl} alt={product.name} className="w-full h-[500px] object-cover rounded" />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 text-sm capitalize mb-4">Gender: {product.sex}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>

            {product.appliedDiscountPercentage > 0 ? (
              <div className="mb-4">
                <p className="text-2xl font-bold text-red-600">
                  ${finalPrice.toFixed(2)}
                  <span className="ml-3 text-lg line-through text-gray-400">${product.price.toFixed(2)}</span>
                </p>
                <p className="text-green-600 text-sm font-semibold">{product.appliedDiscountPercentage}% OFF</p>
              </div>
            ) : (
              <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
            )}

            <div className="mb-6">
              <p className="font-semibold mb-2">Available Sizes:</p>
              <div className="flex gap-2 flex-wrap">
                {Object.entries(product.availableSizeQtt).map(([size, qtt]) => (
                  <span
                    key={size}
                    className={`px-3 py-1 rounded border text-sm ${
                      qtt > 0 ? "bg-blue-100 text-blue-800" : "bg-gray-200 text-gray-500 line-through"
                    }`}
                  >
                    {size} {qtt === 0 && "(out)"}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button className="mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
