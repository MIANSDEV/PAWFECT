import React from 'react'
import SearchBox from "../component/SearchBox/SearchBox.js";
import CategoryList from "../component/CategoryList/CategoryList.js";
import ItemCardList from "../component/ItemCardList/ItemCardList.js";


const Home = () => {
  return (
    <>
          <SearchBox />
     <CategoryList/>
      <ItemCardList />
      
    </>
  )
}

export default Home