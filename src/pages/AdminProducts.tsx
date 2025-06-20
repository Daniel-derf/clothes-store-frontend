// hooks
import useProducts from "../hooks/useProducts";

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

      {error && <h2>Erro ao buscar produtos!</h2>}

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
