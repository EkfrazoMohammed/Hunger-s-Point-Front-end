// HamburgerMenu.js
import React, { useState } from "react";
import "./MobileHamMenu.css";

const HamburgerMenu = ({
  menuListData,
  OnClickMenu,
  activetag,
  selectedTagIndex,
  selectedMenuIndex,
}) => {
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
            <li
              className={`${
                selectedMenuIndex === "all"
                  ? "bg-[#C21F24]"
                  : "hover:bg-[#C21F24]"
              }`}
              onClick={() => {
                OnClickMenu("ALL", "all", selectedTagIndex, activetag);
                setIsOpen(false);
              }}
            >
              All Menu
            </li>
            {menuListData.map((menu, index) => (
              <li
                key={index}
                className={`${
                  selectedMenuIndex === index
                    ? "bg-[#C21F24]"
                    : "hover:bg-[#C21F24]"
                }`}
                onClick={() => {
                  OnClickMenu(menu.id, index, selectedTagIndex, activetag);
                  setIsOpen(false); // Close the menu
                }}
              >
                {menu.menu_title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
