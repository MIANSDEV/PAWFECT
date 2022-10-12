import React from "react";
import "./ShoppingCartFooter.css";

const ShoppingCartFooter = () => {
  return (
    <div className="card-total">
      <div className="subtotal">
        <p>Subtotal</p>
        <span className="amount">1200 Tk</span>
      </div>
      <div className="shipping">
        <p>Delivery Charge</p>
        <span className="amount">50 Tk</span>
      </div>
      <div className="total">
        <p>Total</p>
        <span className="amount">3650.00 TK</span>
      </div>
    </div>
  );
};

export default ShoppingCartFooter;
