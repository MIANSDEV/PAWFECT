import React from "react";
import ShoppingCartList from "../ShoppingCartList/ShoppingCartList";
import "./Cart.css";

const Cart = ({ products }) => {
  return (
    <div className="main-cart">
      {products.map((product) => (
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
