import React from "react";
import "./Contactpromo.css";

export default function Contactpromo() {
  return (
    <section className="contact-promo">
      <div className="promo-left">
        <img src="./iptvhotel.jpg" alt="Promo Visual" className="promo-img" />
      </div>
      <div className="promo-right">
        <h1 className="headline">
          Ready to Upgrade <br /> Your IPTV Hospitality Technology?
        </h1>
        <p className="subtext" style={{color:"#333"}}>
           Contact us today to learn more and schedule a free consultation! <br />
          Enhance guest satisfaction, increase engagement, and modernize your entertainment experience.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn contact">
            📩 Contact Us
          </a>
          <a href="#call" className="btn call">
            📞 Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
