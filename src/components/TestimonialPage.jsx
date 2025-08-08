import React, { useEffect } from 'react';
import './TestimonialPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Add client images (you can replace with actual image paths or URLs)
const testimonials = [
  {
    name: "The Royal Orchid Hotel",
    role: "General Manager",
    quote: "Macvision's IPTV solution transformed our in-room experience. Guests love the interface and we've seen increased satisfaction scores.",
    image: "./radisson.jpg"
  },
  {
    name: "Sunset Resorts",
    role: "IT Head",
    quote: "No more set-top boxes! The all-in-one smart TV integration reduced hardware costs and made management incredibly simple.",
    image: "./taj1.jpg",
  },
  {
    name: "GreenLeaf Hospitality",
    role: "Operations Director",
    quote: "The customization level was beyond our expectations. It looks and feels like it was built just for our brand!",
    image: "./marriott.jpg",
  },

   {
    name: "The Royal Orchid Hotel",
    role: "General Manager",
    quote: "Macvision's IPTV solution transformed our in-room experience. Guests love the interface and we've seen increased satisfaction scores.",
    image: "./hyatt.jpg"
  },
 
  
  
];

const TestimonialPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="testimonial-page">
      <div className="testimonial-header" data-aos="fade-down">
        <h2>What Our Clients Say</h2>
        <p>Delivering exceptional IPTV Hospitality Solutions that redefine in-room entertainment.</p>
      </div>

      <div className="testimonial-cards">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index} data-aos="zoom-in-up">
            <img src={item.image} alt={item.name} className="client-image" />
            <p className="quote">“{item.quote}”</p>
            <div className="testimonial-info">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
