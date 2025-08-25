import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mainherosection.css";

const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" },
];

const icons = [
  { name: "Hotel TV", route: "/tv-channels", icon: "./channel.png" },
  { name: "VoD", route: "/movies", icon: "./movies.png" },
  { name: "Room Service", route: "/room-service", icon: "./roomservice1.png" },
  { name: "Hotel Info", route: "/hotel-info", icon: "./info.png" },
  { name: "Menu", route: "/menu", icon: "./room.png" },
  { name: "Hotel Guest Info", route: "/guest-info", icon: "./guest.png" },
];

export default function Mainherosection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="iptv-dashboard">
      {/* Navbar */}
      <div className="iptv-navbar iptv-animate-navbar">
        <img src="./macvisionmainlogo.png" alt="Logo" className="iptv-logo-image" />

        {/* Hamburger Toggle */}
        <div className="iptv-menu-toggle" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        {/* Desktop Nav Links */}
        <div className="iptv-nav-links-desktop">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="iptv-nav-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Popup Mobile Menu */}
      {menuOpen && (
        <div className="iptv-popup-overlay" onClick={() => setMenuOpen(false)}>
          <div
            className="iptv-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="iptv-close-btn" onClick={() => setMenuOpen(false)}>
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
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="iptv-hero-section">
        <div className="iptv-hero-overlay">
          <div className="iptv-hero-text iptv-animate-hero">
            <h2>IPTV Hospitality Solutions</h2>
            <p className="iptv-welcome">Smart In-Room Experience</p>
            <p className="iptv-desc">
              Our IPTV system transforms traditional hotel TV into a personalized guest experience.
              Stream live channels, access movies on demand, order room service, and explore hotel
              facilities — all from the comfort of the guest room, using an intuitive and engaging
              interface.
            </p>
          </div>
        </div>
      </div>

      {/* Icon Row */}
      <div className="iptv-icon-row">
        {icons.map((icon, index) => (
          <Link
            to={icon.route}
            key={index}
            className={`iptv-icon-box iptv-icon-animate-${index + 1}`}
          >
            <img src={icon.icon} alt={icon.name} className="iptv-icon-image" />
            <span className="iptv-icon-label">{icon.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
