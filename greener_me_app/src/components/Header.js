import React from 'react';
import './Header.css';
import logo from '../images/GreenerMe.png'; // Import the logo image
import {Link} from 'react-router-dom';

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
          <Link to="/request">Swap Requests</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/login">Signup</Link>
          <Link to="/logout">Login</Link>
        </div>
      </header>

      {/* Secondary Navigation Bar */}
      
      <nav className="secondary-nav">
        <ul className="secondary-nav__list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/information">Information</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/newListing">NewListing</Link></li>
          <li><Link to="/listingDetail">ListingDetail</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
