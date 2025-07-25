import React from 'react';
import './Iptvsection.css';
import { FaCheckCircle, FaTv, FaTabletAlt } from 'react-icons/fa';

const Iptvsection = () => {
  return (
    <section className="iptv-container">
      <div className="iptv-hero">
        <div className="iptv-image">
          <img src="/iptvsection.jpg" alt="Family watching TV" />
        </div>
        <div className="iptv-content">
          <h5>No More Expensive Cable Bills</h5>
          <h2>BEST IPTV SERVICE IN UK</h2>
          {/* <ul className="iptv-features">
            <li><FaCheckCircle className="icon-blue" /> No More Expensive Cable Bills</li>
            <li><FaCheckCircle className="icon-blue" /> No Hardware to Install</li>
            <li><FaCheckCircle className="icon-blue" /> You Get Over 5000 Channels</li>
            <li><FaCheckCircle className="icon-blue" /> You Get 24/7 Unlimited Access</li>
            <li><FaCheckCircle className="icon-blue" /> You Get Auto Channel Updates</li>
            <li><FaCheckCircle className="icon-blue" /> Watch it on all your Devices</li>
            <li><FaCheckCircle className="icon-blue" /> 30 Days Risk-Free</li>
          </ul> */}
          <button className="iptv-button">Get My IPTV Access Now</button>
        </div>
      </div>

      {/* <div className="iptv-bottom">
        <div className="box white-box">
          <FaTv className="box-icon" />
          <h3>THOUSAND OF CHANNELS</h3>
          <p>We cover all your favorite channels. With more than 5000, you won’t be disappointed.</p>
        </div>
        <div className="box blue-box">
          <FaTabletAlt className="box-icon" />
          <h3>MULTI DEVICES</h3>
          <p>Enjoy your IPTV across all devices. Phones, tablets, or TVs — all supported!</p>
        </div>
      </div> */}
    </section>
  );
};

export default Iptvsection;
