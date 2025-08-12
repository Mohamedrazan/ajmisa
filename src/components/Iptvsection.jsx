import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Iptvsection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheckCircle, FaTv, FaTabletAlt } from 'react-icons/fa';

const Iptvsection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleGetAccess = () => {
    navigate('/get-iptv-access'); // This will route to your new page
  };

  return (
    <section className="iptv-container">
      {/* Hero Section */}
      <div className="iptv-hero">
        <div className="iptv-image" data-aos="fade-right">
          <img src="./maintvwatch.jpg" alt="Family watching IPTV" />
        </div>
        <div className="iptv-content" data-aos="fade-left">
          <h5>Say Goodbye to IPTV Set-Top Boxes</h5>
          <h2>Premium 4K IPTV Streaming</h2>
          <p className="subtitle">
            Compatible with all major Smart TV platforms for seamless in-room entertainment.
          </p>

          <ul className="iptv-features">
            <li><FaCheckCircle className="icon-purple" /> Android Smart TVs</li>
            <li><FaCheckCircle className="icon-purple" /> LG WebOS</li>
            <li><FaCheckCircle className="icon-purple" /> Samsung Tizen</li>
            <li><FaCheckCircle className="icon-purple" /> Smart OS and more</li>
          </ul>

          <button className="iptv-button" onClick={handleGetAccess}>
            Get My IPTV Access Now
          </button>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="iptv-bottom">
        <div className="box white-box" data-aos="fade-up" data-aos-delay="100">
          <FaTv className="box-icon" />
          <h3 style={{ color: "#2d2da8" }}>Thousands of Channels</h3>
          <p>Enjoy premium sports, movies, international and regional content with ease.</p>
        </div>
        <div className="box white-box" data-aos="fade-up" data-aos-delay="200">
          <FaTabletAlt className="box-icon" />
          <h3 style={{ color: "#2d2da8" }}>Cross-Device Streaming</h3>
          <p>Stream on Smart TVs, Firesticks, mobile devices, desktops and more.</p>
        </div>
        <div className="box white-box" data-aos="fade-up" data-aos-delay="300">
          <FaTv className="box-icon" />
          <h3 style={{ color: "#2d2da8" }}>Centralized Management</h3>
          <p>Monitor and manage all guest IPTV activity from a single backend dashboard.</p>
        </div>
      </div>
    </section>
  );
};

export default Iptvsection;
