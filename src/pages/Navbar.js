import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '../assets/home.svg'; // Ensure paths are correct
import AboutIcon from '../assets/about.svg';
import ContactIcon from '../assets/contact.svg';
import ProjectsIcon from '../assets/projects.svg';
import CartIcon from '../assets/cart.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Highwind Properties</div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-icon">
            <img src={HomeIcon} alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/featured-projects" className="nav-icon">
            <img src={ProjectsIcon} alt="Featured Projects" />
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-icon">
            <img src={CartIcon} alt="Cart" />
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-icon">
            <img src={ContactIcon} alt="Contact" />
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-icon">
            <img src={AboutIcon} alt="About" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
