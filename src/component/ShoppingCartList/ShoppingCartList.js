import React from "react";

import "./ShoppingCartList.css";

const ShoppingCartList = ({ image, name, price }) => {
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
          <i className="fas fa-minus minus"></i>
          <input type="text" placeholder="1" />
          <i className="fas fa-plus add"></i>
        </div>
        <div className="cart-price-tag">
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartList;
