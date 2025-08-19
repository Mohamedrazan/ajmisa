import React, { useEffect, useRef, useState } from 'react';
import {
  FaMobileAlt,
  FaReact,
  FaApple,
  FaAndroid,
  FaCloud,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import "./MobileAppDevelopment.css";

export default function MobileAppDevelopment() {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  // Scroll animation using IntersectionObserver
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
    <section 
      className={`mad-section ${visible ? "fade-in" : "fade-out"}`}
      ref={sectionRef}
    >
      {/* Hero Section */}
      <div className="mad-hero">
        <img
          src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
          alt="Mobile App Development"
        />
        <div className="mad-hero-overlay">
          <h1>Mobile App Development</h1>
          <p>
            Building innovative, secure, and scalable mobile solutions for iOS,
            Android, and beyond.
          </p>
        </div>
      </div>

      {/* Intro */}
      <p className="mad-intro">
        Our mobile app development services empower businesses to transform
        ideas into engaging, user-friendly applications. From startups to
        enterprises, we deliver apps that combine cutting-edge technology with
        seamless user experiences.
      </p>

      {/* Features */}
      <div className="mad-features">
        <div className="mad-feature">
          <FaReact className="mad-icon" />
          <h3>Cross-Platform</h3>
          <p>React Native & Flutter apps that work smoothly on iOS & Android.</p>
        </div>
        <div className="mad-feature">
          <FaApple className="mad-icon" />
          <h3>iOS Development</h3>
          <p>Native iOS apps optimized for performance, speed, and security.</p>
        </div>
        <div className="mad-feature">
          <FaAndroid className="mad-icon" />
          <h3>Android Development</h3>
          <p>Custom Android apps tailored for diverse devices and use cases.</p>
        </div>
        <div className="mad-feature">
          <FaShieldAlt className="mad-icon" />
          <h3>Secure by Design</h3>
          <p>Data protection and compliance built into every app we create.</p>
        </div>
      </div>

      {/* Development Process */}
      <div className="mad-detail-section light-bg">
        <h2>Our Development Process</h2>
        <ul>
          <li><strong>1. Discovery:</strong> Understand goals, users, and challenges.</li>
          <li><strong>2. Design:</strong> UI/UX prototypes with pixel-perfect visuals.</li>
          <li><strong>3. Development:</strong> Agile coding with regular updates.</li>
          <li><strong>4. Testing:</strong> QA and performance checks for flawless apps.</li>
          <li><strong>5. Launch & Support:</strong> Deploy apps and provide long-term support.</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="mad-detail-section dark-bg">
        <h2>Why Choose Us?</h2>
        <p>
          We combine innovation with expertise to craft apps that drive business
          growth. Whether it’s an enterprise solution or a startup MVP, we
          ensure performance, scalability, and user satisfaction.
        </p>
        <div className="mad-benefits">
          <div><FaRocket /> Faster time-to-market</div>
          <div><FaCloud /> Cloud integration</div>
          <div><FaMobileAlt /> Responsive UI/UX</div>
        </div>
      </div>

      {/* CTA */}
      <div className="mad-cta">
        <h2>Ready to Build Your App?</h2>
        <p>
          Let’s collaborate to create a mobile solution that transforms your
          business.
        </p>
        <button className="mad-btn">Get Started</button>
      </div>
    </section>
  );
}
