import React from "react";
import AddressCard from "../AddressCard/AddressCard.js";
import Cart from "../Cart/Cart.js";
import GiftCard from "../GiftCard/GiftCard.js";
import OrderPlacingCard from "../OrderPlacingCard/OrderPlacingCard.js";
import PaymentMethod from "../PaymentMethod/PaymentMethod.js";
import ShoppingCartFooter from "../ShoppingCartFooter/ShoppingCartFooter.js";
import ShoppingCartHeader from "../ShoppingCartHeader/ShoppingCartHeader.js";
import "./ShoppingCart.css";
import { shoppingCartList } from "../Data/Data.js";

const ShoppingCart = () => {
  return (
    <div className="main-shoppingcart">
      <div className="shoppingcart">
        <ShoppingCartHeader />
        <Cart products={shoppingCartList} />
        <ShoppingCartFooter products={shoppingCartList} />
      </div>
      <div className="left-shipping-card">
        <AddressCard />
        <PaymentMethod />
        <GiftCard />
        <OrderPlacingCard />
      </div>
    </div>
  );
};

export default ShoppingCart;
