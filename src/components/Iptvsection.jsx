import React from 'react';
import './Iptvsection.css';
import { FaCheckCircle, FaTv, FaTabletAlt } from 'react-icons/fa';

const Iptvsection = () => {
  return (
    <section className="iptv-container">
      {/* Hero Section */}
      <div className="iptv-hero">
        <div className="iptv-image">
          <img src="./iptvservice.jpg" alt="Family watching IPTV" />
        </div>
        <div className="iptv-content">
          <h5>Say Goodbye to Cable Bills</h5>
          <h2>Top-Rated IPTV Service in the UK</h2>
          <p className="subtitle">Stream thousands of HD channels, live events & on-demand shows at your fingertips.</p>

          <ul className="iptv-features">
            <li><FaCheckCircle className="icon-purple" /> No More Expensive Cable Bills</li>
            <li><FaCheckCircle className="icon-purple" /> No Hardware to Install</li>
            <li><FaCheckCircle className="icon-purple" /> 5000+ Live Channels Included</li>
            <li><FaCheckCircle className="icon-purple" /> Unlimited 24/7 Streaming Access</li>
            <li><FaCheckCircle className="icon-purple" /> Auto Channel & Content Updates</li>
            <li><FaCheckCircle className="icon-purple" /> Compatible with All Devices</li>
            <li><FaCheckCircle className="icon-purple" /> 30 Days Risk-Free Guarantee</li>
          </ul>

          <button className="iptv-button">Get My IPTV Access Now</button>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="iptv-bottom">
        <div className="box white-box">
          <FaTv className="box-icon" />
          <h3>Thousands of Channels</h3>
          <p>Enjoy premium channels including sports, movies, kids, international, and more.</p>
        </div>
        <div className="box blue-box">
          <FaTabletAlt className="box-icon" />
          <h3>Stream on Any Device</h3>
          <p>Watch on Smart TVs, Firesticks, Android/iOS devices, PCs, and more.</p>
        </div>
         <div className="box white-box">
          <FaTv className="box-icon" />
          <h3>Thousands of Channels</h3>
          <p>Enjoy premium channels including sports, movies, kids, international, and more.</p>
        </div>
          <div className="box blue-box">
          <FaTabletAlt className="box-icon" />
          <h3>Stream on Any Device</h3>
          <p>Watch on Smart TVs, Firesticks, Android/iOS devices, PCs, and more.</p>
        </div>
      </div>
    </section>
  );
};

export default Iptvsection;
