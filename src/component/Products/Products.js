import React from 'react'
import data from '../Data/Data.js'
import "./Products.css"

const 
Products = () => {
  return (
    <div className='main'>
        <h1>Products</h1>
        <div className='products'>
        {data.products.map((product)=>
        <div className='product' key={product.slug}>
            <a href={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name}/>
            </a>
            <div className='product_info'>
            <a href={`/product/${product.slug}`}>
            <p>{product.name}</p>
            </a>
            <p><strong>{product.price}</strong></p>
            </div>
            <button>Add To Cart</button>
        </div>
        )}
        </div>
    </div>
  )
}

export default Products