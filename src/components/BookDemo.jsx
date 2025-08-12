import React from "react";
import "./BookDemo.css";
import { motion } from "framer-motion";

const BookDemo = () => {
  return (
    <div className="book-demo-wrapper">
      <motion.div
        className="book-demo-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="demo-title">Book Your IPTV Demo</h1>
        <p className="demo-description">
          Experience the future of hospitality entertainment with our IPTV solutions.
          Book a personalized demo to see how our platform can enhance your hotel’s guest experience,
          streamline operations, and boost customer satisfaction.
        </p>

        <form className="demo-form">
          <motion.input
            type="text"
            placeholder="Your Name"
            required
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            required
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          />
          <motion.input
            type="text"
            placeholder="Hotel / Business Name"
            required
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          />
          <motion.textarea
            placeholder="Any specific requests or questions?"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          />
          <motion.button
            type="submit"
            className="demo-btn"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            Book My Demo
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default BookDemo;
