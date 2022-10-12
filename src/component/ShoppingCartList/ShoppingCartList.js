import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

import "./ShoppingCartList.css";

const ShoppingCartList = ({ image, name, price }) => {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="cart-item-container">
      <div className="item-info">
        <div className="product-img">
          <img src={image} alt="cat-food" />
        </div>
        <div className="cart-title">
          <p>{name}</p>
        </div>
        <div className="add-minus-quantity">
          <BiMinus onClick={handleClick2} />
          <input type="text" placeholder="1" value={counter} />
          {/* <i className="fas fa-plus add" onClick={handleClick1}></i> */}
          <BiPlus onClick={handleClick1} />
        </div>
        <div className="cart-price-tag">
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartList;
