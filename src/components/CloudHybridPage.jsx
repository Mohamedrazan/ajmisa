import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CloudHybridPage.css";
import cloudImage from "../assets/cloud.jpg";

const CloudHybridPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="cloud-section">
      <div className="cloud-container">
        {/* Text Content */}
        <div className="cloud-text" data-aos="fade-right">
          <h1 className="cloud-title">Cloud & Hybrid IPTV Solutions</h1>
          <p className="cloud-subtitle">
            Flexible IPTV deployment tailored to your hotel’s infrastructure and needs.
          </p>

          <p className="cloud-description" data-aos="fade-up" data-aos-delay="150">
            Whether you prefer the scalability and ease of cloud hosting or the control of on-premise infrastructure, our hybrid IPTV solutions offer the best of both worlds.
          </p>

          <p className="cloud-description" data-aos="fade-up" data-aos-delay="300">
            Deploy content quickly, manage multiple locations seamlessly, and adapt your system as your hotel grows — all with secure and reliable IPTV delivery.
          </p>

          <ul className="cloud-features">
            <li data-aos="zoom-in"> Scalable Cloud Hosting for Easy Expansion</li>
            <li data-aos="zoom-in" data-aos-delay="100"> Secure On-Premise Control & Privacy</li>
            <li data-aos="zoom-in" data-aos-delay="200"> Seamless Hybrid Deployment Options</li>
            <li data-aos="zoom-in" data-aos-delay="300"> Centralized Management Dashboard</li>
            <li data-aos="zoom-in" data-aos-delay="400"> Flexible Integration with Existing Systems</li>
            <li data-aos="zoom-in" data-aos-delay="500"> Fast Content Delivery & Updates</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="cloud-image" data-aos="fade-left">
         
        
          <img src={cloudImage} alt="Cloud Hybrid IPTV" className="cloud-img" />
          
        </div>
      </div>

      {/* Extra Info */}
      <div className="cloud-extra">
        <div className="extra-box" data-aos="fade-up">
          <h2>Why Cloud & Hybrid?</h2>
          <p>
            Cloud and hybrid IPTV systems offer unmatched flexibility. Cloud hosting reduces infrastructure costs while hybrid solutions allow you to keep sensitive data onsite.
          </p>
        </div>

        <div className="extra-box" data-aos="fade-up" data-aos-delay="200">
          <h2>Operational Efficiency</h2>
          <p>
            Manage your entire IPTV network from a single dashboard, deploy updates remotely, and monitor performance with ease — no matter where your properties are located.
          </p>
        </div>

        <div className="extra-box" data-aos="fade-up" data-aos-delay="400">
          <h2>Security & Reliability</h2>
          <p>
            Benefit from secure encrypted streams, regular backups, and failover support to ensure your guests always enjoy uninterrupted service.
          </p>
        </div>

        {/* <div className="extra-box" data-aos="fade-up" data-aos-delay="600">
          <h2>Future-Proof Your Hotel</h2>
          <p>
            Easily adapt to new technologies and expand your IPTV offerings with a system designed to grow with your business.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default CloudHybridPage;
