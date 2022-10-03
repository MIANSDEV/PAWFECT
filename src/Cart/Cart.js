import React from "react";
import ShoppingCartList from "../component/ShoppingCartList/ShoppingCartList";
import data from "../component/Data/Data";

const Cart = () => {
  return (
    <div>
      {data.products.map((product) => (
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
