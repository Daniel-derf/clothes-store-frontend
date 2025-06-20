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
      const reader = response.body?.getReader();
      const chunks: Uint8Array[] = [];

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (value) chunks.push(value);
        }
      }

      const totalLength = chunks.reduce((acc, curr) => acc + curr.length, 0);
      const bodyUint8 = new Uint8Array(totalLength);
      let offset = 0;
      for (const chunk of chunks) {
        bodyUint8.set(chunk, offset);
        offset += chunk.length;
      }
      const bodyString = new TextDecoder().decode(bodyUint8);

      console.log(bodyString);

      setError(bodyString);
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
