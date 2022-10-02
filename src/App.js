import React from "react";
import ItemCardList from "./component/ItemCardList/ItemCardList.js";
import Footer from "./component/Footer/Footer.js";
import NavBar from "./component/Navbar/NavBar.js";
import SearchBox from "./component/SearchBox/SearchBox.js";
import CategoryList from "./component/CategoryList/CategoryList.js";
import ShoppingCart from "./component/ShoppingCart/ShoppingCart.js";

function App() {
  return (
    <div>
      <NavBar />
      <SearchBox />
     <CategoryList/>
      <ItemCardList />
      {/* <ShoppingCart/> */}
    </div>
  );
}

export default App;
