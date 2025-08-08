import React, { useEffect } from 'react';
import './RequestDemo.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RequestDemo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="request-demo-container">
      <div className="form-wrapper" data-aos="zoom-in">
        <h2>Request a Demo</h2>
        <p>Experience how Macvision's IPTV Hospitality Solution can transform your guest experience.</p>

        <form className="demo-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Hotel / Property Name" />
          <input type="number" placeholder="Number of Rooms" />
          <textarea placeholder="Your Message / Requirements" rows="4"></textarea>

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
