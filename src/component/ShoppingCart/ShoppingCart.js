import React from "react";
import Cart from "../../Cart/Cart.js";
import ShoppingCartFooter from "../../ShoppingCartFooter/ShoppingCartFooter.js";
import ShoppingCartHeader from "../ShoppingCartHeader/ShoppingCartHeader.js";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  return (
    <div className="shoppingcart">
      <ShoppingCartHeader />
      <Cart />
      <ShoppingCartFooter/>
    </div>
  );
};

export default ShoppingCart;
