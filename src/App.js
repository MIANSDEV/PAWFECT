import React from "react";
import ItemCardList from "./component/ItemCardList/ItemCardList.js";
import Footer from "./component/Footer/Footer.js";
import NavBar from "./component/Navbar/NavBar.js";
import SearchBox from "./component/SearchBox/SearchBox.js";
import CheckBoxList from "./component/CheckBoxList/CheckBoxList.js";


function App() {
  return (
    <div>
      <NavBar />
      <SearchBox/>
      <CheckBoxList/>
      <ItemCardList/>
      
      
    </div>
  );
}

export default App;
