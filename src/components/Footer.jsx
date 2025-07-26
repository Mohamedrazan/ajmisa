import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';

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
                        img: '/support-icon.png',
                        title: '24/7 Support',
                        desc: 'Our team is here for you anytime, anywhere.'
                    }
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
                    <h3>Stay Updated</h3>
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
                        <img src="/paypal.png" alt="PayPal" />
                        <img src="/visa.png" alt="Visa" />
                        <img src="/mastercard.png" alt="MasterCard" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
