import React, { useEffect } from 'react';
import './PrivacyPolicy.css';
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy-policy-wrapper">
      <div className="privacy-policy-container">
        <h1>Privacy Policy – IPTV Hospitality Solutions</h1>
        <p className="date">Effective Date: 07-08-2025<br />Last Updated: 07-08-2025</p>

        <section>
          <h2>1. Overview</h2>
          <p>
            This Privacy Policy outlines how Macvision collects, uses, and protects information from hotel administrators and guests using the IPTV Hospitality Solution.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <h3>For Hotel Management:</h3>
          <ul>
            <li>Contact details: Name, phone number, email, hotel name, address</li>
            <li>Billing information</li>
          </ul>

          <h3>For Guests (via TV interface):</h3>
          <ul>
            <li>Room number or unique identifier</li>
            <li>Viewing preferences and VOD selections</li>
            <li>Feedback or ratings provided via the system</li>
          </ul>

          <h3>Technical Data:</h3>
          <ul>
            <li>Device information (TV model, MAC address)</li>
            <li>IP addresses</li>
            <li>Streaming logs</li>
            <li>Session durations</li>
          </ul>
        </section>

        <section>
          <h2>3. Purpose of Data Collection</h2>
          <ul>
            <li>To deliver personalized guest content</li>
            <li>To provide technical support and service optimization</li>
            <li>To improve our IPTV platform functionality</li>
            <li>To fulfill billing and contractual obligations</li>
            <li>To prevent unauthorized access and misuse</li>
          </ul>
        </section>

        <section>
          <h2>4. Guest Consent</h2>
          <ul>
            <li>When guests use the in-room IPTV system, their interaction data may be collected automatically.</li>
            <li>Hotels must display a consent notice (via welcome screen or printed material) indicating that guest data is collected to enhance their experience.</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Security Measures</h2>
          <ul>
            <li>All data transmission is encrypted using SSL/TLS protocols.</li>
            <li>Guest data is anonymized where possible.</li>
            <li>Access to data is restricted to authorized personnel only.</li>
            <li>Regular audits and system monitoring are performed.</li>
          </ul>
        </section>

        <section>
          <h2>6. Data Sharing and Disclosure</h2>
          <p>We may share data with:</p>
          <ul>
            <li>Hotel management (for service reports and analytics)</li>
            <li>Licensed content providers (for usage compliance)</li>
            <li>Legal authorities (if required under applicable laws)</li>
          </ul>
          <p>We do not sell or rent any personal information to third parties.</p>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <ul>
            <li>Guest usage data is retained for a limited period (typically 30–90 days) and then deleted automatically.</li>
            <li>Hotel admin data is retained for the duration of the contract plus 6 months.</li>
          </ul>
        </section>

        <section>
          <h2>8. User Rights</h2>
          <ul>
            <li>Hotel admins may access, update, or delete their personal data on request.</li>
            <li>Guests may request data access or deletion through the hotel or service provider (subject to verification and feasibility).</li>
          </ul>
        </section>

        <section>
          <h2>9. Third-Party Integrations</h2>
          <ul>
            <li>Our IPTV platform may include third-party apps (e.g., YouTube, Netflix).</li>
            <li>These platforms may collect additional data as per their own privacy policies.</li>
          </ul>
        </section>

        <section>
          <h2>10. Policy Updates</h2>
          <p>
            We may update this Privacy Policy occasionally. All changes will be notified through official communication channels. Continued use of the service implies acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>11. Contact Information</h2>
          <p>
            📧 Email: <a href="mailto:Mahinchagroup@gmail.com">Mahinchagroup@gmail.com</a><br />
            📞 Phone: <a href="tel:+919562666362">+91-9562666362</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
