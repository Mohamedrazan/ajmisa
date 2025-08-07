import React, { useEffect } from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-wrapper">
      <div className="terms-container">
        <h1>Terms and Conditions – IPTV Hospitality Solutions</h1>
        <p className="date">Effective Date: 07-08-2025<br />Last Updated: 07-08-2025</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions govern your access to and use of the IPTV Hospitality Solutions ("Service")
            provided by <strong>[Your Company Name]</strong>. This service includes but is not limited to streaming
            live TV, video on-demand (VOD), interactive hotel services, and integration with hotel management systems.
          </p>
          <p>
            By subscribing to or using our services, you agree to these terms. If you are acting on behalf of a hotel,
            you confirm that you are authorized to enter into agreements for the property.
          </p>
        </section>

        <section>
          <h2>2. Scope of Service</h2>
          <ul>
            <li>The IPTV service includes a combination of software, hardware (e.g., set-top boxes, smart TVs, or middleware), and licensed content.</li>
            <li>Services provided are intended strictly for in-room guest entertainment and hotel information services.</li>
            <li>Use of the IPTV platform for public broadcasting or commercial redistribution is prohibited.</li>
          </ul>
        </section>

        <section>
          <h2>3. Content Licensing and Usage</h2>
          <ul>
            <li>All IPTV content (live channels, movies, music, etc.) is subject to licensing. We ensure all broadcast rights are in compliance with local regulations.</li>
            <li>The hotel must not attempt to record, retransmit, or share any of the content with external parties.</li>
            <li>Some content may be restricted based on region, licensing agreements, or hotel preferences.</li>
          </ul>
        </section>

        <section>
          <h2>4. Installation and Infrastructure</h2>
          <ul>
            <li>We will assess the hotel's existing infrastructure and determine compatibility with our IPTV platform.</li>
            <li>The hotel is responsible for ensuring stable internet connectivity and LAN/Wi-Fi networks within guest rooms.</li>
            <li>Hardware may be leased or purchased outright. Ownership terms will be specified in the agreement.</li>
          </ul>
        </section>

        <section>
          <h2>5. System Integration</h2>
          <p>Our IPTV solution may integrate with:</p>
          <ul>
            <li>Property Management Systems (PMS)</li>
            <li>Smart room automation</li>
            <li>Guest room control (lighting, curtains, A/C)</li>
            <li>Service ordering systems (room service, spa, housekeeping)</li>
          </ul>
        </section>

        <section>
          <h2>6. Service Availability</h2>
          <ul>
            <li>We strive for 99.9% uptime.</li>
            <li>Scheduled maintenance will be communicated in advance.</li>
            <li>Unforeseen downtimes due to force majeure (power failures, internet disruptions, etc.) are not the responsibility of the provider.</li>
          </ul>
        </section>

        <section>
          <h2>7. Support and Maintenance</h2>
          <ul>
            <li>Technical support is available 24/7 via phone, email, or ticketing system.</li>
            <li>Routine maintenance and software updates will be managed remotely.</li>
            <li>Onsite support can be arranged if needed, subject to service contract terms.</li>
          </ul>
        </section>

        <section>
          <h2>8. Billing, Payments, and Renewals</h2>
          <ul>
            <li>Subscription models may be monthly, quarterly, or annually.</li>
            <li>Payments are due within the billing cycle as agreed.</li>
            <li>Failure to make timely payments may lead to service suspension.</li>
            <li>Prices are subject to change with 30 days' notice.</li>
          </ul>
        </section>

        <section>
          <h2>9. User Conduct</h2>
          <ul>
            <li>Guests and staff must not tamper with the system.</li>
            <li>Hotels are responsible for ensuring that guest usage remains lawful and does not violate intellectual property laws.</li>
          </ul>
        </section>

        <section>
          <h2>10. Termination and Suspension</h2>
          <ul>
            <li>Either party may terminate the contract with 30 days’ written notice.</li>
            <li>Immediate termination may occur for breach of agreement, non-payment, or misuse.</li>
            <li>Upon termination, all equipment must be returned (if leased), and access to services will be revoked.</li>
          </ul>
        </section>

        <section>
          <h2>11. Limitation of Liability</h2>
          <ul>
            <li>We are not liable for indirect or consequential damages resulting from system failure, content unavailability, or third-party service disruptions.</li>
            <li>Total liability, if any, shall not exceed the value of one month’s service fee.</li>
          </ul>
        </section>

        <section>
          <h2>12. Governing Law and Disputes</h2>
          <ul>
            <li>These terms shall be governed by the laws of <strong>India</strong>.</li>
            <li>Any dispute arising out of or in connection with this agreement shall be resolved through arbitration or court proceedings in the jurisdiction of <strong>Kasaragod</strong>.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
