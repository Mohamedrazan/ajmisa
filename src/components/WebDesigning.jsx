import React, { useEffect, useRef, useState } from 'react';
import { FaLaptopCode, FaPaintBrush, FaPalette, FaMobileAlt, FaServer, FaRocket } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi"; // Back icon
import { useNavigate } from "react-router-dom";


import "./WebDesigning.css";

export default function WebDesigning() {
    const sectionRef = useRef();
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();


    // Scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* 🔙 Back Button (Fixed to body, top-left of screen) */}
            <button className="mad-back-btn-fixed" onClick={() => navigate(-1)}>
                <FiArrowLeft size={18} /> Back
            </button>

            <section
                className={`webd-section ${visible ? "fade-in" : "fade-out"}`}
                ref={sectionRef}
            >
                {/* Hero Section */}
                <div className="webd-hero">
                    <img
                        // src="https://img.freepik.com/free-vector/web-design-concept-illustration_114360-2111.jpg"
                        src='./webdesigning.jpg'
                        alt="Web Designing"
                    />
                    <div className="webd-hero-overlay">
                        <h1>Web Designing & Development</h1>
                        <p>
                            Crafting visually stunning, responsive, and high-performance websites
                            that drive engagement and business growth.
                        </p>
                    </div>
                </div>

                {/* Intro */}
                <p className="webd-intro">
                    We create websites that are not only visually appealing but also
                    user-friendly, responsive, and optimized for speed. From concept to
                    deployment, our team ensures a seamless digital experience.
                </p>

                {/* Features */}
                <div className="webd-features">
                    <div className="webd-feature">
                        <FaPaintBrush className="webd-icon" />
                        <h3>UI/UX Design</h3>
                        <p>Intuitive and engaging interfaces with a focus on user experience.</p>
                    </div>
                    <div className="webd-feature">
                        <FaLaptopCode className="webd-icon" />
                        <h3>Web Development</h3>
                        <p>Clean, efficient, and scalable code for modern web applications.</p>
                    </div>
                    <div className="webd-feature">
                        <FaMobileAlt className="webd-icon" />
                        <h3>Responsive Design</h3>
                        <p>Websites optimized for all devices including mobile and tablet.</p>
                    </div>
                    <div className="webd-feature">
                        <FaServer className="webd-icon" />
                        <h3>Backend & Database</h3>
                        <p>Robust backend solutions for secure and fast performance.</p>
                    </div>
                    <div className="webd-feature">
                        <FaRocket className="webd-icon" />
                        <h3>SEO & Performance</h3>
                        <p>Optimized for speed, SEO, and better ranking in search engines.</p>
                    </div>
                </div>

                {/* Process */}
                <div className="webd-detail-section light-bg">
                    <h2>Our Web Development Process</h2>
                    <ul>
                        <li><strong>1. Discovery:</strong> Understanding requirements, audience, and goals.</li>
                        <li><strong>2. Design:</strong> Creating wireframes, prototypes, and UI/UX design.</li>
                        <li><strong>3. Development:</strong> Frontend & backend implementation with best practices.</li>
                        <li><strong>4. Testing:</strong> QA, cross-browser testing, and performance optimization.</li>
                        <li><strong>5. Launch & Maintenance:</strong> Deploy, monitor, and provide continuous support.</li>
                    </ul>
                </div>

                {/* Benefits */}
                <div className="webd-detail-section dark-bg">
                    <h2>Why Choose Us?</h2>
                    <p>
                        Our expertise in design and development ensures visually appealing, functional, and
                        scalable websites that enhance user engagement and support business growth.
                    </p>
                    <div className="webd-benefits">
                        <div><FaPalette /> Creative Design</div>
                        <div><FaRocket /> Faster Deployment</div>
                        <div><FaMobileAlt /> Mobile Friendly</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="webd-cta">
                    <h2>Ready to Build Your Website?</h2>
                    <p>
                        Let’s design and develop a website that represents your brand perfectly.
                    </p>
                    <button
                        className="webd-btn"
                        onClick={() => navigate("/contact")} // change "/your-route" to your page path
                    >
                        Contact Us
                    </button>            
                </div>
            </section>
        </>
    );
}
