import React from 'react'
import './ShoppingCartHeader.css'
import{FiShoppingBag} from 'react-icons/fi'

const ShoppingCartHeader = () => {
  return (
    <>
    <div className='main_shoppingcartheader'>
        <div className='shoppingcart-title'>
        <h3>Shopping Cart</h3>
        </div>
        <div className='shoppingcart-icon'>
        <span className='no_item'>7</span>
            <FiShoppingBag/>
            
        </div>

        
    </div>
    <div>
    <p className='items_count'>7 Items</p>
  </div>
    
  </>
  )
}

export default ShoppingCartHeader