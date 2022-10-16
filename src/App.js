import React from "react";
import NavBar from "./component/Navbar/NavBar.js";
import Home from "./pages/Home.js";
import ShoppingCart from "./component/ShoppingCart/ShoppingCart.js";
import { Route, Routes } from "react-router-dom";
import UserForm from "./pages/UserForm.js";
import SignInModal from "./component/SignInModal/SignInModal.js";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<ShoppingCart />} />
        <Route path="/editform" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
