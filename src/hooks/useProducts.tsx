import { useEffect, useState } from "react";

// types
import Product from "../types/Product";

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setIsLoading(true);

    const response = await fetch("http://localhost:3000/products");

    if (!response.ok) {
      const errorBody = await response.json();
      setError(errorBody);

      return;
    }

    const products = await response.json();

    setProducts(products);
    setIsLoading(false);
  }

  return { products, error, isLoading };
}

export default useProducts;
