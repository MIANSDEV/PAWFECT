import React, { useEffect, useState } from "react";
import "./ShoppingCartFooter.css";

const ShoppingCartFooter = ({ products }) => {
  const [totalAmount, setTotalAmount] = useState();
  const [shippingCost, setShippingCost] = useState(50);
  const getTotalAmount = () => {
    let totalPrice = 0;

    products.map((product) => {
      totalPrice += product.quantity * product.price;
    });
    setTotalAmount(totalPrice);
  };
  useEffect(() => {
    getTotalAmount();
  }, []);
  return (
    <div className="card-total">
      <div className="subtotal">
        <p>Subtotal</p>
        <span className="amount">{totalAmount} Tk</span>
      </div>
      <div className="shipping">
        <p>Delivery Charge</p>
        <span className="amount">{shippingCost} Tk</span>
      </div>
      <div className="total">
        <p>Total</p>
        <span className="amount">3650.00 TK</span>
      </div>
    </div>
  );
};

export default ShoppingCartFooter;
