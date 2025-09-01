import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';   
import './RequestDemo.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiArrowLeft } from "react-icons/fi";

const RequestDemo = () => {
  const navigate = useNavigate();   

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="request-demo-container">
      {/* Back Button (Top Left) */}
      <button className="back-btn" onClick={() => navigate(-1)}> 
        <FiArrowLeft /> Back
      </button>

      <div className="form-wrapper" data-aos="zoom-in">
        <h2>Request a Demo</h2>
        <p>
          Experience how Macvision's IPTV Hospitality Solution can transform your guest experience.
        </p>

        <form className="demo-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Hotel / Property Name" />
          <input type="number" placeholder="Number of Rooms and Users" />
          <input type="number" placeholder="Number of Facilities" />
          <input type="number" placeholder="Number of TV Channels" />

          <textarea placeholder="Your Message / Requirements" rows="4"></textarea>

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
