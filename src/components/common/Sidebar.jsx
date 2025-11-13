import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = ({ name, isMenuOpen, onClose }) => {
  return (
    <>
      {isMenuOpen && <div className='sidebar-overlay' onClick={onClose}></div>}

      <div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
        <div className='sidebar-header'>
          <h2>🌱 GreenFund</h2>
          <button className='btn-close' onClick={onClose}>
            <i className='ri-close-line'></i>
          </button>
        </div>

        <nav className='sidebar-nav'>
          <ul>
            <li>
              <Link to='/dashboard/home' className='link' onClick={onClose}>
                <i className='ri-dashboard-line'></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to='/dashboard/insurance'
                className='link'
                onClick={onClose}
              >
                <i className='ri-briefcase-line'></i>
                <span>Insurance</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/products' className='link' onClick={onClose}>
                <i className='ri-user-line'></i>
                <span>Products</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
