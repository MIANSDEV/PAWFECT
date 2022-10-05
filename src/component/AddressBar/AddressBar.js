import React from "react";
import "./AddressBar.css";
import { MdModeEditOutline } from "react-icons/md";

const AddressBar = () => {
  return (
    <div className="main-addressbar">
      <div className="addressbar-title">
        <h3>Shipping Address</h3>
      </div>
      <div className="edit-button">
        <button type="button" value="edit">
          <span className="edit-icon">
            <MdModeEditOutline />
          </span>
          <h3 className="edit-text">Edit</h3>
        </button>
      </div>
    </div>
  );
};

export default AddressBar;
