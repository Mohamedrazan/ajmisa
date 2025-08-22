import React from "react";
import { motion } from "framer-motion";
import "./IPTVDetails.css";

const parts = [
  { id: "satellite", img: "./satellite.png", text: "SATELLITE TV", className: "satellite" },
  { id: "panel", img: "/panel.png", text: "MULTI-SWITCH", className: "panel" },
  { id: "server", img: "/server.png", text: "MACVISION SERVER", className: "server" },
  { id: "switch", img: "/switch.png", text: "NETWORK SWITCH", className: "switch" },
  { id: "backend", img: "./dashboard.png", text: "BACKEND", className: "backend" },
  { id: "frontend", img: "./maintvwatch.png", text: "FRONTEND", className: "frontend" },
];

const IPTVDetails = () => {
  return (
    <div className="diagram-container">
      {/* Logo */}
      <div className="logo-space">
        <img src="/logo.png" alt="logo" />
      </div>

      {/* Parts */}
      {parts.map((part, index) => (
        <motion.div
          key={part.id}
          className={`part ${part.className}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 1, duration: 0.8 }}
        >
          <motion.img
            src={part.img}
            alt={part.text}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 1, duration: 0.8 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 1 + 0.4, duration: 0.6 }}
          >
            {part.text}
          </motion.p>
        </motion.div>
      ))}

      {/* Connecting Lines with slim arrowheads */}
      <svg className="lines">
        <defs>
          <marker
            id="arrow"
            markerWidth="12"
            markerHeight="12"
            refX="11"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L10,3 L0,6" fill="none" stroke="#000" strokeWidth="1.5" />
          </marker>
        </defs>

        {/* satellite → panel */}
        <motion.line
          x1="20%" y1="12%" x2="28%" y2="38%"
          className="line"
          markerEnd="url(#arrow)"
          initial={{ strokeDashoffset: 250 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ delay: 2, duration: 1 }}
        />
        {/* panel → server */}
        <motion.line
          x1="32%" y1="45%" x2="50%" y2="50%"
          className="line"
          markerEnd="url(#arrow)"
          initial={{ strokeDashoffset: 250 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ delay: 3, duration: 1 }}
        />
        {/* server → switch */}
        <motion.line
          x1="50%" y1="55%" x2="50%" y2="80%"
          className="line"
          markerEnd="url(#arrow)"
          initial={{ strokeDashoffset: 250 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ delay: 4, duration: 1 }}
        />
        {/* server → backend */}
        <motion.line
          x1="55%" y1="50%" x2="78%" y2="28%"
          className="line"
          markerEnd="url(#arrow)"
          initial={{ strokeDashoffset: 250 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ delay: 5, duration: 1 }}
        />
        {/* switch → frontend */}
        <motion.line
          x1="50%" y1="82%" x2="78%" y2="82%"
          className="line"
          markerEnd="url(#arrow)"
          initial={{ strokeDashoffset: 250 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ delay: 6, duration: 1 }}
        />
      </svg>
    </div>
  );
};

export default IPTVDetails;
