import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';


import "./Hotelinfo.css";
const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" }
];


const Hotelinfo = () => {
  return (
   <>
   {/* Navbar */}
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

    <div className="hotel-info-container">
      <motion.div
        className="hotel-info-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Hotel Information</h1>
        <p>Everything your guest needs to know, right from the TV screen</p>
      </motion.div>

      <motion.div
        className="hotel-info-sections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="hotel-info-card"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h2>About the Hotel</h2>
          <p>
            Welcome to our luxury hotel. Nestled in the heart of the city, we offer elegant rooms,
            world-class service, and high-end amenities designed for modern travelers.
          </p>
        </motion.div>

        <motion.div
          className="hotel-info-card"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Check-in & Check-out</h2>
          <p>
            Check-in time: 2:00 PM<br />
            Check-out time: 12:00 PM<br />
            For early check-in or late check-out, please contact the front desk.
          </p>
        </motion.div>

        <motion.div
          className="hotel-info-card"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Facilities & Services</h2>
          <ul>
            <li>🏊 Swimming Pool</li>
            <li>💪 Gym & Spa</li>
            <li>🍽️ 24/7 In-room Dining</li>
            <li>🚖 Airport Shuttle</li>
            <li>📶 High-speed Wi-Fi</li>
          </ul>
        </motion.div>

        <motion.div
          className="hotel-info-card"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Emergency Information</h2>
          <p>
            For any emergency, dial ‘0’ from your room phone. Fire exits and evacuation plans are displayed on your room door. Our staff is trained and ready to help 24/7.
          </p>
        </motion.div>
      </motion.div>
    </div>

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
   </>
  );
};

export default Hotelinfo;
