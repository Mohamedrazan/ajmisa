import React, { useState } from 'react';
import './Channelpage.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';

import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';

// Demo channel logos
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';
import logo11 from '../assets/logo11.png';
import logo12 from '../assets/logo12.jpg';
import logo13 from '../assets/logo13.jpg';
import logo14 from '../assets/logo14.jpg';
import logo15 from '../assets/logo15.png';
import logo16 from '../assets/logo16.png';
import logo17 from '../assets/logo17.png';
import logo18 from '../assets/logo18.jpg';
import logo19 from '../assets/logo19.jpg';
import logo20 from '../assets/logo20.png';

// Paid channel logos
import paid1 from '../assets/paid1.png';
import paid2 from '../assets/paid2.png';
import paid3 from '../assets/paid3.png';
import paid4 from '../assets/paid4.jpg';
import paid5 from '../assets/paid5.png';
import paid6 from '../assets/paid6.png';
import paid7 from '../assets/paid7.png';
import paid8 from '../assets/paid8.jpg';

const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" }
];

export default function Channelpage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const demoLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20
  ];

  const paidLogos = [paid1, paid2, paid3, paid4, paid5, paid6, paid7, paid8];

  return (
    <div className="channel-container">
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

      {/* Channel Section */}
      <div className="overlay">
        <div className="channel-content">
          <div className="top-section">
            <h1>TOP FREE CHANNEL</h1>
            <div className="logo-grid">
              {demoLogos.map((logo, index) => (
                <div key={index} className="logo-circle">
                  <img src={logo} alt={`Free Channel ${index + 1}`} />
                </div>
              ))}
            </div>
            <br />
            <div className="buttons">
              <button className="deal-btn">Deal Now</button>
              <button className="try-btn">Try Free</button>
            </div>
          </div>

          <div className="bottom-section">
            <h1>TOP PAID CHANNEL</h1>
            <div className="logo-grid small-grid">
              {paidLogos.map((logo, index) => (
                <div key={index} className="logo-circle small">
                  <img src={logo} alt={`Paid Channel ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
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
    </div>
  );
}
