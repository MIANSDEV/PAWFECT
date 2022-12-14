import React from "react";
import "./AddressBar.css";
import { MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const AddressBar = () => {
  return (
    <div className="main-addressbar">
      <div className="addressbar-title">
        <h3>Shipping Address</h3>
      </div>
      <div className="edit-button">
        <Link to={"/editform"}>
          <button type="button" value="edit">
            <span className="edit-icon">
              <MdModeEditOutline />
            </span>
            <h3 className="edit-text">Edit</h3>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddressBar;
