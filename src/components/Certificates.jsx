import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import cert1 from '../assets/certificate_1.jpg';
import cert2 from '../assets/certificate_2.jpg';
import cert3 from '../assets/certificate_3.jpg';
import cert4 from '../assets/certificate_4.jpg';

import './Certificates.css';

const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" }
];

const Certificates = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imgSrc) => setLightboxImage(imgSrc);
  const closeLightbox = () => setLightboxImage(null);

  const certificates = [
    { id: 1, src: cert1, alt: 'Certificate 1' },
    { id: 2, src: cert2, alt: 'Certificate 2' },
    { id: 3, src: cert3, alt: 'Certificate 3' },
    { id: 4, src: cert4, alt: 'Certificate 4' },
  ];

  return (
    <>
      {/* Navbar */}
            <div className="iptv-navbar iptv-animate-navbar">
              <img src="./macvisionmainlogo.png" alt="Logo" className="iptv-logo-image" />
              <div className="iptv-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
              </div>
              <div className={`iptv-nav-links ${menuOpen ? "open" : ""}`}>
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    className="iptv-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

      {/* Certificates Section */}
      <div className="cert-section">
        <h1 className="section-title">Certificates of Appreciation</h1>

        <div className="cert-grid">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="cert-card"
              onClick={() => openLightbox(cert.src)}
            >
              <img src={cert.src} alt={cert.alt} className="cert-img" />
            </div>
          ))}
        </div>

        {lightboxImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <span className="close">&times;</span>
            <img className="lightbox-content" src={lightboxImage} alt="Zoomed Certificate" />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="logo-heading">
              <img src="./ajmisalogo.png" alt="Logo" className="logo-img" />
            </h2>
            <br /><br />
            <address>
              P.O Box 40637,<br />
              Markaz Hail, Hail Street<br />
              Jeddah 21511, Saudi Arabia<br />
              Tel: +966 553011362<br />
              Email: www.ajmi@ajmisa.com<br />
              Hours: Mon-Sat 9am-6pm, Friday Closed
            </address>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Menu</h4>
              <ul>
                <li>How it works</li>
                <li>Refund Policy</li>
                <li>New Products</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Customer Support</h4>
              <ul>
                <li>My Account</li>
                <li>Track Order</li>
                <li>Returns/Exchange</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <h4>Contact</h4>
            <p>Call Us On:</p>
            <p className="hotline">+966 553011362</p>
            <p>Follow Us</p>
            <div className="social-icons">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
            <div className="app-links">
              <a href="#"><SiGoogleplay /> Google Play</a>
              <a href="#"><SiAppstore /> App Store</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 IPTV Live Today. All Rights Reserved.</p>
          <div className="payment-icons">
            <img src={paypal} alt="PayPal" />
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="MasterCard" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Certificates;
