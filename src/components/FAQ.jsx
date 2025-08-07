import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    question: "What is an IPTV hospitality solution?",
    answer: "IPTV (Internet Protocol Television) is a digital TV solution that delivers content over the internet to hotel guest rooms, offering a modern, interactive experience.",
  },
  {
    question: " How is IPTV different from traditional cable TV in hotels?",
    answer: "Unlike cable, IPTV uses the hotel’s internet network to deliver high-quality video, interactive services,and custom branding options.",
  },
  {
    question: " What are the key benefits of using IPTV in hospitality? ",
    answer: "Benefits include HD channels, on-demand content, multi-language support, interactive menus, and integration with hotel services like room service or housekeeping.",
  },
  {
    question: "Is IPTV legal and safe to use in hotels? ",
    answer: "Yes, when using licensed content and authorized providers, IPTV is completely legal and secure.",
  },
  {
    question: " Can IPTV be integrated into existing hotel infrastructure? ",
    answer: "Yes, most IPTV systems can be integrated with existing LAN/Wi-Fi networks and TVs, minimizing infrastructure costs. ",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="faq-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{faq.question}</span>
              <FaChevronDown
                className={`chevron-icon ${
                  openIndex === index ? "rotated" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <motion.div
                className="faq-answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQ;
