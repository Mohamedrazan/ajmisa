import React from 'react';
import './IPTVDetails.css';

const IPTVDetails = () => {
  return (
    
    <div className="iptv-details-wrapper">
      {/* Header Section */}
      <header className="iptv-details-header">
        <h1>IPTV Hospitality Solution</h1>
        <p>Smart In-Room Technology for Modern Hotels</p>
      </header>

      {/* Info Boxes */}
      <div className="iptv-grid">
        <section className="iptv-box fade-in">
          <img src="./maintvwatch2.jpg" alt="What is IPTV" className="iptv-card-image" />
          <h2>What is IPTV Hospitality?</h2>
          <p>
            IPTV Hospitality Solutions provide in-room entertainment for guests via smart TVs —
            enabling access to live TV, on-demand movies, hotel services, and local information,
            without any external hardware. It's the future of hotel guest engagement and satisfaction.
          </p>
        </section>

        <section className="iptv-box slide-in-left">
          <img src="./iptv4.jpg" alt="Top Features" className="iptv-card-image" />
          <h2>Top Features</h2>
          <ul>
            <li>Full HD & 4K Streaming</li>
            <li>Custom Hotel Branding</li>
            <li>Interactive Guest Interface</li>
            <li>Smart Room Controls (AC, Lights, etc.)</li>
            <li>Hotel Promotions & Service Booking</li>
          </ul>
        </section>

        <section className="iptv-box slide-in-right">
          <img src="./hotelbenefits.jpg" alt="Benefits for Hotels" className="iptv-card-image" />
          <h2>Benefits for Hotels</h2>
          <p>
            Maximize guest satisfaction and increase revenue by promoting services directly through
            the TV interface. Integrated with Property Management Systems (PMS) and supports push
            messaging, upselling, and feedback collection. No printed materials needed.
          </p>
        </section>

        <section className="iptv-box fade-in">
          <img src="./devicecomp.jpg" alt="Device Compatibility" className="iptv-card-image" />
          <h2>Device Compatibility</h2>
          <p>
            Our IPTV system is compatible with all major smart TV platforms: Android TV, LG webOS,
            Samsung Tizen, and custom hospitality displays. No extra hardware or remotes required.
          </p>
        </section>
      </div>
    </div>
  );
};

export default IPTVDetails;
