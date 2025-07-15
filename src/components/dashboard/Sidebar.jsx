import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");

  useEffect(() => {
    const { fromSignup, fromLogin, fullName } = location.state || {};

    if (fromSignup || fromLogin) {
      setName(fullName?.split(" ")[0]);
    }
  }, [location.state, location.pathname, navigate]);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={toggleSidebar}>close</button>
      <div className='sidebar-container'>
        <div className='sidebar-logo'>
          <img src='logo.png' alt='logo' />
        </div>

        <div className='user-profile'>
          <img src='profile.png' alt='user-image' />
          <div>Hi {name ? `${name}` : ""} </div>
        </div>

        <div className='sidebar-links'>
          <div>
            <Link to='/dashboard' className='link'>
              Home
            </Link>
          </div>
          <div>
            <Link to='/dashboard/insurance' className='link'>
              Insurance
            </Link>
          </div>
          <div>
            <Link to='/dashboard/products' className='link'>
              Products
            </Link>
          </div>
          <div>
            <Link to='/dashboard/payments' className='link'>
              Payments
            </Link>
          </div>
          <div>
            <Link to='/dashboard/community' className='link'>
              Community
            </Link>
          </div>
          <div>
            <Link to='/dashboard/settings' className='link'>
              Settings
            </Link>
          </div>
          <div>
            <Link to='/dashboard/security' className='link'>
              Security
            </Link>
          </div>
          <div>
            <Link to='/login' className='link'>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
