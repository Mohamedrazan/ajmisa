import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';

// Payment icons
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-column">
          <img src="./ajmisalogo.png" alt="Ajmisa Logo" className="footer-logo" />
          <address className="footer-address">
            P.O Box 40637,<br />
            Markaz Hail, Hail Street<br />
            Jeddah 21511, Saudi Arabia<br />
            Tel: +966 553011362<br />
            Email: www.ajmi@ajmisa.com<br />
            Hours: Mon-Sat 9am-6pm, Friday Closed
          </address>
        </div>

        {/* Middle Section */}
        <div className="footer-column">
          <div className="footer-links">
            <div>
              <h4>Quick Menu</h4>
              <ul>
                <li>How it works</li>
                <li>Refund Policy</li>
                <li>New Products</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h4>Customer Support</h4>
              <ul>
                <li>Help Center</li>
          <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Call Us On:</p>
          <p className="footer-hotline">+966 553011362</p>

          <p>Follow Us</p>
          <br />
          <div className="footer-social">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>

          <div className="footer-apps">
            <a href="#"><SiGoogleplay /> Google Play</a>
            <a href="#"><SiAppstore /> App Store</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 IPTV Live Today. All Rights Reserved.</p>
        <div className="footer-payments">
          <img src={paypal} alt="PayPal" />
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
