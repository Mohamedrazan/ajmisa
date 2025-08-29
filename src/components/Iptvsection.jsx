import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCheckCircle,
  FaTv,
  FaTabletAlt,
  FaSatelliteDish,
  FaWifi,
} from "react-icons/fa";
import "./Iptvsection.css";

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
      {/* HERO */}
      <div className="iptv-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content" data-aos="fade-up">
          <h5>Next-Gen Hospitality</h5>
          <h1>
            Redefine <span>Entertainment</span> with 4K IPTV
          </h1>
          <p>
            Deliver a premium in-room experience for your guests with IPTV that
            works seamlessly across Smart TVs and devices. Immersive, modern,
            and built for the future of hospitality.
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
          <img src="./maintvwatch.jpg" alt="IPTV Experience" />
          <div className="floating-shape shape1"></div>
          <div className="floating-shape shape2"></div>
        </div>
      </div>

      {/* FEATURES (UNCHANGED) */}
      <div className="features-section">
        <h2 data-aos="fade-up">Why Choose Our IPTV?</h2>
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-right">
            <FaTv className="timeline-icon" />
            <div className="timeline-content">
              <h3>Vast Channel Library</h3>
              <p>
                Access global content including movies, sports, and
                international channels in 4K.
              </p>
            </div>
          </div>

          <div className="timeline-item" data-aos="fade-left">
            <FaTabletAlt className="timeline-icon" />
            <div className="timeline-content">
              <h3>Multi-Device Streaming</h3>
              <p>
                Guests can enjoy content on TVs, tablets, mobiles, or desktops —
                anytime, anywhere.
              </p>
            </div>
          </div>

          <div className="timeline-item" data-aos="fade-right">
            <FaSatelliteDish className="timeline-icon" />
            <div className="timeline-content">
              <h3>Admin Dashboard</h3>
              <p>
                Manage, monitor, and control IPTV services easily with our
                intuitive management tools.
              </p>
            </div>
          </div>

          <div className="timeline-item" data-aos="fade-left">
            <FaWifi className="timeline-icon" />
            <div className="timeline-content">
              <h3>Seamless Connectivity</h3>
              <p>
                Optimized for stable, fast streaming — ensuring zero downtime
                and smooth performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iptvsection;
