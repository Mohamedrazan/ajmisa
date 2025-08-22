import React from "react";
import "./WhatsAppBusinessAPI.css";
import { FaWhatsapp, FaCheckCircle, FaComments, FaBell } from "react-icons/fa";

const WhatsAppBusinessAPI = () => {
        window.scrollTo(0, 0);

  return (
    <div className="whatsapp-container">
      {/* Hero Section */}
      <section className="whatsapp-hero">
        <div className="hero-text">
          <h1>WhatsApp Business API</h1>
          <p>
            Seamlessly connect with your hotel guests using the WhatsApp Business API. 
            From instant booking confirmations to personalized promotions, 
            enhance guest communication like never before.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="hero-icon">
          <FaWhatsapp className="big-icon" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose WhatsApp Business API?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <FaCheckCircle className="feature-icon" />
            <h3>Instant Confirmations</h3>
            <p>Send real-time booking confirmations directly to guests on WhatsApp.</p>
          </div>

          <div className="feature-card">
            <FaComments className="feature-icon" />
            <h3>Two-Way Communication</h3>
            <p>Enable quick chats for service requests, room service, and concierge support.</p>
          </div>

          <div className="feature-card">
            <FaBell className="feature-icon" />
            <h3>Promotions & Alerts</h3>
            <p>Deliver personalized offers, reminders, and updates instantly.</p>
          </div>

          <div className="feature-card">
            <FaWhatsapp className="feature-icon" />
            <h3>Trusted & Secure</h3>
            <p>WhatsApp ensures encrypted, safe communication with your guests.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Transform Guest Engagement</h2>
        <p>
          With WhatsApp Business API, your hotel can build stronger relationships, 
          improve response times, and enhance the overall guest experience.
        </p>
        <button className="cta-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default WhatsAppBusinessAPI;
