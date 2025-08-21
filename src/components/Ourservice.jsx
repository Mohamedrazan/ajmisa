import React, { useState } from 'react';
import './Ourservice.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import { FaTv, FaWifi, FaMobileAlt, FaHeadset, FaCloud, FaVideo } from 'react-icons/fa';
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

const services = [
  {
    icon: <FaTv />,
    title: 'Smart In-Room TV',
    description: 'Deliver high-definition IPTV content with an intuitive, user-friendly interface tailored for hotel guests.'
  },
  {
    icon: <FaWifi />,
    title: 'Wi-Fi Integration',
    description: 'Seamlessly connect IPTV systems with your hotel’s secure network infrastructure.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Remote Access',
    description: 'Allow guests to control their IPTV experience through mobile devices or tablets.'
  },
  {
    icon: <FaHeadset />,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and assistance for uninterrupted service.'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud-Based CMS',
    description: 'Manage content remotely using a centralized cloud dashboard with multilingual support.'
  },
  {
    icon: <FaVideo />,
    title: 'On-Demand Video',
    description: 'Offer a vast selection of entertainment options including movies, shows, and streaming apps.'
  }
];
  export default function Ourservice() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
            <div className="iptv-navbar iptv-animate-navbar">
              <img src="./macvisionmainlogo.png" alt="Logo" className="iptv-logo-image" />
              <div className="iptv-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
              </div>
              <div className={`iptv-nav-links ${menuOpen ? "open" : ""}`}>
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    className="iptv-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

      <div className="services-wrapper">
        <header className="services-header">
          <h1>Our IPTV Hospitality Services</h1>
          <p>Next-generation in-room technology for unforgettable guest experiences</p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
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

