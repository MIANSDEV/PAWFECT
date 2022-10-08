import React from "react";
import ItemCard from "../ItemCard/ItemCard.js";
import {data} from "../Data/Data.js";
import "./ItemCardList.css";

const CardList = () => {
  return (
    <div className="main_itemcardlist">
      {data.map((product) => (
        <div className="itemcard">
          <ItemCard
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
