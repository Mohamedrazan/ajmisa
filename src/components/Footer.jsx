import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-column">
          <img src="./ajmisalogo.png" alt="Ajmisa Logo" className="footer-logo" />

          {/* Extra Logos */}
          <div className="footer-extra-logos">
            <div className="extra-logo-box">
              <img src="./macvisionmainlogo.png" alt="Extra Logo 1" />
            </div>
            <div className="extra-logo-box">
              <img src="./newlogo.png" alt="Extra Logo 2" />
            </div>
          </div>

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
              <h4>Customer Support</h4>
              <ul>
                <li><Link to="/help-center">Help Center</Link></li>
                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <br /><br />

          {/* Social icons moved here */}
          <div className="footer-social-section">
            <p>Follow Us</p>
            <br />
            <div className="footer-social">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-column">
          <h4>Contact</h4>
          <br />
          <p>Call Us On:</p>

          {/* Multiple phone numbers with descriptions */}
          <div className="footer-phones">
            <div className="phone-item">
              <p className="footer-hotline">+966 553011362</p>
              <span className="phone-location">Saudi Arabia (Branch)</span>
            </div>
            <div className="phone-item">
              <p className="footer-hotline">+940 776106362</p>
              <span className="phone-location">Sri Lanka (Branch)</span>
            </div>
            <div className="phone-item">
              <p className="footer-hotline">+91 9562666362</p>
              <span className="phone-location">India (Head Office)</span>
            </div>
          </div>

          <div className="footer-apps">
            <a href="#"><SiGoogleplay /> Google Play</a>
            <a href="#"><SiAppstore /> App Store</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mahincha IT Solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
