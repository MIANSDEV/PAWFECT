import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./HumBurgerMenu.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const HumBurgerMenu = () => {
  return (
    <div className="main-burger-menu-container">
      <div className="mobile-menu-logo">
        <Link to="/">
          <h3>
            <span className="first-title">Paw</span>
            <span className="second-title">Fect</span>
          </h3>
        </Link>
      </div>
      <div className="mobile-menu-icon">
        <GiHamburgerMenu />
      </div>
      <div className="main-menu-humburger">
        <ui>
          <li>
            <Link to={"/checkout"}>
              <HiShoppingCart className="first-icn" />
            </Link>
          </li>

          <li>
            <FaUserCircle className="second-icn" />
          </li>
        </ui>
      </div>
    </div>
  );
};

export default HumBurgerMenu;
