import { useEffect, useState } from "react";
import { request } from "../utils/request";
import Product from "../types/Product";

const Wishlist = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await request("/wishlist/products");
      if (!res.ok) throw new Error("Failed to fetch wishlist");

      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError("Could not load wishlist");
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (productId: number) => {
    try {
      const res = await request("/wishlist/remove-products", {
        method: "DELETE",
        body: JSON.stringify({ productsIds: [productId] }),
      });
      if (!res.ok) throw new Error("Remove failed");
      setProducts((prev) => prev.filter((p) => p.id !== productId));
    } catch (err) {
      console.error(err);
      alert("Error removing product from wishlist.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading wishlist...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-sm p-4 hover:shadow-md transition">
            <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover rounded mb-3" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <button
              onClick={() => removeFromWishlist(product.id)}
              className="w-full mt-auto bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
