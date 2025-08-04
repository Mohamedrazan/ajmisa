import React from 'react';
import './Iptvsection.css';
import { FaCheckCircle, FaTv, FaTabletAlt } from 'react-icons/fa';

const Iptvsection = () => {
  return (
    <section className="iptv-container">
      {/* Hero Section */}
      <div className="iptv-hero">
        <div className="iptv-image">
          <img src="./maintvwatch.jpg" alt="Family watching IPTV" />
        </div>
        <div className="iptv-content">
          <h5>Say Goodbye to IPTV set-top Boxes</h5>
          <h2>Premium 4K Streaming</h2>
          <p className="subtitle">Compatible with all major Smart TV Platforms</p>

          <ul className="iptv-features">
            <li><FaCheckCircle className="icon-purple" /> Android Smart TVs</li>
            <li><FaCheckCircle className="icon-purple" /> LG WebOS</li>
            <li><FaCheckCircle className="icon-purple" /> Samsung Tizen</li>
            <li><FaCheckCircle className="icon-purple" /> Smart OS and more </li>
            {/* <li><FaCheckCircle className="icon-purple" /> Auto Channel & Content Updates</li>
            <li><FaCheckCircle className="icon-purple" /> Compatible with All Devices</li>
            <li><FaCheckCircle className="icon-purple" /> 30 Days Risk-Free Guarantee</li> */}
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
