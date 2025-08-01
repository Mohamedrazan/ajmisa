// Iptvpromo.jsx

import React from 'react';
import './Iptvpromo.css';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Iptvpromo = () => {
  return (
    <div className="macvision-iptv-wrapper">
      <motion.div 
        className="macvision-iptv-container"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <div className="macvision-iptv-image-section">
          <img src="./tvwatch1.jpg" alt="IPTV Promo" className="macvision-iptv-promo-image" />
        </div>

        <div className="macvision-iptv-text-section">
          <motion.h1 
            className="macvision-iptv-title"
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            BUILD YOUR OWN <br /> 
            <span>IPTV MIDDLEWARE APPLICATION</span>
          </motion.h1>

          <motion.p 
            className="macvision-iptv-description"
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1.2 }}
          >
            Elevate your hospitality or streaming business with a powerful, fully scalable IPTV solution – feature-rich,
            fully customizable, and entirely yours
          </motion.p>

          <motion.div 
            className="macvision-iptv-cta"
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 1.4 }}
          >
            <button className="macvision-iptv-get-started">Get Started</button>
            <div className="macvision-iptv-contact">
              <div className="macvision-iptv-contact-item">
                <FaPhoneAlt className="macvision-iptv-icon" /> 966 553011362
              </div>
              <div className="macvision-iptv-contact-item">
                <FaWhatsapp className="macvision-iptv-icon" /> 966 553011362
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Iptvpromo;
