import React from "react";
import "./Channelpage.css";
import { Link } from "react-router-dom";


// Example logos (replace with your own images)
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";
import logo11 from "../assets/logo11.png";
import logo12 from "../assets/logo12.jpg";
import logo13 from "../assets/logo13.jpg";
import logo14 from "../assets/logo14.jpg";
import logo15 from "../assets/logo15.png";
import logo16 from "../assets/logo16.png";
import logo17 from "../assets/logo17.png";
import logo18 from "../assets/logo18.jpg";
import logo19 from "../assets/logo19.jpg";
import logo20 from "../assets/logo20.png";
import Footer from "./Footer";


const freeLogos = [logo1, logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14];
const paidLogos = [logo15, logo16,logo17,logo18,logo19,logo20];

const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" },
];

export default function Channelpage() {
  return (
   <>
    {/* Navbar */}
      <div className="iptv-navbar iptv-animate-navbar">
        <img src="./macvisionmainlogo.png" alt="Logo" className="iptv-logo-image" />
        <div className="iptv-menu-toggle" onClick={() => setMenuOpen(true)}>☰</div>
        <div className="iptv-nav-links-desktop">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="iptv-nav-link">{link.label}</Link>
          ))}
        </div>
      </div>

    <div className="channel-page">
      <h2 className="section-title"> Free Channels</h2>
      <div className="channel-grid">
        {freeLogos.map((logo, index) => (
          <div key={index} className="tv-shape">
            <div className="antenna left"></div>
            <div className="antenna right"></div>
            <div className="tv-screen">
              <img
                src={logo}
                alt={`Free Channel ${index + 1}`}
                className="channel-logo"
              />
            </div>
            <div className="tv-knobs">
              <span></span>
              <span></span>
            </div>
            <div className="tv-stand"></div>
          </div>
        ))}
      </div>

      <h2 className="section-title"> Paid Channels</h2>
      <div className="channel-grid">
        {paidLogos.map((logo, index) => (
          <div key={index} className="tv-shape paid">
            <div className="antenna left"></div>
            <div className="antenna right"></div>
            <div className="tv-screen">
              <img
                src={logo}
                alt={`Paid Channel ${index + 1}`}
                className="channel-logo"
              />
            </div>
            <div className="tv-knobs">
              <span></span>
              <span></span>
            </div>
            <div className="tv-stand"></div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
   </>
  );
}
