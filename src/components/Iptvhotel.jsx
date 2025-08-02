import React from 'react';
import './Iptvhotel.css';

const Iptvhotel = () => {
  return (
    <div className="room-service-wrapper">
      <h1 className="page-heading">Room Service</h1>

      <div className="service-boxes">

        <div className="service-card">
          <h2>🛎️ How to Order</h2>
          <p>
            Browse our digital menu and select your desired items using your remote. Press <strong>“Order Now”</strong> and sit back — our staff will deliver it to your room shortly.
          </p>
        </div>

        <div className="service-card">
          <h2>⏰ Service Hours</h2>
          <p>
            Room service is available <strong>24/7</strong>. Our full menu is available from <strong>6:00 AM to 11:00 PM</strong>. A limited late-night menu is offered after 11 PM.
          </p>
        </div>

        <div className="service-card">
          <h2>🌿 Special Notes</h2>
          <ul>
            <li>All dishes are prepared fresh by our chefs.</li>
            <li>Please inform us of any allergies or dietary restrictions.</li>
            <li>Eco-friendly packaging used for all orders.</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>📞 Need Assistance?</h2>
          <p>
            For personalized assistance or custom orders, press <strong>‘Help’</strong> on your remote or dial <strong>‘9’</strong> from your in-room phone.
          </p>
        </div>

        <div className="service-card">
          <h2>🧼 Hygiene & Safety</h2>
          <ul>
            <li>Our staff follows WHO-recommended hygiene protocols.</li>
            <li>Contactless delivery available upon request.</li>
            <li>All packaging is sanitized before dispatch.</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>📍 Where We Deliver</h2>
          <p>
            Enjoy seamless in-room dining in the comfort of your suite, balcony, or personal workspace. Please indicate your preferred delivery spot while placing the order.
          </p>
        </div>

        <div className="service-card">
          <h2>🎁 Complimentary Services</h2>
          <ul>
            <li>Fresh cutlery and napkins included with every order.</li>
            <li>Complimentary bottled water with orders above ₹999.</li>
            <li>Special birthday/anniversary plating on request.</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>💳 Billing & Payment</h2>
          <p>
            All charges will be directly added to your room bill. For any billing-related queries, please contact the front desk or view your bill under the "My Account" section.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Iptvhotel;
