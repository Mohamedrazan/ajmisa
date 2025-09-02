import React, { useEffect } from "react";
import "./WhatsAppBusinessAPI.css";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaComments,
  FaBell,
  FaLock,
} from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatsAppBusinessAPI = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="whatsapp-page">
      {/* Back Button (fixed top-left) */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FiArrowLeft size={22} /> Back
      </button>

      <div className="whatsapp-container">
        {/* Hero Section */}
        <section className="whatsapp-hero" data-aos="fade-up">
          <div className="hero-text">
            <h1>WhatsApp Business API for Hotels</h1>
            <p>
              Elevate your hotel’s communication with the world’s most trusted
              messaging app. From instant reservations to 24/7 guest support,
              the WhatsApp Business API helps you deliver **personalized,
              secure, and real-time experiences** directly in your guests’
              pockets.
            </p>
            <div className="hero-buttons">
              {/* <button className="hero-btn">Get Started</button> */}
              <button
                className="hero-btn contact"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="hero-icon">
            <FaWhatsapp className="big-icon" />
          </div>
        </section>

        {/* Features Section */}
        <section className="features" data-aos="fade-up">
          <h2>Why Hotels Choose WhatsApp Business API</h2>
          <div className="feature-grid">
            <div className="feature-card" data-aos="zoom-in">
              <FaCheckCircle className="feature-icon" />
              <h3>Instant Confirmations</h3>
              <p>
                Send booking confirmations, check-in details, and receipts
                instantly—right where your guests are most active.
              </p>
            </div>

            <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
              <FaComments className="feature-icon" />
              <h3>Two-Way Conversations</h3>
              <p>
                Enable real-time chats for room service, housekeeping, or any
                personalized request without delays.
              </p>
            </div>

            <div className="feature-card" data-aos="zoom-in" data-aos-delay="400">
              <FaBell className="feature-icon" />
              <h3>Personalized Alerts</h3>
              <p>
                Send promotions, loyalty offers, event reminders, and updates
                that truly matter to your guests.
              </p>
            </div>

            <div className="feature-card" data-aos="zoom-in" data-aos-delay="600">
              <FaLock className="feature-icon" />
              <h3>Secure & Trusted</h3>
              <p>
                End-to-end encryption ensures your guest interactions remain
                private and secure at all times.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta" data-aos="fade-up">
          <h2>Reinvent Guest Engagement</h2>
          <p>
            Hotels that adopt WhatsApp Business API see faster responses, higher
            guest satisfaction, and improved loyalty. Don’t just manage guests —
            connect with them meaningfully.
          </p>
          <button
            className="cta-btn"
            onClick={() => navigate("/request-demo")}
          >
            Request Demo
          </button>
        </section>
      </div>
    </div>
  );
};

export default WhatsAppBusinessAPI;
