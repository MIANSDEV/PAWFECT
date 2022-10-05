import React from "react";
import { Link } from "react-router-dom";
import "./AddressList.css";

const AddressList = () => {
  return (
    <div className="main-addresslist">
      <p>11 Street Address, City, State, Dhaka</p>
      <p>Estimated delivery: May 10 2022 - May 12 2022</p>
      <p>E-mail: demo1995@gmail.com</p>
      <p>Contact: 01833444444</p>
      <Link to={"/deliveryinstruction"}>
        <h3>Add delivery instructions </h3>
      </Link>
    </div>
  );
};

export default AddressList;
