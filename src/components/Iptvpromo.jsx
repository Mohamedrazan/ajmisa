import React from "react";
import { motion } from "framer-motion";
import "./Iptvpromo.css";

export default function Iptvpromo() {
  return (
    <div className="iptv-page">

      {/* HERO SECTION */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1>IPTV Hospitality Solutions</h1>
          <p>
            Transform guest experiences with modern IPTV technology. Provide
            in-room entertainment, interactive services, and tailored
            business opportunities for hotels and resorts.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Learn More</button>
            <button className="btn-secondary">Get Started</button>
          </div>
        </motion.div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="section intro">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>What is IPTV Hospitality?</h2>
          <p>
            IPTV (Internet Protocol Television) in hospitality is a
            next-generation solution that enables hotels, resorts, and
            serviced apartments to deliver live TV, on-demand content, and
            interactive guest services directly through internet-based
            systems. Unlike traditional TV, IPTV provides a personalized
            digital entertainment and service hub in every room.
          </p>
        </motion.div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="section benefits">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Key Benefits</h2>
          <ul>
            <li>✔ Enhanced guest experience with HD streaming</li>
            <li>✔ Interactive hotel services (room service, checkout)</li>
            <li>✔ Multi-language content for global visitors</li>
            <li>✔ Branding and promotional opportunities</li>
            <li>✔ Cost savings and easy integration with hotel systems</li>
          </ul>
        </motion.div>
      </section>

      {/* BUSINESS OPPORTUNITIES */}
      <section className="section business">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Business Opportunities with IPTV</h2>
          <p>
            IPTV is more than entertainment—it’s a powerful business tool.
            Hotels can monetize IPTV by offering premium subscriptions,
            advertising opportunities, and cross-selling hotel services.
            Service providers and investors can tap into the growing demand
            for customized digital experiences in hospitality.
          </p>
        </motion.div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Upgrade Your Hospitality Business Today</h2>
          <p>
            Stay ahead of competition with IPTV solutions designed to
            maximize guest satisfaction and business revenue.
          </p>
          <button className="btn-primary">Contact Us</button>
        </motion.div>
      </section>
    </div>
  );
}
