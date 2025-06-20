import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("products");
  };

  const goToRegisterProduct = () => {
    navigate("register-product");
  };

  const goToClients = () => {
    navigate("clients");
  };

  return (
    <div>
      <h1>Página Administrativa</h1>

      <div>
        <button onClick={goToProducts}>VER PRODUTOS</button>

        <button onClick={goToRegisterProduct}>CADASTRAR PRODUTO</button>

        <button onClick={goToClients}>VER CLIENTES</button>
      </div>
    </div>
  );
};

export default AdminHome;
