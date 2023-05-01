import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Concepts from "./pages/Concepts";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import ConceptCreate from "./pages/ConceptCreate";
import ProductCreate from "./pages/ProductCreate";
import EmblemLogo from "./components/EmblemLogo";
import ProductInspect from "./pages/ProductInspect";
import UsersPage from "./pages/UsersPage";
import UserInspect from "./pages/UserInspect";
import EditProduct from "./pages/EditProduct";
import EditUser from "./pages/EditUser";
import "@stripe/react-stripe-js";
import Checkout from "./pages/Checkout";

export default function App() {
  //authenication is only needed when users sign in
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  //Update auth status
  const updateAuthStatus = (status, role) => {
    setIsAuthenticated(status);
    setUserRole(role);
  };
  return (
    <BrowserRouter>
      <NavBar isAuthenticated={isAuthenticated} userRole={userRole} />
      <EmblemLogo />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="concepts" element={<Concepts />} />
        {/* User Must Login to update auth status to gain admin privlidges*/}
        <Route
          path="login"
          element={<Login updateAuthStatus={updateAuthStatus} />}
        />
        <Route path="cart" element={<Cart />} />
        <Route path="register" element={<Register />} />
        <Route path="conceptCreate" element={<ConceptCreate />} />
        <Route path="productCreate" element={<ProductCreate />} />
        {/*Inspect will be updated when user signs in  */}
        <Route
          path="productInspect/:id"
          element={<ProductInspect updateAuthStatus={updateAuthStatus} />}
        />
        <Route path="users" element={<UsersPage />} />
        <Route path="userInspect/:id" element={<UserInspect />} />
        <Route path="editProduct/:id" element={<EditProduct />} />
        <Route path="editUser/:id" element={<EditUser />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
