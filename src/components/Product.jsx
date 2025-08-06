import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';


import tvIcon from '../../public/tvicon.png';
// import stbIcon from '../assets/stb.png';
// import middlewareIcon from '../../public/middleware.png';
// import remoteIcon from '../../public/remotecntrl.png';
// import mobileIcon from '../../public/compapp.png';
// import appIcon from '../../public/customapp.png'


const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" }
];

const products = [
  {
    title: 'Smart Hospitality TV',
    icon:tvIcon,
    description: 'High-definition smart TVs pre-configured with our IPTV system for seamless guest entertainment.',
  },
  {
    title: 'IPTV Set-Top Box',
    description: 'Compact and powerful STBs supporting 4K streaming, remote updates, and hotel-specific features.',
  },
  {
    title: 'Middleware Platform',
    description: 'Centralized IPTV middleware to manage content, analytics, and remote configurations.',
  },
  {
    title: 'RF/Wi-Fi Remote Control',
    description: 'Modern remotes designed for hotels, easy-to-clean and compatible with IPTV devices.',
  },
  {
    title: 'Mobile Companion App',
    description: 'Guests can stream, order room service, or explore hotel info through this mobile app.',
  },
  {
    title: 'Custom IPTV App',
    description: 'Branded Android/iOS app for guest control of room services, streaming, and more.',
  },
  {
    title: 'Interactive Guest Portal',
    description: 'A user-friendly interface on TV allowing guests to access hotel services, check bills, order food, and request housekeeping.',
  },
  {
    title: 'Video-on-Demand Library',
    description: 'Premium movie and entertainment library with multi-language options, curated for hotels with licensing support.',
  }
];


const Product = () => {
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

    <div className="product-wrapper">
      <header className="product-header">
        <h1>Our Products</h1>
        <p>Innovative IPTV Solutions for the Hospitality Industry</p>
      </header>

      <section className="product-grid">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.icon} alt={product.title} className="product-icon" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </section>
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

export default Product;
