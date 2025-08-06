import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Solutions.css";
import { FaTv, FaPlayCircle, FaLaptop, FaChartLine, FaCloud, FaHeadset } from "react-icons/fa";

const Solutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const solutions = [
    { icon: <FaTv />, title: "IPTV", desc: "Deliver live TV channels and on-demand content" },
    { icon: <FaPlayCircle />, title: "VOD", desc: "Provide users with access to an extensive video library" },
    { icon: <FaLaptop />, title: "Digital Signage", desc: "Manage content across multiple displays" },
    { icon: <FaChartLine />, title: "Analytics", desc: "Gain insights through in-depth data analysis" },
    { icon: <FaCloud />, title: "Cloud/Hybrid", desc: "Deploy solutions in the cloud or hybrid environment" },
    { icon: <FaHeadset />, title: "Support", desc: "Offer 24/7 technical assistance and customer care" },
  ];

  return (
    <section className="solutions-section">
      <h2 className="section-title" data-aos="fade-up">Our Solutions</h2>
      <div className="solutions-grid">
        {solutions.map((sol, index) => (
          <div
            className="solution-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="solution-icon">{sol.icon}</div>
            <h3>{sol.title}</h3>
            <p>{sol.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
