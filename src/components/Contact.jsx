import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Contact.css";

const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" },
];

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="iptv-navbar iptv-animate-navbar">
        <img
          src="./macvisionmainlogo.png"
          alt="Logo"
          className="iptv-logo-image"
        />

        {/* Hamburger Toggle (Mobile) */}
        <div
          className="iptv-menu-toggle"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </div>

        {/* Desktop Nav Links */}
        <div className="iptv-nav-links-desktop">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="iptv-nav-link">
              {link.label}
            </Link>
          ))}

          {/* Back to Home Button */}
          <button
            className="back-home-btn"
            onClick={() => navigate("/")}
          >
            ⬅ Back to Home
          </button>
        </div>
      </div>

      {/* Popup Mobile Menu */}
      {menuOpen && (
        <div
          className="iptv-popup-overlay"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="iptv-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="iptv-close-btn"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </span>
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="iptv-popup-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Back to Home in mobile menu */}
            <button
              className="back-home-btn mobile"
              onClick={() => {
                setMenuOpen(false);
                navigate("/");
              }}
            >
              ⬅ Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          We’re here to help you with all your hospitality IPTV needs.
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-box fade-in">
            <h2>📍 Address</h2>
            <p>
              P.O Box 40637 <br />
              Markaz hail, Hail Street <br />
              Jeddah 21511, Saudi Arabia
            </p>
          </div>
          <div className="info-box fade-in">
            <h2>📧 Email</h2>
            <p>ajmi@ajmisa.com</p>
          </div>
          <div className="info-box fade-in">
            <h2>📞 Phone</h2>
            <p>+966 553011362</p>
          </div>
          <div className="info-box fade-in">
            <h2>⏰ Business Hours</h2>
            <p>
              Mon - Thu: 9:00 AM - 6:00 PM
              <br />
              Friday: Closed
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="map-container slide-up">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.776422380449!2d39.17136296968173!3d21.516475627227464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3daa8151e7d67%3A0xb88d81b7ee732077!2sHael%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1754022802443!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </>
  );
}
