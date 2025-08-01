import React from "react";
import { Link } from "react-router-dom";
import "./Mainherosection.css";

const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" }
];

const icons = [
  { name: "Hotel TV ", route: "/tv-channels", icon: "./channel.png" },
  { name: "VoD", route: "/movies", icon: "./movies.png" },
  { name: "Room Service", route: "/room-service", icon: "./roomservice1.png" },
  { name: "Hotel Info", route: "/hotel-info", icon: "./info.png" },
  { name: "Menu", route: "/menu", icon: "./room.png" },
  { name: "Hotel Guest Info", route: "/guest-info", icon: "./guest.png" },
];

export default function Mainherosection() {
  return (
    <div className="dashboard">
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

      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-text">
            <h2>IPTV Hospitality Solutions</h2>
            <p className="welcome">Smart In-Room Experience</p>
            <p className="desc">
              Our IPTV system transforms traditional hotel TV into a personalized guest experience.
              Stream live channels, access movies on demand, order room service, and explore hotel
              facilities — all from the comfort of the guest room, using an intuitive and engaging interface.
            </p>
          </div>
        </div>
      </div>

      <div className="icon-row">
        {icons.map((icon, index) => (
          <Link to={icon.route} key={index} className="icon-box">
            <img src={icon.icon} alt={icon.name} className="icon-image" />
            <span className="icon-label">{icon.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
