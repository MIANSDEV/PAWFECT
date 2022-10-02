import React from "react";

import "./ItemCard.css";
import {MdOutlineAddShoppingCart} from "react-icons/md"


const ItemCard = ({image,name,price}) => {
 
    
  return (
    <div className="main_card">
      <div>
        <img src={image} alt="Cat Food"  className="card_img" />
      </div>
      <div className="description">
        <p >{name}</p>
        <h3>{price}/- </h3>
      </div>
      <div className="card_bt">
        <button ><span className="bt_text">Add to Cart <MdOutlineAddShoppingCart className="MdShoppingCart" /></span>  </button>
      </div>
    </div>
  );
};

export default ItemCard;
