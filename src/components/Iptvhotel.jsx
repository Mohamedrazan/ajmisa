import React, { useState } from 'react';
import './Iptvhotel.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import { Link } from 'react-router-dom';
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
  export default function Iptvhotel() {
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

    <div className="room-service-wrapper">
      <h1 className="page-heading">Room Service</h1>

      <div className="service-boxes">

        <div className="service-card">
          <img src="./order.jpg" alt="How to Order" className="icon" />
          <h2>🛎️ How to Order</h2>
          <p>
            Browse our digital menu and select your desired items using your remote. Press <strong>“Order Now”</strong> and sit back — our staff will deliver it to your room shortly.
          </p>
        </div>

        <div className="service-card">
          <img src="./servicehours.jpg" alt="Service Hours" className="icon" />
          <h2>⏰ Service Hours</h2>
          <p>
            Room service is available <strong>24/7</strong>. Our full menu is available from <strong>6:00 AM to 11:00 PM</strong>. A limited late-night menu is offered after 11 PM.
          </p>
        </div>

        <div className="service-card">
          <img src="./specialnotes.jpg" alt="Special Notes" className="icon" />
          <h2>🌿 Special Notes</h2>
          <ul>
            <li>All dishes are prepared fresh by our chefs.</li>
            <li>Please inform us of any allergies or dietary restrictions.</li>
            <li>Eco-friendly packaging used for all orders.</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="./assist.jpg" alt="Assistance" className="icon" />
          <h2>📞 Need Assistance?</h2>
          <p>
            For personalized assistance or custom orders, press <strong>‘Help’</strong> on your remote or dial <strong>‘9’</strong> from your in-room phone.
          </p>
        </div>

        <div className="service-card">
          <img src="./safety.jpg" alt="Hygiene" className="icon" />
          <h2>🧼 Hygiene & Safety</h2>
          <ul>
            <li>Our staff follows WHO-recommended hygiene protocols.</li>
            <li>Contactless delivery available upon request.</li>
            <li>All packaging is sanitized before dispatch.</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="./deliver.jpg" alt="Delivery Location" className="icon" />
          <h2>📍 Where We Deliver</h2>
          <p>
            Enjoy in-room dining in your suite, balcony, or workspace. Indicate delivery spot while ordering.
          </p>
        </div>

        <div className="service-card">
          <img src="./compservice.jpg" alt="Complimentary" className="icon" />
          <h2>🎁 Complimentary Services</h2>
          <ul>
            <li>Fresh cutlery and napkins with every order.</li>
            <li>Free bottled water with orders over ₹999.</li>
            <li>Birthday/Anniversary surprises on request.</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="./billing.jpg" alt="Billing" className="icon" />
          <h2>💳 Billing & Payment</h2>
          <p>
            Charges will be added to your room bill. Check your bill in the “My Account” section or call the front desk.
          </p>
        </div>

        <div className="service-card">
          <img src="./chef.jpg" alt="Chef" className="icon" />
          <h2>👨‍🍳 Meet Our Chef</h2>
          <p>
            Executive Chef Arjun Malhotra curates every dish with passion and precision. Our culinary team blends global flavors with local ingredients to elevate your dining experience.
          </p>
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
  </>
  );
};

