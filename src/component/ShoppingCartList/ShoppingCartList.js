import React from "react";
import CatFood from "../../images/p2.jpg";
import "./ShoppingCartList.css";

const ShoppingCartList = () => {
  return (
    <div className="cart-item-container">
      <div className="item-info">
        <div className="product-img">
          <img src={CatFood} alt="cat-food" />
        </div>
        <div className="cart-title">
          <p>Pedigree Puppy Dry Dog Food Chicken and Milk</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"></i>
          <input type="text" placeholder="2"/>
          <i className="fas fa-plus add"></i>
        </div>
        <div className="cart-price-tag">
              <h3>2000 Tk</h3>
        </div>
        
      </div>
    </div>
  );
};

export default ShoppingCartList;
