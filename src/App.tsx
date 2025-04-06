// css
import "./App.css";

// libs
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import AdminClients from "./pages/AdminClients";
import AdminProducts from "./pages/AdminProducts";
import AdminRegisterProduct from "./pages/AdminRegisterProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      {/* admin routes */}
      <Route path="/admin" element={<AdminHome />}></Route>
      <Route path="/admin/products" element={<AdminProducts />}></Route>
      <Route path="/admin/register-product" element={<AdminRegisterProduct />}></Route>
      <Route path="/admin/clients" element={<AdminClients />}></Route>
    </Routes>
  );
}

/*
ideia: ter uma página /admin para cadastrar produtos
*/

export default App;
