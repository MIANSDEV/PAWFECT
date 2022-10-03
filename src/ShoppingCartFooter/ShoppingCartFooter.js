import React from 'react'
import "./ShoppingCartFooter.css"

const ShoppingCartFooter = () => {
  return (
    <div className='card-total'>
       <div className='subtotal'>
            <p>Subtotal</p>
            <span className='amount'>3600</span>
            </div>
            <div className='shipping'>
            <p>Subtotal</p>
            <span className='amount'>50</span>
            </div>
            <div className='total'>
            <p>Total</p>
            <span className='amount'>3650.00 TK</span>
            </div>
    </div>
  )
}

export default ShoppingCartFooter