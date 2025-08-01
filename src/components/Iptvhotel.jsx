import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';

import "./Iptvhotel.css";
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';

const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" }
];

const Iptvhotel = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-placeholder">
          <img src="./macvisionmainlogo.png" alt="Logo" className="logo-image" />
        </div>
        <div className="nav-links">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="hotel-tv-container">
        <motion.div 
          className="hotel-tv-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>IPTV Hospitality Solutions</h1>
          <p>Transforming guest experience with modern hotel TV entertainment</p>
        </motion.div>

        <motion.div 
          className="hotel-tv-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="hotel-tv-text">
            <h2>Smart IPTV for Hotels</h2>
            <p>
              IPTV (Internet Protocol Television) brings modern digital entertainment to hotel rooms, offering guests an interactive and customized viewing experience. Our solution lets you stream live channels, movies, hotel services, and more directly to the TV screen.
            </p>

            <ul>
              <li>✔️ Live TV and international channels</li>
              <li>✔️ On-demand movies & content</li>
              <li>✔️ Room service ordering through TV</li>
              <li>✔️ Multi-language support</li>
              <li>✔️ Branding and promotional banners</li>
              <li>✔️ Integration with PMS and smart controls</li>
            </ul>
          </div>

          <motion.div 
            className="hotel-tv-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src="./iptvhotel.jpg" alt="Hotel IPTV Demo" className="responsive-img" />
          </motion.div>
        </motion.div>

        {/* Footer */}
              <footer className="footer">
                <div className="footer-content">
                  <div className="footer-left">
                    <h2 className="logo-heading">
                      <img src="./ajmisalogo.png" alt="Logo" className="logo-img" />
                    </h2>
                    <br /><br />
                    <address>
                      P.O Box 40637,<br />
                      Markaz Hail, Hail Street<br />
                      Jeddah 21511, Saudi Arabia<br />
                      Tel: +966 553011362<br />
                      Email: www.ajmi@ajmisa.com<br />
                      Hours: Mon-Sat 9am-6pm, Friday Closed
                    </address>
                  </div>
        
                  <div className="footer-links">
                    <div className="link-group">
                      <h4>Quick Menu</h4>
                      <ul>
                        <li>How it works</li>
                        <li>Refund Policy</li>
                        <li>New Products</li>
                        <li>About Us</li>
                      </ul>
                    </div>
                    <div className="link-group">
                      <h4>Customer Support</h4>
                      <ul>
                        <li>My Account</li>
                        <li>Track Order</li>
                        <li>Returns/Exchange</li>
                        <li>FAQs</li>
                      </ul>
                    </div>
                  </div>
        
                  <div className="footer-right">
                    <h4>Contact</h4>
                    <p>Call Us On:</p>
                    <p className="hotline">+966 553011362</p>
                    <p>Follow Us</p>
                    <div className="social-icons">
                      <FaFacebook />
                      <FaInstagram />
                      <FaTwitter />
                      <FaYoutube />
                    </div>
                    <div className="app-links">
                      <a href="#"><SiGoogleplay /> Google Play</a>
                      <a href="#"><SiAppstore /> App Store</a>
                    </div>
                  </div>
                </div>
        
                <div className="footer-bottom">
                  <p>© 2025 IPTV Live Today. All Rights Reserved.</p>
                  <div className="payment-icons">
                    <img src={paypal} alt="PayPal" />
                    <img src={visa} alt="Visa" />
                    <img src={mastercard} alt="MasterCard" />
                  </div>
                </div>
              </footer>
      </div>
    </>
  );
};

export default Iptvhotel;
