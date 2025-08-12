import React, { useEffect } from "react";
import "./Contactpromo.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contactpromo() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 1s animation, plays once
  }, []);

  return (
    <section className="contact-promo">
      <div className="promo-left" data-aos="fade-right">
        <img src="./iptvhotel.jpg" alt="Promo Visual" className="promo-img" />
      </div>
      <div className="promo-right" data-aos="fade-left">
        <h1 className="headline">
          Ready to Upgrade <br /> Your IPTV Hospitality Technology?
        </h1>
        <p className="subtext" style={{ color: "#333" }}>
          Contact us today to learn more and schedule a free consultation! <br />
          Enhance guest satisfaction, increase engagement, and modernize your entertainment experience.
        </p>
        <div className="cta-buttons" data-aos="zoom-in" data-aos-delay="300">
          <Link to="/contact" className="btn contact">
            Contact Information
          </Link>
          <Link to="/contact-us" className="btn call">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
