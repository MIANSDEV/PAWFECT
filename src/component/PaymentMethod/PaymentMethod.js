import React from 'react'
import './PaymentMethod.css'
import {HiOutlineCash} from 'react-icons/hi'

const PaymentMethod = () => {
  return (
    <div className='main-payment-card-container'>
      <h2>Payment Method</h2>
      <div className='cash-icon'>
        <HiOutlineCash/>
        <h3>Cash On Delivery</h3>
      </div>
      <div className='inquiry-text'>
      <p>For other payment method, contact 01833333333</p>
      </div>
    </div>
  )
}

export default PaymentMethod