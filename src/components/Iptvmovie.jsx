import React, { useState } from 'react';
import './Iptvmovie.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';

import movie1 from '../assets/movie1.jpg';
import movie2 from '../assets/movie2.jpg';
import movie3 from '../assets/movie3.jpg';
import movie4 from '../assets/movie4.jpg';
import movie5 from '../assets/movie5.jpg';
import movie6 from '../assets/movie6.jpg';
import movie7 from '../assets/movie7.jpg';
import movie8 from '../assets/movie8.jpg';
import movie9 from '../assets/movie9.jpg';
import movie10 from '../assets/movie10.jpg';
import movie11 from '../assets/movie11.jpg';
import movie12 from '../assets/movie12.jpg';
import movie13 from '../assets/movie13.jpg';
import movie14 from '../assets/movie14.jpg';

const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" }
];

const movieData = [
  { id: 1, title: "The Grand Adventure", image: movie1 },
  { id: 2, title: "Ocean's Whisper", image: movie2 },
  { id: 3, title: "Silent Code", image: movie3 },
  { id: 4, title: "Future Frontline", image: movie4 },
  { id: 5, title: "Neon Skies", image: movie5 },
  { id: 6, title: "Empire's Echo", image: movie6 },
  { id: 7, title: "Future Frontline", image: movie7 },
  { id: 8, title: "The Grand Adventure", image: movie8 },
  { id: 9, title: "Ocean's Whisper", image: movie9 },
  { id: 10, title: "Silent Code", image: movie10 },
  { id: 11, title: "Future Frontline", image: movie11 },
  { id: 12, title: "Neon Skies", image: movie12 },
  { id: 13, title: "Empire's Echo", image: movie13 },
  { id: 14, title: "Future Frontline", image: movie14 },
];

const Iptvmovie = () => {
  const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <div className="movie-page">
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

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Ultimate Movie Experience for Hotels</h1>
        <p className="hero-subtitle">Deliver premium movie content to your guests with our IPTV hospitality solutions</p>
        <button className="cta-btn">Explore Now</button>
      </section>

      {/* Movie Cards Section */}
      <section className="movie-cards">
        {movieData.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className="movie-thumbnail">
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>HD | Action | 120 mins</p>
            </div>
          </div>
        ))}
      </section>

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
    </div>
  );
};

export default Iptvmovie;
