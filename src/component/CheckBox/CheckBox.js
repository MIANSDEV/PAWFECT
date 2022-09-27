import React from "react";
import "./CheckBox.css"

const CheckBox = ({category,slug}) => {
  return (
    <div className="maindiv">
      <div className="main_checkbox">
       
          <div className="input_field"><labe className='text'>{category}</labe>
          <input className="input_tag" type="checkbox" id={slug} value={category} /></div>
      </div>
    </div>
  );
};

export default CheckBox;
