import React from "react";
import { motion } from "framer-motion";
import "./IPTVDetails.css";

export default function LandingPage() {
  return (
    <section className="landing-section">
      <div className="floating-shapes">
        <motion.div
          className="shape shape1"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        ></motion.div>
        <motion.div
          className="shape shape2"
          animate={{ x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        ></motion.div>
        <motion.div
          className="shape shape3"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        ></motion.div>
      </div>

      <div className="landing-container">
        {/* Left Image */}
        <motion.div
          className="landing-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="./macdesk.jpg" alt="Hero" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="landing-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <span className="tag">✨ About Our App</span> */}
          <h1 className="title">
            Simple Reports <br /> & Analytics Backdown As It
          </h1>
          <p className="description">
            Experience smooth analytics and reports designed for the hospitality
            industry. From business insights to guest experience, everything is
            crafted to look attractive, feel intuitive, and perform powerfully.
          </p>

          <ul className="checklist">
            <li> With our Technological and Marketing Solutions</li>
            <li> Trusted by hotels worldwide</li>
            <li> Start Your 14 Days Free Trial Today!</li>
          </ul>

          <motion.a
            href="#"
            className="cta-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
