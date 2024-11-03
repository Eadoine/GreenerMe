import React from 'react';
import './Header.css';
import logo from './images/GreenerMe.png'; // Import the logo image

const Header = () => {
  return (
    <div>
      <header className="header">

        {/* Logo Section */}
        <div className="header__logo"><img src={logo} alt="Logo" />GreenerMe </div>

        {/* Search Bar Section */}
        <div className="header__search">
          <input type="text" placeholder="Search..." />
        </div>

        {/* Navigation Links */}
        <div className="header__nav">
          <a href="/request">Swap Requests</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/login">Signup</a>
          <a href="/logout">Login</a>
        </div>
      </header>

      {/* Secondary Navigation Bar */}
      <nav className="secondary-nav">
        <ul className="secondary-nav__list">
          <li><a href="/home">Home</a></li>
          <li><a href="/info">Information</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
