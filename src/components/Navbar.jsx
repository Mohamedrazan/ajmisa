import React from 'react';
import './Navbar.css';
import bg from '../../public/bg2.jpg';
import { FaCheckCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
  {/* Navbar */}
  <div className="navbar">
    <div className="logo">
      <img src="./ajmisalogo.png" alt="Logo" />
    </div>
    <ul className="nav-links">
      <li>Home</li>
      <li>About Us</li>
      <li>Our Services</li>
      <li>Contact Us</li>
    </ul>
  </div>


      {/* Pill Platform Icons Overlay */}
      <div className="platform-wrapper">
        <img src="./android.png" alt="Android" className="platform-icon" />
        <img src="./amazontv.png" alt="Amazon TV" className="platform-icon" />
        <img src="./appletv.png" alt="Apple TV" className="platform-icon" />
        <img src="./windows.png" alt="Windows" className="platform-icon" />
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
  );
};

export default Navbar;
