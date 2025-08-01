import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';


import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';

import "./Guestinfo.css";
const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" }
];

const guestServices = [
  {
    title: "Welcome Message",
    description: "Personalized greetings with guest name and check-in details.",
    icon: "🛎️"
  },
  {
    title: "Wi-Fi Access",
    description: "Instant access to room-specific secure internet credentials.",
    icon: "📶"
  },
  {
    title: "Billing Overview",
    description: "Check your room charges, mini-bar usage, and service bills in real-time.",
    icon: "💳"
  },
  {
    title: "Hotel Directory",
    description: "Explore hotel amenities, restaurant hours, spa services, and more.",
    icon: "📘"
  },
  {
    title: "Feedback & Support",
    description: "Submit your feedback or get instant assistance via TV.",
    icon: "💬"
  }
];

const Guestinfo = () => {
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

    <div className="guest-info-container">
      <motion.div
        className="guest-info-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Guest Information</h1>
        <p>Everything you need, right from your TV</p>
      </motion.div>

      <motion.div
        className="guest-info-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {guestServices.map((service, index) => (
          <motion.div
            key={index}
            className="guest-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
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

export default Guestinfo;
