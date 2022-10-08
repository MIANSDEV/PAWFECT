import React from "react";
import ShoppingCartList from "../ShoppingCartList/ShoppingCartList";
import { shoppingCartList } from "../Data/Data";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="main-cart">
      {shoppingCartList.map((product) => (
        <ShoppingCartList
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default Cart;
