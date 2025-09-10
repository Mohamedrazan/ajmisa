import React from "react";
import { motion } from "framer-motion";
import "./IPTVSystem.css";
import { Link } from "react-router-dom"; 


export default function IPTVSystem() {
  return (
    <div className="iptv-page">
      {/* Hero Section */}
      <motion.section
        className="iptv-hero"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

      >
        <h1 className="hero-title" style={{color:"white"}}>IPTV System for Hospitality Excellence</h1>
        <p className="hero-subtitle" style={{color:"white"}}>
          A powerful in-room entertainment and engagement solution that turns
          every screen into a personalized guest experience hub.
        </p>
      </motion.section>

      {/* Divider Line */}
      <motion.div
        className="divider"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      {/* Features Section */}
      <motion.section
        className="iptv-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2>Seamless Guest Experiences</h2>
        <p>
          Our IPTV solution redefines the way hotels connect with guests. From
          check-in to check-out, every moment becomes an opportunity to inform,
          entertain, and delight.
        </p>
        <ul>
          <li>Personalized welcome screens with hotel branding</li>
          <li>Interactive menus for room service and spa bookings</li>
          <li>Live TV and premium on-demand content at a click</li>
          <li>Instant access to hotel facilities, offers, and promotions</li>
          <li>Multi-language support for global travelers</li>
        </ul>
      </motion.section>

      {/* Engagement Section */}
      <motion.section
        className="iptv-section alt"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Engagement That Drives Revenue</h2>
        <p>
          More than just entertainment, our IPTV platform is a revenue
          accelerator. Guests can explore and order hotel services directly from
          their TV, while targeted promotions encourage upgrades and bookings in
          real time.
        </p>
        <p>
          Integrated analytics give management clear insights into guest
          behavior, helping shape offers that resonate and maximize returns.
        </p>
      </motion.section>

      {/* Integration Section */}
      <motion.section
        className="iptv-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Effortless Integration</h2>
        <p>
          Designed to work with existing hotel infrastructure, our IPTV system
          connects seamlessly with PMS, billing, and housekeeping modules,
          ensuring smooth workflows and minimal disruption.
        </p>
        <p>
          Whether you run a boutique resort or a global chain, our solution
          scales effortlessly to meet your requirements with reliability and
          security at its core.
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="iptv-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Reinvent Guest Entertainment Today</h2>
        <p>
          Transform in-room experiences into unforgettable journeys. Connect
          with us to discover how our IPTV system can empower your hospitality
          business.
        </p>
        <div className="cta-buttons">
          <button className="btn contact">Contact Us</button>
          <button className="btn demo">Request Demo</button>
        </div>
      </motion.section>
    </div>
  );
}
