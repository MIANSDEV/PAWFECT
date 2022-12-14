import React from "react";
import {category} from "../Data/Data";
import Category from "../Category/Category.js";
import "./CategoryList.css";

const CheckBoxList = () => {
  return (
    <div className="main_categorylist">
      {category.map((product) => (
        <div className="categorylist">
          <Category category={product.category} emoji={product.emoji} slug={product.slug} />
        </div>
      ))}
    </div>
  );
};

export default CheckBoxList;
