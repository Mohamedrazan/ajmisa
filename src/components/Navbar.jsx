import React, { useState } from 'react';
import './Navbar.css';
import bg from '../../public/bg2.jpg';
import { FaCheckCircle } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
        {/* Navbar */}
        <div className="navbar">
          <div className="logo">
            <img src="./ajmisalogo.png" alt="Logo" />
          </div>

          {/* Hamburger icon */}
          <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>

          {/* Nav Links - Desktop */}
          <ul className="nav-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Contact Us</li>
          </ul>

          {/* Nav Links - Mobile Popup */}
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <ul>
                <li onClick={() => setIsMobileMenuOpen(false)}>Home</li>
                <li onClick={() => setIsMobileMenuOpen(false)}>About Us</li>
                <li onClick={() => setIsMobileMenuOpen(false)}>Our Services</li>
                <li onClick={() => setIsMobileMenuOpen(false)}>Contact Us</li>
              </ul>
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className="content">
          <p className="offer-text">Limited Time Offer</p>
          <h1 className="main-heading">
            12 MONTHS IPTV - <span>60% OFF</span>
          </h1>
          <ul className="features">
            <li>
              <FaCheckCircle style={{ color: '#03a9f4', marginRight: '8px' }} />
              Unlimited Access To +5000 HD Channels
            </li>
            <br />
            <li>
              <FaCheckCircle style={{ color: '#03a9f4', marginRight: '8px' }} />
              Unlimited Access To Thousands of VOD FREE
            </li>
            <br />
            <li>
              <FaCheckCircle style={{ color: '#03a9f4', marginRight: '8px' }} />
              Updates and Support
            </li>
            <br />
            <br />
            <button className="cta-button">Get My IPTV Access Now</button>
          </ul>
        </div>
      </div>

      {/* Platform Wrapper */}
      <div className="platform-wrapper">
        <img src="./android1.png" alt="Android" className="platform-icon" />
        <img src="./amazontv1.png" alt="Amazon TV" className="platform-icon" />
        <img src="./appletv1.png" alt="Apple TV" className="platform-icon" />
        <img src="./windows1.png" alt="Windows" className="platform-icon" />
      </div>
    </>
  );
};

export default Navbar;
