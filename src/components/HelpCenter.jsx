import React, { useEffect } from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="help-wrapper">
      <div className="help-container">
        <h1>Help Center – IPTV Hospitality Solutions</h1>
        <p className="intro">
          Find answers to common questions and get support for using our IPTV system, whether you're a hotel staff member or a guest.
        </p>

        <section>
          <h2>For Hotel Administrators</h2>
          <div className="faq-item">
            <h3>🔧 How do I install the IPTV system in guest rooms?</h3>
            <p>Our technical team will conduct a site assessment and handle all setup, including smart TV configuration and network integration.</p>
          </div>

          <div className="faq-item">
            <h3>📶 What internet speed is required?</h3>
            <p>A stable LAN or Wi-Fi connection with a minimum of 10 Mbps per room is recommended for seamless streaming.</p>
          </div>

          <div className="faq-item">
            <h3>💳 How do I manage billing?</h3>
            <p>Invoices and subscription information are available in the admin dashboard. You can pay monthly, quarterly, or annually.</p>
          </div>

          <div className="faq-item">
            <h3>🛠 Can I get onsite support?</h3>
            <p>Yes, onsite support is available on request and subject to your service level agreement. Remote support is available 24/7.</p>
          </div>
        </section>

        <section>
          <h2>For Guests</h2>
          <div className="faq-item">
            <h3>📺 How do I use the IPTV remote?</h3>
            <p>Use the remote’s arrow keys to navigate the menu. Press OK to select channels, movies, or services.</p>
          </div>

          <div className="faq-item">
            <h3>🎞 Can I pause or rewind live TV?</h3>
            <p>This feature depends on the hotel’s subscription plan. VOD (Video on Demand) content can always be paused or replayed.</p>
          </div>

          <div className="faq-item">
            <h3>🌐 Can I connect my own streaming account (e.g., Netflix)?</h3>
            <p>Yes, some hotel TVs allow you to log into apps like Netflix or YouTube. Be sure to log out before checkout.</p>
          </div>

          <div className="faq-item">
            <h3>📩 How can I give feedback?</h3>
            <p>You can rate services and content directly via the IPTV interface. Some hotels also provide a feedback form on the TV.</p>
          </div>
        </section>

        <section>
          <h2>Still Need Help?</h2>
          <p>📧 Email: <a href="mailto:Mahinchagroup@gmail.com">Mahinchagroup@gmail.com</a></p>
          <p>📞 Call: <a href="tel:+919562666362">+91-9562666362</a></p>
        </section>
      </div>
    </div>
  );
};

export default HelpCenter;
