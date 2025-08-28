import React, { useState, useEffect, useRef } from "react";
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

const slides = [
  {
    image: "./resort.jpg",
    title: "IPTV Hospitality Solutions",
    subtitle: "Smart In-Room Experience",
    desc: "Our IPTV system transforms traditional hotel TV into a personalized guest experience. Guests can stream live channels, access movies on demand, order room service, and explore hotel facilities seamlessly."
  },
  {
    image: "./mainhero1.jpg",
    title: "Entertainment at Fingertips",
    subtitle: "Interactive Guest Journey",
    desc: "Provide your guests with immersive entertainment options. With live TV, VoD, and music playlists, every guest enjoys a personalized, convenient, and luxurious in-room experience."
  },
  {
    image: "./mainhero2.jpg",
    title: "Seamless Hotel Services",
    subtitle: "Digital Hotel Assistant",
    desc: "Enable guests to order food, request room cleaning, and access hotel services with a single click. A smart way to elevate hospitality and improve service delivery."
  }
];

export default function Mainherosection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (diff < -50) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
    touchStartX.current = null;
  };

  return (
    <div className="iptv-dashboard">
      {/* Navbar */}
      <div className="iptv-navbar iptv-animate-navbar">
        <img src="./macvisionmainlogo.png" alt="Logo" className="iptv-logo-image" />
        <div className="iptv-menu-toggle" onClick={() => setMenuOpen(true)}>☰</div>
        <div className="iptv-nav-links-desktop">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="iptv-nav-link">{link.label}</Link>
          ))}
        </div>
      </div>

      {/* Popup Mobile Menu */}
      {menuOpen && (
        <div className="iptv-popup-overlay" onClick={() => setMenuOpen(false)}>
          <div className="iptv-popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="iptv-close-btn" onClick={() => setMenuOpen(false)}>×</span>
            {navLinks.map((link, i) => (
              <Link key={i} to={link.path} className="iptv-popup-link" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Hero Slider */}
      <div 
        className="iptv-slider" 
        onTouchStart={handleTouchStart} 
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`iptv-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="iptv-hero-overlay">
              <div className="iptv-hero-text">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="iptv-welcome slide-subtitle">{slide.subtitle}</p>
                <p className="iptv-desc slide-desc">{slide.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="iptv-slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
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
