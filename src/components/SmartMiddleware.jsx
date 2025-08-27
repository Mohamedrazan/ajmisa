import React from "react";
import "./SmartMiddleware.css";
import { motion } from "framer-motion";
import { FaTv, FaUsers, FaCloud, FaServer } from "react-icons/fa";

const SmartMiddleware = () => {
  const items = [
    {
      title: "Content Management System (CMS)",
      desc: "Manage live TV channels, VOD, series EPG (Electronic Program Guide), and metadata. Handles encoding, transcoding, and catalog organization.",
      icon: <FaTv />,
    },
    {
      title: "Subscriber & User Management (CRM/Billing System)",
      desc: "Manages user accounts, authentication, subscriptions, billing, and entitlements. Includes prepaid/postpaid models, pay-per-view, and promotions.",
      icon: <FaUsers />,
    },
    {
      title: "Streaming & Delivery Layer",
      desc: "Ensures video content is delivered with low latency and adaptive quality. Uses CDN and streaming protocols (HLS, MPEG-DASH, RTMP).",
      icon: <FaCloud />,
    },
    {
      title: "Middleware Core / API Layer",
      desc: "The “brain” that connects content, users, devices, and monetization. Provides APIs for apps and manages DRM, session control, analytics.",
      icon: <FaServer />,
    },
  ];

  return (
    <section className="middleware-wrapper">
      {/* Background Shapes */}
      <div className="background-overlay"></div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>

      {/* Header */}
      <motion.div
        className="middleware-header"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>🚀 Smart Middleware</h2>
        <p>Seamlessly Manage Content, Users, and Devices</p>
      </motion.div>

      {/* Timeline */}
      <div className="middleware-timeline">
        {items.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker">{item.icon}</div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SmartMiddleware;
