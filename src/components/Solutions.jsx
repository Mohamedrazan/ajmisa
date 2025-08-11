import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Solutions.css";
import { FaTv, FaPlayCircle, FaLaptop, FaChartLine, FaCloud, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

const Solutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const solutions = [
    { icon: <FaTv />, title: "IPTV", desc: "IPTV streams live and on-demand content over the internet, enhancing in-room entertainment for hotel guests.", link: "/iptv" },
    { icon: <FaPlayCircle />, title: "VOD", desc: "VOD lets guests enjoy movies and shows anytime, providing flexible, personalized entertainment right in their rooms.", link: "/vod" },
    { icon: <FaLaptop />, title: "Digital Signage", desc: "Digital signage transforms hotel spaces with dynamic screens that engage guests and streamline communication.", link: "/digital-signage" },
    { icon: <FaChartLine />, title: "Analytics", desc: "Analytics provides insights from data to help hotels optimize guest experiences and improve business decisions.", link: "/analytics" },
    { icon: <FaCloud />, title: "Cloud/Hybrid", desc: "Cloud/Hybrid solutions offer flexible, scalable IPTV deployment options tailored to hotel needs and infrastructure.", link: "/cloud-hybrid" },
    { icon: <FaHeadset />, title: "Support", desc: "24/7 support ensures uninterrupted IPTV service with expert assistance whenever you need it.", link: "/support" },
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
            <Link to={sol.link} className="solution-btn">Learn More</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
