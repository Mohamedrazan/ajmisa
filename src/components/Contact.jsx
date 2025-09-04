import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import { FiArrowLeft, FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Mailto handler (You can replace with EmailJS or backend API later)
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:zakkiyakhadeeja@gmail.com.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FiArrowLeft size={20} /> Back
      </button>

      {/* Title */}
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We’d love to hear from you. Reach out to us for any inquiries,
        collaborations, or support.
      </p>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-box">
          <FiMapPin size={30} className="info-icon" />
          <h2>Address</h2>
          <p>
            P.O Box 40637 <br />
            Markaz hail, Hail Street <br />
            Jeddah 21511, Saudi Arabia
          </p>
        </div>

        <div className="info-box">
          <FiMail size={30} className="info-icon" />
          <h2>Email</h2>
          <p>ajmi@ajmisa.com</p>
        </div>

        <div className="info-box">
          <FiPhone size={30} className="info-icon" />
          <h2>Phone</h2>
          <p>+966 553011362</p>
        </div>

        <div className="info-box">
          <FiClock size={30} className="info-icon" />
          <h2>Business Hours</h2>
          <p>
            Mon - Thu: 9:00 AM - 6:00 PM
            <br />
            Friday: Closed
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="form-container">
        <h2 className="form-title">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
