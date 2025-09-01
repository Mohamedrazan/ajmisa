import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiCheckCircle,
  FiCpu,
  FiCloud,
  FiShield,
  FiUsers,
  FiArrowLeft,
} from "react-icons/fi";
import "./IPTVPage.css";

const IPTVPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="iptv-section">
      {/* Back Button (Top Left) */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FiArrowLeft /> Back
      </button>

      <div className="iptv-container">
        {/* Left: Text Section */}
        <div className="iptv-text" data-aos="fade-right">
          <h1 className="iptv-title">Enterprise IPTV Middleware Solutions</h1>
          <p className="iptv-subtitle">
            Empower your business with next-gen IPTV middleware – designed for
            scalability, security, and exceptional user experience.
          </p>

          <p
            className="iptv-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our middleware platform is more than just a bridge between content
            providers and end users. It’s a powerful ecosystem that integrates
            <strong>
              {" "}
              content delivery, subscriber management, analytics, and
              monetization
            </strong>
            . Built with enterprise-grade security and unmatched flexibility, it
            enables hotels, ISPs, and service providers to launch IPTV
            experiences that truly impress.
          </p>

          <ul className="iptv-features">
            <li data-aos="zoom-in">
              <FiCheckCircle className="feat-icon" />
              Centralized subscriber & content control
            </li>
            <li data-aos="zoom-in" data-aos-delay="100">
              <FiShield className="feat-icon" />
              Enterprise-level security & compliance
            </li>
            <li data-aos="zoom-in" data-aos-delay="200">
              <FiCloud className="feat-icon" />
              Hybrid cloud & on-premise deployment
            </li>
            <li data-aos="zoom-in" data-aos-delay="300">
              <FiUsers className="feat-icon" />
              Personalized & multi-device experiences
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="iptv-buttons" data-aos="fade-up" data-aos-delay="400">
            <button className="iptv-btn" onClick={() => navigate("/contact")}>
              Contact Us
            </button>
            <button
              className="iptv-btn secondary"
              onClick={() => navigate("/request-demo")}
            >
              Book Demo
            </button>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="iptv-image" data-aos="fade-left">
          <img
            src="./iptvmiddleware.jpg"
            alt="IPTV Middleware Platform"
            className="iptv-img"
          />
          <div className="blob-shape"></div>
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="iptv-extra">
        <div className="extra-box" data-aos="fade-up">
          <div className="extra-head">
            <FiCpu className="extra-icon" />
            <h2>Core Intelligence</h2>
          </div>
          <p>
            From content scheduling to billing integration, our middleware
            operates as the central command hub of your IPTV network. It
            automates workflows and ensures smooth delivery at scale.
          </p>
        </div>

        <div className="extra-box" data-aos="fade-up" data-aos-delay="200">
          <div className="extra-head">
            <FiCloud className="extra-icon" />
            <h2>Future-Ready Design</h2>
          </div>
          <p>
            Deploy in the cloud, on-premise, or hybrid models – giving you
            maximum flexibility and resilience while reducing operational costs.
          </p>
        </div>

        <div className="extra-box" data-aos="fade-up" data-aos-delay="400">
          <div className="extra-head">
            <FiUsers className="extra-icon" />
            <h2>Exceptional Experience</h2>
          </div>
          <p>
            Deliver an intuitive, personalized viewing journey with seamless
            access to live TV, VOD, and interactive features across all devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPTVPage;
