import React from 'react'
import ShoppingCartHeader from '../ShoppingCartHeader/ShoppingCartHeader.js'
import ShoppingCartList from '../ShoppingCartList/ShoppingCartList.js'
import './ShoppingCart.css'

const ShoppingCart = () => {
  return (
    <div className='shoppingcart'>
        <ShoppingCartHeader/> 
        <ShoppingCartList/>
    </div>
  )
}

export default ShoppingCart