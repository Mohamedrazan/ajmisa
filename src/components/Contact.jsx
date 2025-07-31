import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      
      <div className="contact-info">
        <div className="info-box">
          <h2>Address</h2>
          <p>P.O Box 40637<br />Markaz hail, Hail Street, Jeddah 21511, Saudi Arabia</p>
        </div>
        <div className="info-box">
          <h2>Email</h2>
          <p>www.ajmi@ajmisa.com</p>
        </div>
        <div className="info-box">
          <h2>Business Hours</h2>
          <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Friday - closed</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0835100735154!2d-122.41941568468193!3d37.77492927975926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c4f7592cb%3A0x6d0df39b97e3a751!2sIPTV%20Example%20Location!5e0!3m2!1sen!2sin!4v1650000000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
