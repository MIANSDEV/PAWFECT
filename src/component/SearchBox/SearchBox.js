import React from 'react'
import "./SearchBox.css"
import {VscSearch} from "react-icons/vsc"

const SearchBox = () => {
  return (
    <div className='main_searchbox'>
        <input class="searchbox" type="search" placeholder="Search..."></input>
    </div>
  )
}

export default SearchBox