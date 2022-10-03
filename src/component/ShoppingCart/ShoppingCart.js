import React from "react";
import Cart from "../../Cart/Cart.js";
import ShoppingCartHeader from "../ShoppingCartHeader/ShoppingCartHeader.js";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  return (
    <div className="shoppingcart">
      <ShoppingCartHeader />
      <Cart />
    </div>
  );
};

export default ShoppingCart;
