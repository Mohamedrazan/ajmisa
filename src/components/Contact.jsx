import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import paypal from '../../public/paypal.png';
import visa from '../../public/visa.png';
import mastercard from '../../public/mastercard.png';

const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" }
];
  export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
      window.scrollTo(0, 0);

  return (
    <>
      {/* Navbar */}
            <div className="navbar animate-navbar">
              <img src="./macvisionmainlogo.png" alt="Logo" className="logo-image" />
              <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
              </div>
              <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    className="nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

      {/* Contact Section */}
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-info">
          <div className="info-box">
            <h2>Address</h2>
            <p>P.O Box 40637<br />Markaz hail, Hail Street, Jeddah 21511, Saudi Arabia</p>
          </div>
          <div className="info-box">
            <h2>Email</h2>
            <p>www.ajmi@ajmisa.com</p>
          </div>
          <div className="info-box">
            <h2>Phone Number</h2>
            <p>+966 553011362</p>
          </div>
          <div className="info-box">
            <h2>Business Hours</h2>
            <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Friday - Closed</p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.776422380449!2d39.17136296968173!3d21.516475627227464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3daa8151e7d67%3A0xb88d81b7ee732077!2sHael%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1754022802443!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
            <img src={mastercard} alt="Mastercard" />
          </div>
        </div>
      </footer>
    </>
  );
};

