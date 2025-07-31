import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Needed for <Link>
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';

import './Certificates.css';
import cert1 from '../assets/certificate_1.jpg';
import cert2 from '../assets/certificate_2.jpg';
import cert3 from '../assets/certificate_3.jpg';
import cert4 from '../assets/certificate_4.jpg';

const Certificates = () => {
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
      {/* <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
        </ul>
      </nav> */}

      {/* Certificate Section */}
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
              8724 NW 100th St, Miami Gardens<br />
              FL 33016, USA<br />
              Tel: +1 786-320-6579<br />
              Email: globaliptvworld@gmail.com<br />
              Hours: Mon-Sat 10am-9pm, Sun Closed
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
            <h4>Hotline</h4>
            <p>Call Us Toll-Free</p>
            <p className="hotline">+1 786-320-6570</p>
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
