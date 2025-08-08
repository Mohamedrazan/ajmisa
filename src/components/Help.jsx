import React, { useEffect } from 'react';
import './Help.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Help = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="iptv-container">
            <section className="custom-solution" data-aos="fade-up">
                <h2>Need a Custom Solution?</h2>
                <p>Explore tailored IPTV Hospitality solutions to enhance guest experience, drive revenue, and modernize room entertainment.</p>
                <Link to="/request-demo" className="demo-button">Request Demo</Link>
            </section>

            <section className="our-solutions" data-aos="fade-up">
                <h2>Our Solutions</h2>
                <p>From OTT streaming, live TV, room service integration, to no-STB smart TV platforms – we deliver everything in one interface.</p>
                <div className="subscribe-container">
                    <input type="email" placeholder="Enter your email" />
                    <button className="subscribe-button">Subscribe</button>
                </div>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </section>
        </div>
    );
};

export default Help;
