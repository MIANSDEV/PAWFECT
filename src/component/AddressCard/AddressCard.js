import React from "react";
import "./AddressCard.css";
import AddressBar from "../AddressBar/AddressBar";
import AddressList from "../AddressList/AddressList";

const AddressCard = () => {
  return (
    <div className="main-address-container">
      <AddressBar />
      <AddressList />
    </div>
  );
};

export default AddressCard;
