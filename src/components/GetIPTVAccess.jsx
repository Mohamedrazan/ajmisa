import React, { useEffect, useState } from "react";
import "./GetIPTVAccess.css";

const GetIPTVAccess = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`iptv-access-wrapper ${visible ? "show" : ""}`}>
      <div className="iptv-access-container">
        <h1 className="access-title">Get My IPTV Access Now</h1>
        <p className="access-description">
          Experience the future of in-room entertainment with our IPTV Hospitality Solutions.  
          Enjoy crystal-clear HD channels, on-demand content, and seamless integration  
          right at your fingertips.
        </p>

        <div className="access-features">
          <div className="feature-card">
            <h3> HD Quality</h3>
            <p>Enjoy premium HD streaming for a cinematic experience.</p>
          </div>
          <div className="feature-card">
            <h3> Fast Setup</h3>
            <p>Get access in minutes with our quick activation process.</p>
          </div>
          <div className="feature-card">
            <h3> Personalized</h3>
            <p>Tailored channels and content for your guests.</p>
          </div>
        </div>

        <button className="access-btn">Request Access</button>
      </div>
    </div>
  );
};

export default GetIPTVAccess;
