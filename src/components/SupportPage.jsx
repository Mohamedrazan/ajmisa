import React, { useEffect, useState } from "react";
import "./SupportPage.css";

const SupportPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay for animation
        window.scrollTo(0, 0);

  }, []);

  return (
    <div className={`support-page ${isVisible ? "fade-in" : ""}`}>
      <div className="support-container">
        <h1 className="support-title">Customer Support</h1>
        <p className="support-subtitle">
          Reliable, friendly, and always ready — your IPTV hospitality partner.
        </p>

        <div className="support-content">
          <section>
            <h2>Why Our Support Stands Out</h2>
            <p>
              In the hospitality industry, guest satisfaction is everything. Our
              IPTV support services ensure that your entertainment systems run
              smoothly, minimizing downtime and maximizing guest happiness.
              Whether it’s a quick fix or a complex integration, our team is
              available around the clock to assist you.
            </p>
          </section>

          <section>
            <h2>24/7 Technical Assistance</h2>
            <p>
              We understand that hotels never sleep, and neither do we. Our
              dedicated support team is available 24/7 to help with troubleshooting,
              software updates, or system optimization. From remote diagnostics to
              on-site interventions, we’ve got you covered.
            </p>
          </section>

          <section>
            <h2>Training & Guidance</h2>
            <p>
              Our support isn’t just reactive — we also provide training for your
              staff to operate the IPTV platform efficiently. With step-by-step
              guidance and easy-to-follow manuals, your team can confidently manage
              and personalize the guest experience.
            </p>
          </section>

          <section>
            <h2>Continuous Improvement</h2>
            <p>
              We don’t stop at solving problems — we work with you to enhance your
              system’s performance. Our experts regularly review your IPTV setup,
              applying the latest software updates and adding new features to keep
              your service competitive and engaging.
            </p>
          </section>
        </div>

        {/* <div className="support-footer">
          <p>📞 Need Help? Contact our 24/7 Support Line: +1 (800) 123-4567</p>
          <p>📧 Email: support@iptvhospitality.com</p>
        </div> */}
      </div>
    </div>
  );
};

export default SupportPage;
