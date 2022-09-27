import React from 'react'
import data from '../Data/Data'
import CheckBox from '../CheckBox/CheckBox.js'
import "./CheckBoxList.css"

const CheckBoxList = () => {
  return (
    <div className='main_checkboxlist'>
        {data.products.map((product)=>(
        <div className='checkboxlist'>
        <CheckBox
        category={product.category}
        slug={product.slug}
        />
        </div>
        ))}
    </div>
  )
}

export default CheckBoxList