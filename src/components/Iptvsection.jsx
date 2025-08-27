import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Iptvsection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaTv, FaTabletAlt, FaSatelliteDish } from "react-icons/fa";

const Iptvsection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleGetAccess = () => {
    navigate("/qoute-page");
  };

  return (
    <section className="iptv-wrapper">
      {/* Hero Section */}
      <div className="iptv-hero">
        <div className="hero-content" data-aos="fade-right">
          <h5>Smart Entertainment for Hotels</h5>
          <h1>Premium 4K IPTV Experience</h1>
          <p>
            Transform your guest rooms with IPTV solutions designed for seamless
            streaming on any smart TV platform. No set-top box required!
          </p>

          <ul className="feature-list">
            <li><FaCheckCircle /> Android Smart TVs</li>
            <li><FaCheckCircle /> LG WebOS</li>
            <li><FaCheckCircle /> Samsung Tizen</li>
            <li><FaCheckCircle /> Fire TV & More</li>
          </ul>

          <button onClick={handleGetAccess} className="iptv-btn">
            Get Quote Now
          </button>
        </div>

        <div className="hero-image" data-aos="zoom-in">
          <img src="./maintvwatch.jpg" alt="Family watching IPTV" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 data-aos="fade-up">Why Choose Our IPTV?</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <FaTv className="card-icon" />
            <h3>Vast Channel Library</h3>
            <p>
              Access movies, sports, local & international channels in crystal-clear 4K.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <FaTabletAlt className="card-icon" />
            <h3>Multi-Device Support</h3>
            <p>
              Watch anywhere — Smart TVs, mobiles, tablets, Firestick, or desktops.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <FaSatelliteDish className="card-icon" />
            <h3>Easy Management</h3>
            <p>
              Control, monitor, and manage IPTV usage with a powerful admin dashboard.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <FaTv className="card-icon" />
            <h3>Vast Channel Library</h3>
            <p>
              Access movies, sports, local & international channels in crystal-clear 4K.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iptvsection;
