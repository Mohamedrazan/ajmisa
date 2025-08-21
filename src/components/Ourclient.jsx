import React, { useState } from 'react';
import './Ourclient.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';

const clients = [
    {
        name: 'Hilton Hotels',
        logo: './hitlton.jpg',
        review: '“Excellent integration and top-tier service experience.”',
        description: 'Hilton uses our IPTV to deliver premium in-room entertainment across multiple locations.'
    },
    {
        name: 'Marriott',
        logo: './marriott.jpg',
        review: '“A seamless and stylish solution for our guests.”',
        description: 'Marriott properties use our IPTV platform for streamlined access to services and media.'
    },
    {
        name: 'Hyatt Regency',
        logo: './hyatt.jpg',
        review: '“Reliable and modern, exactly what we needed.”',
        description: 'Hyatt offers guests a rich media experience powered by our IPTV system.'
    },
    {
        name: 'Taj Hotels',
        logo: './taj1.jpg',
        review: '“Effortless deployment and beautiful UI.”',
        description: 'Taj Hotels upgraded their guest experience with our custom IPTV deployment.'
    },
    {
        name: 'Radisson Blu',
        logo: './radisson.jpg',
        review: '“Responsive support and great features.”',
        description: 'Radisson Blu delivers HD IPTV services through our technology across all rooms.'
    },
    {
        name: 'The Oberoi',
        logo: './oberoi.jpg',
        review: '“Truly elevated our hospitality offering.”',
        description: 'Oberoi hotels enjoy seamless IPTV integration with multi-language support.'
    },
    {
        name: 'InterContinental Doha The City',
        logo: './inter.jpg',
        review: '“Top-tier IPTV experience that impressed every guest.”',
        description: 'InterContinental Doha leverages our IPTV platform to provide world-class entertainment and services.'
    },
    {
        name: 'Four Seasons Hotel Riyadh',
        logo: './four.jpg',
        review: '“Exceptional clarity and user-friendly interface.”',
        description: 'Four Seasons offers guests a premium IPTV experience with personalized content and real-time hotel services.'
    }
];

const navLinks = [
    { label: "Products", path: "/products" },
    { label: "Our Services", path: "/services" },
    { label: "Our Client", path: "/client" },
    { label: "Certificates", path: "/certificates" },
    { label: "Contact Us", path: "/contact" }
];
  export default function Ourclient() {
  const [menuOpen, setMenuOpen] = useState(false);
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
            {/* Clients Section with animation */}
            <motion.section
                className="clients-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <div className="clients-container">
                    <h2 className="clients-title">Our Esteemed Clients</h2>
                    <p className="clients-subtitle">
                        Trusted by leading hotels around the globe for IPTV Hospitality Solutions
                    </p>
                    <div className="clients-grid">
                        {clients.map((client, index) => (
                            <motion.div
                                className="client-card"
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                            >
                                <img src={client.logo} alt={client.name} className="client-logo" />
                                <h3>{client.name}</h3>
                                <p className="client-review">⭐ {client.review}</p>
                                <p className="client-description">{client.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

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

