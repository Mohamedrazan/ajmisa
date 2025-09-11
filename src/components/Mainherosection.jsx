import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Mainherosection.css";

const navLinks = [
  {
    label: "Products",
    path: "/products",
    dropdown: [
      { label: "IPTV Systems", path: "/products/iptv" },
      { label: "Website Design", path: "/products/vod" },
      { label: "Mobile app Development", path: "/products/stb" },
      { label: "Whatsapp API", path: "/products/tvs" },
    ],
  },
  {
    label: "Our Services",
    path: "/services",
    dropdown: [
      { label: "Installation", path: "/services/install" },
      { label: "Maintenance", path: "/services/maintenance" },
      { label: "Support", path: "/services/support" },
      { label: "Consulting", path: "/services/consulting" },
    ],
  },
  {
    label: "Our Client",
    path: "/client",
    dropdown: [
      { label: "Hotels", path: "/client/hotels" },
      { label: "Resorts", path: "/client/resorts" },
      { label: "Hospitals", path: "/client/hospitals" },
      { label: "Apartments", path: "/client/apartments" },
    ],
  },
  {
    label: "Certificates",
    path: "/certificates",
    dropdown: [
      { label: "ISO", path: "/certificates/iso" },
      { label: "Quality", path: "/certificates/quality" },
      { label: "Safety", path: "/certificates/safety" },
      { label: "Others", path: "/certificates/others" },
    ],
  },
  {
    label: "Contact Us",
    path: "/contact",
    dropdown: [
      { label: "Request Demo", path: "/contact/demo" },
      { label: "Support", path: "/contact/support" },
      { label: "Sales", path: "/contact/sales" },
      { label: "Careers", path: "/contact/careers" },
    ],
  },
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
    desc: "Our IPTV system transforms traditional hotel TV into a personalized guest experience. Guests can stream live channels, access movies on demand, order room service, and explore hotel facilities seamlessly.",
  },
  {
    image: "./mainhero1.jpg",
    title: "Entertainment at Fingertips",
    subtitle: "Interactive Guest Journey",
    desc: "Provide your guests with immersive entertainment options. With live TV, VoD, and music playlists, every guest enjoys a personalized, convenient, and luxurious in-room experience.",
  },
  {
    image: "./mainhero2.jpg",
    title: "Seamless Hotel Services",
    subtitle: "Digital Hotel Assistant",
    desc: "Enable guests to order food, request room cleaning, and access hotel services with a single click. A smart way to elevate hospitality and improve service delivery.",
  },
];

export default function Mainherosection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
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

  // Toggle dropdowns in mobile
  const toggleDropdown = (i) => {
    setOpenDropdown(openDropdown === i ? null : i);
  };

  return (
    <div className="iptv-dashboard">
      {/* Navbar */}
      <div className="iptv-navbar iptv-animate-navbar">
        <img
          src="./macvisionmainlogo.png"
          alt="Logo"
          className="iptv-logo-image"
        />

        {/* Mobile Menu Toggle */}
        <div
          className="iptv-menu-toggle"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </div>

        {/* Desktop Nav Links */}
        <div className="iptv-nav-links-desktop">
          {navLinks.map((link, i) => (
            <div key={i} className="iptv-nav-item">
              <Link to={link.path} className="iptv-nav-link">
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="iptv-dropdown">
                  {link.dropdown.map((drop, j) => (
                    <Link
                      key={j}
                      to={drop.path}
                      className="iptv-dropdown-link"
                    >
                      {drop.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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
              <div
                key={i}
                className={`iptv-popup-item ${
                  openDropdown === i ? "open" : ""
                }`}
              >
                <div
                  className="iptv-popup-link"
                  onClick={() => toggleDropdown(i)}
                >
                  {link.label}
                  {link.dropdown && (
                    <span className="dropdown-arrow">
                      {openDropdown === i ? "▲" : "▼"}
                    </span>
                  )}
                </div>
                {link.dropdown && (
                  <div className="iptv-popup-dropdown">
                    {link.dropdown.map((drop, j) => (
                      <Link
                        key={j}
                        to={drop.path}
                        onClick={() => setMenuOpen(false)}
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
            className={`iptv-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="iptv-hero-overlay">
              <div className="iptv-hero-text">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="iptv-welcome slide-subtitle">
                  {slide.subtitle}
                </p>
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
              className={`dot ${
                index === currentSlide ? "active" : ""
              }`}
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
            <img
              src={icon.icon}
              alt={icon.name}
              className="iptv-icon-image"
            />
            <span className="iptv-icon-label">{icon.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
