import React from "react";
import "./header.css";
import { useLocation } from "react-router-dom";

export const Header = ({ toggleMenu, isMenuOpen }) => {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Overview",
    "/insurance": "Insurance",
    "/products": "Products",
    "/payments": "Payments",
    "/community": "Community",
    "/settings": "Settings",
    "/security": "Security",
    "/userprofile": "Profile",
  };

  return (
    <div className={`header ${isMenuOpen ? "blur" : ""}`}>
      <div className='header-text'>
        <button onClick={toggleMenu}>Open</button>

        <h2>{pageTitles[location.pathname]}</h2>
      </div>

      <button>cart</button>
    </div>
  );
};
