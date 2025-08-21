import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiCheckCircle, FiShield, FiSmartphone, FiLayout, FiCloud, FiHeadphones, FiCpu, FiTrendingUp, FiUsers } from "react-icons/fi";
import "./IPTVPage.css";

const IPTVPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="iptv-section">
      <div className="iptv-container">

        {/* Text Section */}
        <div className="iptv-text" data-aos="fade-right">
          <h1 className="iptv-title">IPTV Middleware Software Development</h1>
          <p className="iptv-subtitle">
            IPTV Middleware is the core engine that powers IPTV solutions. It connects content
            providers, operators, and viewers in one secure and scalable ecosystem, ensuring smooth
            delivery of television, video-on-demand, and interactive services.
          </p>

          <p className="iptv-description" data-aos="fade-up" data-aos-delay="200">
            Our IPTV Middleware Software Development services enable telecoms, ISPs, and hospitality
            businesses to launch feature-rich IPTV platforms. With centralized management, powerful
            analytics, flexible integrations, and customizable branding, our solutions are built to
            deliver efficiency, growth, and outstanding end-user experiences.
          </p>

          <ul className="iptv-features">
            <li data-aos="zoom-in">
              <FiCheckCircle className="feat-icon" aria-hidden="true" />
              Centralized Content & Subscriber Management
            </li>
            <li data-aos="zoom-in" data-aos-delay="100">
              <FiShield className="feat-icon" aria-hidden="true" />
              Secure Authentication & Billing Systems
            </li>
            <li data-aos="zoom-in" data-aos-delay="200">
              <FiSmartphone className="feat-icon" aria-hidden="true" />
              Multi-device & Multi-platform Support
            </li>
            <li data-aos="zoom-in" data-aos-delay="300">
              <FiLayout className="feat-icon" aria-hidden="true" />
              Customizable UI & Branding Options
            </li>
            <li data-aos="zoom-in" data-aos-delay="400">
              <FiCloud className="feat-icon" aria-hidden="true" />
              Cloud-ready & On-premise Deployment
            </li>
            <li data-aos="zoom-in" data-aos-delay="500">
              <FiHeadphones className="feat-icon" aria-hidden="true" />
              24/7 Monitoring & Technical Support
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="iptv-image" data-aos="fade-left">
          <img
            src="./iptvmiddleware.jpg"
            alt="Abstract visualization of IPTV middleware platform"
            className="iptv-img"
          />
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="iptv-extra">
        <div className="extra-box" data-aos="fade-up">
          <div className="extra-head">
            <FiCpu className="extra-icon" aria-hidden="true" />
            <h2>What is IPTV Middleware?</h2>
          </div>
          <p>
            Middleware acts as the command center of an IPTV platform. It manages access rights,
            integrates with CRM and billing systems, controls content delivery, and enables advanced
            features like EPG, catch-up TV, timeshift, and multi-language support.
          </p>
        </div>

        <div className="extra-box" data-aos="fade-up" data-aos-delay="200">
          <div className="extra-head">
            <FiTrendingUp className="extra-icon" aria-hidden="true" />
            <h2>Benefits for Service Providers</h2>
          </div>
          <p>
            Scale faster, launch new revenue models, and optimize operations through automation and
            analytics. Monetize via subscriptions, targeted ads, and promotions while maintaining
            service reliability and SLA compliance.
          </p>
        </div>

        <div className="extra-box" data-aos="fade-up" data-aos-delay="400">
          <div className="extra-head">
            <FiUsers className="extra-icon" aria-hidden="true" />
            <h2>Enhancing User Experience</h2>
          </div>
          <p>
            Deliver an intuitive interface with seamless access to live TV, VOD, and interactive
            features. Personalization, profiles, and smooth navigation keep users engaged across devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPTVPage;
