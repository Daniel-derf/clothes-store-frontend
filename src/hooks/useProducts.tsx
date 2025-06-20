import { useEffect, useState } from "react";

// types
import Product from "../types/Product";
import { request } from "../utils/request";

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setIsLoading(true);

    const response = await request("/products");

    if (!response.ok) {
      setError("error");
      setIsLoading(false);

      return;
    }

    const products = await response.json();

    setProducts(products);
    setIsLoading(false);
  }

  return { products, error, isLoading };
}

export default useProducts;
