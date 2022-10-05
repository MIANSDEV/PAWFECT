import React from 'react'
import "./SearchBox.css"


const SearchBox = () => {
  return (
    <div className='main_searchbox'>
      <h1>Find the perfect products for your loved ones</h1>
        <input class="searchbox" type="search" placeholder="Search your products here"></input>
    </div>
  )
}

export default SearchBox