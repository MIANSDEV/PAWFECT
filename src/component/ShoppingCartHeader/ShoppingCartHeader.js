import React from 'react'
import './ShoppingCartHeader.css'
import{FiShoppingBag} from 'react-icons/fi'

const ShoppingCartHeader = () => {
  return (
    <div className='main_shoppingcartheader'>
        <div className='shoppingcart-title'>
        <h3>Shopping Cart</h3>
        </div>
        <div className='shoppingcart-icon'>
            <FiShoppingBag/>
        </div>
       
    </div>
    
    
  )
}

export default ShoppingCartHeader