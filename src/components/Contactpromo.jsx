import React from "react";
import { motion } from "framer-motion";
import "./Contactpromo.css";

export default function IPTVHero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <span className="badge">IPTV Advantage 🔥</span> */}

          <h1 className="hero-title">
            Upgrade Hospitality with <span className="highlight">IPTV Solutions</span>
          </h1>

          <p className="hero-description">
            Deliver seamless in-room entertainment, interactive guest services,
            and high-quality streaming with our IPTV Hospitality Solutions.
            Enhance customer experience with advanced features designed for
            hotels and resorts.
          </p>

          {/* Features */}
          <div className="features-grid">
            <div className="feature-item">Friendly Design</div>
            <div className="feature-item"> All Services</div>
            <div className="feature-item"> Instant Support</div>
            <div className="feature-item">
              
              
              
               Strong Security</div>
          </div>

          {/* CTA Buttons */}
          <div className="button-group">
            <button className="btn-primary">Learn More</button>
            <button className="btn-secondary">Get Started</button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE PLACEHOLDER */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="./frontdesk.png"   // <-- replace with your actual image path
            alt="IPTV Hospitality"
            className="hero-img-element"
          />
        </motion.div>

      </div>
    </section>
  );
}
