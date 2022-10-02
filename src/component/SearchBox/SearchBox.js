import React from 'react'
import "./SearchBox.css"


const SearchBox = () => {
  return (
    <div className='main_searchbox'>
      <p className='text'>Find the perfect products for your loved ones</p>
        <input class="searchbox" type="search" placeholder="Search your products here"></input>
    </div>
  )
}

export default SearchBox