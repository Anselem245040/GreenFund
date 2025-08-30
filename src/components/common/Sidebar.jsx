import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = ({ name, isMenuOpen, onClose }) => {
  return (
    <div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
      <button className='btn-close' onClick={onClose}>
        close
      </button>
      <div className='sidebar-header'>
        <img src='./src/assets/images/logo.svg' loading='lazy' alt='logo' />
      </div>

      <div className='sidebar-profile'>
        <img src={null} alt='profile' />
        <h3>{name.split(" ")[0]}</h3>

        <p>free plan</p>
      </div>
      <nav className='sidebar-nav'>
        <ul>
          <li>
            <Link onClick={onClose} className='link' to='/dashboard'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link onClick={onClose} className='link' to='/insurance'>
              Insurance
            </Link>
          </li>
          <li>
            <Link onClick={onClose} className='link' to='/products'>
              Products
            </Link>
          </li>
          <li>
            <Link onClick={onClose} className='link' to='/payments'>
              Payments
            </Link>
          </li>
          <li>
            <Link onClick={onClose} className='link' to='/community'>
              Community
            </Link>
          </li>
          <hr />
          <li>
            <Link onClick={onClose} className='link' to='/settings'>
              Settings
            </Link>
          </li>
          <li>
            <Link onClick={onClose} className='link' to='/security'>
              Security
            </Link>
          </li>
          <li>
            <Link onClick={onClose} className='link' to='/userprofile'>
              Profile
            </Link>
          </li>
          <li>
            <Link onClick={onClose} className='link' to='/'>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
