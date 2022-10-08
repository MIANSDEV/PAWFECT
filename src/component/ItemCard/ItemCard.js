import React from "react";

import "./ItemCard.css";
import {MdOutlineAddShoppingCart} from "react-icons/md"


const ItemCard = ({image,name,price}) => {
 
    
  return (
    <div className="main_card">
      <div className="image-card">
        <img src={image} alt="Cat Food"  className="card_img" />
      </div>
      <div className="description">
        <p >{name.length>20 ? `${name.slice(0,20)}...`:name}</p>
        <p className="price"><b>{price}/- </b></p>
      </div>
      <div className="card_bt">
        <button ><span className="bt_text">Add to Cart <MdOutlineAddShoppingCart className="MdShoppingCart" /></span>  </button>
      </div>
    </div>
  );
};

export default ItemCard;
