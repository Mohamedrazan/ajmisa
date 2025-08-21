import React from "react";
import "./SmartMiddleware.css";
import { motion } from "framer-motion";

const SmartMiddleware = () => {
  const items = [
    {
      id: "01",
      title: "Content Management System (CMS)",
      desc: "Manage live TV channels, VOD, series EPG (Electronic Program Guide), and metadata. Handles encoding, transcoding, and catalog organization.",
    },
    {
      id: "02",
      title: "Subscriber & User Management (CRM/Billing System)",
      desc: "Manages user accounts, authentication, subscriptions, billing, and entitlements. Includes prepaid/postpaid models, pay-per-view, and promotions. Example tech: OSS/BSS integration, Magento (e-commerce base), custom billing APIs.",
    },
    {
      id: "03",
      title: "Streaming & Delivery Layer",
      desc: "Ensures video content is delivered with low latency and adaptive quality. Uses CDN (Content Delivery Network) and streaming protocols (HLS, MPEG-DASH, RTMP). Example tech: NGINX with RTMP module, Akamai/Cloudflare CDN, Wowza/Red5 servers.",
    },
    {
      id: "04",
      title: "Middleware Core / API Layer",
      desc: "The “brain” that connects content, users, devices, and monetization. Provides APIs for apps (mobile, smart TV, web, STB). Manages security (DRM), session control, analytics, and multi-device sync. Example tech: Node.js / Java Spring Boot APIs, REST/GraphQL, Widevine/PlayReady DRM.",
    },
  ];

  return (
    <section className="middleware-wrapper">
      {/* Decorative blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* Header */}
      <motion.div
        className="middleware-header"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Smart Middleware</h2>
        <p>Manage Every Screen with Ease</p>
      </motion.div>

      {/* Timeline */}
      <div className="middleware-timeline">
        {items.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker">{item.id}</div>
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
