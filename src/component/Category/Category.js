import React from "react";
import "./Category.css";

const Category = ({ category, emoji }) => {
  return (
    <div className="maindiv">
      <div className="main_category">
        
        <button> <span className="emoji">{emoji}</span>{category}</button>
        
      </div>
    </div>
  );
};

export default Category;
