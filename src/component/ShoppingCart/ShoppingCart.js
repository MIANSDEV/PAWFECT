import React from "react";
import AddressCard from "../AddressCard/AddressCard.js";
import Cart from "../Cart/Cart.js";
import PaymentMethod from "../PaymentMethod/PaymentMethod.js";
import ShoppingCartFooter from "../ShoppingCartFooter/ShoppingCartFooter.js";
import ShoppingCartHeader from "../ShoppingCartHeader/ShoppingCartHeader.js";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  return (
    <div className="main-shoppingcart">
      <div className="shoppingcart">
        <ShoppingCartHeader />
        <Cart />
        <ShoppingCartFooter />
      </div>
      <div className="left-shipping-card">
      <AddressCard />
      <PaymentMethod/>
      </div>
    </div>
  );
};

export default ShoppingCart;
