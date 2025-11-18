import React from "react";
import "./header.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = ({ toggleMenu, isMenuOpen }) => {
  const location = useLocation();

  const pageTitles = {
    "/dashboard/home": "Overview",
    "/dashboard/insurance": "Insurance",
    "/dashboard/products": "Products",
    "/dashboard/payments": "Payments",
    "/dashboard/community": "Community",
    "/dashboard/settings": "Settings",
    "/dashboard/security": "Security",
    "/dashboard/userprofile": "Profile",
  };

  return (
    <div className={`header ${isMenuOpen ? "blur" : ""}`}>
      <div className='header-text'>
        <button onClick={toggleMenu}>
          <i className='ri-menu-3-line'></i>
        </button>

        <h2>{pageTitles[location.pathname]}</h2>
      </div>

      <button className='cart-btn'>
        <Link to='/dashboard/cart'>
          <i class='ri-shopping-cart-2-line'></i>
        </Link>
      </button>
    </div>
  );
};
