import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import paypal from '../../public/paypal.png';
import visa from '../../public/visa.png';
import mastercard from '../../public/mastercard.png';

const Footer = () => {
    return (
        <>
            {/* TOP FEATURES */}
            <section className="top-banner">
                {[
                    {
                        img: './icon1.png',
                        title: 'Worldwide Delivery',
                        desc: 'We ship to 195+ countries, all regions.'
                    },
                    {
                        img: './icon2.png',
                        title: 'Express Shipping',
                        desc: 'Fast, reliable delivery to global destinations.'
                    },
                    {
                        img: './icon3.png',
                        title: '24/7 Support',
                        desc: 'Our team is here for you anytime, anywhere.'
                    },
                    {
                        img: './icon1.png',
                        title: 'Worldwide Delivery',
                        desc: 'We ship to 195+ countries, all regions.'
                    },
                    {
                        img: './icon2.png',
                        title: 'Express Shipping',
                        desc: 'Fast, reliable delivery to global destinations.'
                    },
                ].map((feature, index) => (
                    <div className="feature-box" key={index}>
                        <img src={feature.img} alt={feature.title} />
                        <p><strong>{feature.title}</strong><br />{feature.desc}</p>
                    </div>
                ))}
            </section>

            {/* SUBSCRIPTION SECTION */}
            <section className="subscription-section">
                <div className="subscription">
                    <h3>Get Quote now</h3>
                    <p>Subscribe to receive exclusive offers, deals & latest updates.</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Enter your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
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
                            <h4>Company</h4>
                            <ul>
                                <li>About Us</li>
                                <li>Our Partners</li>
                                <li>Careers</li>
                                <li>Contact Support</li>
                            </ul>
                        </div>
                        <div className="link-group">
                            <h4>Support</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Installation Guide</li>
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
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

export default Footer;
