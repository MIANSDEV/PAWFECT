import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

import "./NavBar.css";
import { Link } from "react-router-dom";
import HumBurgerMenu from "../HumBurgerMenu/HumBurgerMenu";
function NavBar() {
  return (
    <div>
      <div className="burger-menu">
        <HumBurgerMenu />
      </div>
      <nav className="main-nav">
        {/*logo*/}
        <div className="logo">
          <Link to="/">
            <h3>
              <span className="title">Paw</span>
              <span className="logo1">Fect</span>
            </h3>
          </Link>
        </div>
        <div className="s-icon">
          <ui className="icon">
            <li>
              <Link to={"/checkout"}>
                <HiShoppingCart className="cart" />
              </Link>
            </li>

            <li>
              <FaUserCircle className="user" />
            </li>
          </ui>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
