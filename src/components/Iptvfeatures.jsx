import React from 'react';
import { FaTv, FaBell, FaFileVideo, FaComments, FaShareAlt, FaKeyboard } from 'react-icons/fa';
import './Iptvfeatures.css';

const Iptvfeatures = () => {
  return (
    <section className="iptv-section">
      <div className="iptv-heading">
        <span className="badge">Why Choose IPTV 🔥</span>
        <h2>Our IPTV Service Is Perfect For Families, Businesses & Travelers</h2>
      </div>

      <div className="iptv-wrapper">
        <div className="feature-left">
          <Feature icon={<FaTv />} title="Ultra HD Streaming" desc="Enjoy 4K and Full HD live channels anytime." />
          <Feature icon={<FaBell />} title="Smart Notifications" desc="Get alerts for new episodes and matches." />
          <Feature icon={<FaFileVideo />} title="Video Recording" desc="Record and rewatch your favorite shows." />
        </div>
        
        <div className="feature-center">
          <div className="circle-image">
            <img src="./iptv4.jpg" alt="IPTV Box" />
          </div>
        </div>
       
        <div className="feature-right">
          <Feature icon={<FaComments />} title="Live Chat Support" desc="24/7 support via chat & WhatsApp." />
          <Feature icon={<FaShareAlt />} title="Multi-Device Access" desc="Stream on smart TVs, mobiles, tablets." />
          <Feature icon={<FaKeyboard />} title="Remote Customization" desc="Create shortcuts with your own remote." />
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="iptv-feature">
    <div className="icon">{icon}</div>
    <div className="text">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

export default Iptvfeatures;
