import React from "react";
import "./OrderPlacingCard.css";

const OrderPlacingCard = () => {
  return (
    <div className="order-placing-card-container">
      <div className="order-placing-card">
        <span>By placing your order you agree to our terms and conditions</span>
      </div>
      <div className="order-pricing">
        <div className="order-total-price">
          <p>Amount</p>
          <p>1200 Tk</p>
        </div>
        <div className="order-shipping-cost">
        <p>Shipping Cost</p>
        <p>50 Tk</p>
        </div>
    <div className="hr">
      <hr/>
    </div>
       
      </div>
      <div className="total-amount-order">
        <h2>Total Amount</h2>
        <h3>1250 Tk</h3>
      </div>
      <div className="placing-order-button">
        <button><h3>Place Your Order</h3></button>
      </div>
    </div>
  );
};

export default OrderPlacingCard;
