// css
import "./App.css";

// libs
import { Routes, Route, Navigate } from "react-router-dom";

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
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<Home />}></Route>
      <Route path="/products/:id" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route>

      {/* auth */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

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
