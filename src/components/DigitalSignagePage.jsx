import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import "./DigitalSignagePage.css";
// import signageImage from "../assets/dgbg2.avif"; // Replace with your landscape image path

const features = [
  {
    // icon: "🖥️",
    title: "Effortless Content Updates",
    desc: "Manage your screens with ease using our intuitive cloud dashboard."
  },
  {
    // icon: "🌍",
    title: "Wide Screen Synchronization",
    desc: "Keep your messaging consistent across all locations with synchronized displays."
  },
  {
    // icon: "🎯",
    title: "Targeted Guest Messaging",
    desc: "Show the right message at the right place and time to boost engagement."
  },
  {
    // icon: "📅",
    title: "Event & Direction Displays",
    desc: "Guide your guests with clear event boards and interactive wayfinding."
  },
  {
    // icon: "☁️",
    title: "Cloud Based & Scalable",
    desc: "Easily scale from single to multiple locations with our flexible platform."
  },
  {
    // icon: "🌿",
    title: "Eco-Friendly & Cost Saving",
    desc: "Reduce paper waste and save money with instant digital updates."
  },
];

const DigitalSignagePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="ds2-section">

      {/* Hero Image */}
      <div className="ds2-hero" data-aos="zoom-in">
        {/* <img src={signageImage} alt="Digital Signage Banner" /> */}
        <div className="ds2-hero-overlay">
          <h1>Digital Signage for Modern Hospitality</h1>
          <p>Engage, inform, and inspire your guests with stunning digital displays.</p>
        </div>
      </div>

      {/* Intro Text */}
      <div className="ds2-intro" data-aos="fade-up">
        <p>
          Digital signage turns your hotel into a lively, interactive space that delights guests and boosts your brand. Whether it’s a warm welcome in the lobby or dynamic menus in your restaurant, our solution fits perfectly.
        </p>
      </div>

      {/* Features Row */}
      <div className="ds2-features" data-aos="fade-up" data-aos-delay="200">
        {features.map(({ icon, title, desc }, i) => (
          <div key={i} className="ds2-feature" data-aos="flip-up" data-aos-delay={i * 150}>
            <div className="ds2-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      {/* Detailed Sections */}
      <div className="ds2-detail-section light-bg" data-aos="fade-right">
        <h2>Why Choose Digital Signage?</h2>
        <p>
          It’s more than just screens — it’s about creating an experience. You can instantly update content, promote events, and provide directions, all while reducing paper waste and cutting costs. Plus, you’ll impress guests with a high-tech, sleek atmosphere.
        </p>
      </div>

      <div className="ds2-detail-section dark-bg" data-aos="fade-left">
        <h2>Seamless Management</h2>
        <p>
          Our cloud-based platform lets you control your entire signage network remotely. Add new screens, schedule content, and monitor performance effortlessly — no tech headaches.
        </p>
      </div>

      <div className="ds2-detail-section light-bg" data-aos="fade-right">
        <h2>Built for Growth</h2>
        <p>
          Whether you have one property or many, scale with confidence. Digital signage grows as your business grows — all while keeping your guests informed and engaged.
        </p>
      </div>

      {/* Call to Action */}
      <div className="ds2-cta" data-aos="zoom-in" data-aos-delay="400">
        <p>Excited to elevate your guest experience? Let’s get started with our digital signage solutions today!</p>
        <button className="ds2-btn" onClick={() => navigate("/contact")}>Contact Us</button>
      </div>

    </section>
  );
};

export default DigitalSignagePage;
