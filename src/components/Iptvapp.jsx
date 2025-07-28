import React from 'react';
import './Iptvapp.css';
import phone1 from '../assets/iptvapp1.png'; // replace with your image
import phone2 from '../assets/iptvapp2.png';

const Iptvapp = () => {
  return (
    <section className="iptv-section">
      <div className="iptv-text">
        <span className="tag">IPTV Advantage 🔥</span>
        <h2 className="headline">Get Benefit By Using <span>MAHIGO</span></h2>
        <p className="description">
          Enjoy a wide range of IPTV services with high-definition clarity, instant support,
          and a secure streaming experience. Say goodbye to buffering and hello to unlimited entertainment.
        </p>
        <ul className="benefits">
          <li>✔ Friendly UI</li>
          <li>✔ 5000+ Channels</li>
          <li>✔ Instant Setup</li>
          <li>✔ Secure Streaming</li>
        </ul>
        <button className="download-btn">Download App →</button>
      </div>

      <div className="iptv-images">
        <img src={phone1} alt="IPTV App Screen 1" className="phone-img" />
        <img src={phone2} alt="IPTV App Screen 2" className="phone-img" />
      </div>
    </section>
  );
};

export default Iptvapp;
