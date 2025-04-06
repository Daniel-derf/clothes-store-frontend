import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  sex: string;
  description: string;
  ratingId: number;
  availableSizeQtt: { [size: string]: number };
  appliedDiscountPercentage: number;
};

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

const AdminProducts = () => {
  const { products, error, isLoading } = useProducts();

  return (
    <div>
      <h1>Produtos</h1>

      {isLoading && (
        <>
          <h2>Carregando...</h2>
        </>
      )}

      {error && <>Erro!</>}

      {products &&
        products.map((p) => (
          <p key={p.id}>
            {p.name} - R${p.price}
          </p>
        ))}
    </div>
  );
};

export default AdminProducts;
