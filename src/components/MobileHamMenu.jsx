// HamburgerMenu.js
import React, { useState } from "react";
import "./MobileHamMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-menu-wrapper">
      <div className="m-hamburger-menu">
        <button className="m-hamburger-button" onClick={toggleMenu}>
          {/* &#9776; */}
          menu
        </button>
      </div>
      {isOpen && (
        <div className="m-menu-list">
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
