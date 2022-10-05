import React from "react";
import NavBar from "./component/Navbar/NavBar.js";
import Home from "./pages/Home.js";
import ShoppingCart from "./component/ShoppingCart/ShoppingCart.js";
import { Route, Routes } from "react-router-dom";
import DeliveryInstructionForm from "./DeliveryInstructionForm/DeliveryInstructionForm.js";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<ShoppingCart />} />
        <Route
          path="/deliveryinstruction"
          element={<DeliveryInstructionForm />}
        />
      
      </Routes>
    </div>
  );
}

export default App;
