import React, { useState } from "react";
import "./GiftCard.css";
import {AiOutlineArrowRight} from "react-icons/ai"

const GiftCard = () => {
    const [apply,setApply]=useState(true);
    

  return (
    
    <div className="main-gift-card-container">
      <h3>Gift cards, coupons <span onClick={()=>setApply(!apply)}>{apply ? "Apply" : "Cancel"}</span></h3>
      <div className={`gift-form-container ${apply && 'hidden'}`}>
        <form className="gift-form">
        <input type="text" id="giftVoucher" name="giftVoucher" value="" className="gift-card-input"/>
        <button><AiOutlineArrowRight className="arrow-icon"/></button>
        </form>
    </div>
    </div>
    
   
  );
};

export default GiftCard;
