// Footer.js
import React from 'react';
import './Footer.css'; 
import logo from '../images/GreenerMe.png'; // Import the logo image


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content"> <img src={logo} alt="Logo" className="footer-logo"/>

                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-and-conditions">Terms and Conditions</a>
                </div>

                <div className="footer-social">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
