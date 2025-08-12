import React from "react";
import "./ContactUs.css";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </motion.div>
  );
};

export default ContactUs;
