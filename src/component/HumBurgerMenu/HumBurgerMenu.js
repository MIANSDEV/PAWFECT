import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./HumBurgerMenu.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const HumBurgerMenu = () => {
  const [open, setOpen] = useState(true);
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
        <GiHamburgerMenu onClick={() => setOpen(!open)} />
      </div>
      <div className={`main-menu-humburger ${open && "hidden"}`}>
        <ui className="burger-menu">
          <Link to={"/checkout"}>
            <li>
              <HiShoppingCart className="first-icn" />
              <span className="text-icon-cart">|</span>
              <span className="text-main-icon-cart">Checkout</span>
            </li>
          </Link>
          <hr />
          <Link to={"/"}>
            <li>
              <FaUserCircle className="second-icn" />
              <span className="text-icon-cart">|</span>
              <span className="text-main-icon-cart"> Profile</span>
            </li>
          </Link>
        </ui>
      </div>
    </div>
  );
};

export default HumBurgerMenu;
