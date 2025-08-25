import React from "react";
import { motion } from "framer-motion";
import "./QuotePage.css";

export default function QuotePage() {
  return (
    <motion.div
      className="quote-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="quote-hero">
        <h1>Request a Quote</h1>
        <p>
          Let’s create the perfect IPTV Hospitality Solution for your hotel. Fill
          in the details below and we’ll get back to you with a tailored plan.
        </p>
      </div>

      <motion.form
        className="quote-form"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Hotel Name</label>
          <input type="text" placeholder="Enter hotel name" />
        </div>

        <div className="form-group">
          <label>Number of Rooms</label>
          <input type="number" placeholder="e.g. 100" />
        </div>

        <div className="form-group">
          <label>Services Interested</label>
          <select>
            <option>IPTV Setup</option>
            <option>Hotel Info Channel</option>
            <option>Room Service Integration</option>
            <option>All Services</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="4" placeholder="Additional details"></textarea>
        </div>

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get My Quote
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
