// AnalyticsPage.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AnalyticsPage.css";
import analyticsImage from "../assets/analytic.jpg"; 

const AnalyticsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="analytics-section">
      <div className="analytics-container">

        {/* Text Content */}
        <div className="analytics-text" data-aos="fade-right">
          <h1 className="analytics-title">IPTV Analytics Solutions</h1>
          <p className="analytics-subtitle">
            Unlock powerful insights from your IPTV system to elevate guest experiences and optimize hotel operations.
          </p>

          <p className="analytics-description" data-aos="fade-up" data-aos-delay="200">
            Our advanced analytics platform collects detailed data on guest viewing habits, content preferences, and system performance — all in real time. This intelligence helps you tailor entertainment, optimize content offerings, and ensure your IPTV system runs smoothly.
          </p>

          <p className="analytics-description" data-aos="fade-up" data-aos-delay="300">
            With customizable dashboards, you can monitor key metrics such as popular channels, peak usage times, and device performance. Automated alerts keep you ahead of issues, minimizing downtime and enhancing guest satisfaction.
          </p>

          <ul className="analytics-features">
            <li data-aos="zoom-in"> Real-Time Data Monitoring and Visualization</li>
            <li data-aos="zoom-in" data-aos-delay="100"> Deep Insights into Content Popularity and Guest Preferences</li>
            <li data-aos="zoom-in" data-aos-delay="200"> Customizable Reports to Track KPIs and Trends</li>
            <li data-aos="zoom-in" data-aos-delay="300"> Proactive System Health Monitoring</li>
            <li data-aos="zoom-in" data-aos-delay="400"> Automated Alerts for Maintenance & Updates</li>
            <li data-aos="zoom-in" data-aos-delay="500"> Data-Driven Strategies to Boost Revenue and Engagement</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="analytics-image" data-aos="fade-left">
          <img
            src={analyticsImage}
            alt="IPTV Analytics Illustration"
            className="analytics-img"
          />
        </div>
      </div>

      {/* Additional Info */}
      <div className="analytics-extra">
        <div className="extra-box" data-aos="fade-up">
          <h2>Why Analytics Matter</h2>
          <p>
            Data empowers your hotel to deliver personalized experiences by understanding what guests want to watch, when, and how. Analytics transform IPTV from just entertainment into a powerful business tool.
          </p>
        </div>

        <div className="extra-box" data-aos="fade-up" data-aos-delay="200">
          <h2>Improve Guest Satisfaction</h2>
          <p>
            By analyzing viewing habits and preferences, you can offer tailored recommendations, optimize content libraries, and enhance user interfaces — making every guest stay memorable.
          </p>
        </div>

        <div className="extra-box" data-aos="fade-up" data-aos-delay="400">
          <h2>Operational Excellence</h2>
          <p>
            Monitor system performance proactively, reduce technical issues, and plan maintenance effectively with detailed usage and health metrics — saving time and cost.
          </p>
        </div>

        {/* <div className="extra-box" data-aos="fade-up" data-aos-delay="600">
          <h2>Boost Marketing & Revenue</h2>
          <p>
            Leverage analytics to identify upselling opportunities, target promotions, and maximize ROI from your IPTV platform — turning data into dollars.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default AnalyticsPage;
