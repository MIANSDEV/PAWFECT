import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import Logo from "../../img/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="main-nav">
        {/*logo*/}
        <div className="logo">
          <img src={Logo} alt="Logo" className="w_logo" />
          <h3>
            <span className="title">Paw</span>
            <span className="logo1">Fect</span>
          </h3>
        </div>
        <div className="s-icon">
          <ui className="icon">
            <li>
              <a href="Home" target="_pawfect">
                <HiShoppingCart className="cart" />
              </a>
            </li>
            <li>
              <a href="Home" target="_pawfect">
                <FaUserCircle className="user" />
              </a>
            </li>
          </ui>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
