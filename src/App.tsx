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
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products/:id" element={<ProductDetails />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route>

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
