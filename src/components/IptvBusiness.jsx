import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCheckCircle,
  FaHotel,
  FaConciergeBell,
  FaBroadcastTower,
  FaNetworkWired,
  FaRegSmileBeam,
  FaShieldAlt,
  FaPhoneAlt,
  FaChartLine,
  FaRegClock,
  FaLanguage,
  FaCogs,
  FaTv,
} from "react-icons/fa";
import "./IptvBusiness.css";

const IptvBusiness = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 60 });
  }, []);

  return (
    <main className="biz-wrapper">
      {/* HERO */}
      <section className="biz-hero">
        <div className="hero-bg-glow" />
        <div className="hero-grid">
          <div className="hero-copy" data-aos="fade-right">
            <h5 className="eyebrow">Hospitality IPTV Solutions</h5>
            <h1 className="title1">
              Elevate Every <span>Guest Stay</span> with a Premium In-Room
              Experience
            </h1>
            <p className="lead">
              We deliver a white-label IPTV platform engineered for hotels:
              curated live TV, VOD, casting, upsell widgets, PMS integration,
              and real-time control—beautifully branded for your property.
            </p>
            <div className="cta-row">
              <button
                className="primary-btn"
                onClick={() => navigate("/request-demo")}
              >
                Request Demo
              </button>
              <button
                className="outline-btn"
                onClick={() => navigate("/frontdesk")}
              >
                Our Front Desk
              </button>
            </div>

            <ul className="hero-highlights">
              <li><FaCheckCircle /> Zero set-top box required on supported smart TVs</li>
              <li><FaCheckCircle /> Property branding, multi-language UI</li>
              <li><FaCheckCircle /> Centralized control for every room</li>
            </ul>
          </div>

          <div className="hero-visual" data-aos="zoom-in">
            <div className="tv-frame">
              {/* Replace with your hero image if you have one */}
              <img src="./maintvwatch.jpg" alt="Hotel room IPTV" />
              {/* <div className="floating-tag tag-top">
                <FaTv /> 4K Channels & VOD
              </div> */}
              {/* <div className="floating-tag tag-bottom">
                <FaConciergeBell /> In-Room Upsells
              </div> */}
            </div>
            <div className="blob blob-1" />
            <div className="blob blob-2" />
          </div>
        </div>
        {/* <div className="scroll-indicator">
          <span /> Scroll
        </div> */}
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="provide" id="provide">
        <div className="section-head" data-aos="fade-up">
          <h2>What We Provide for Hotels</h2>
          <p>
            Purpose-built modules to enhance service, grow revenue, and delight guests—without
            disrupting your operations.
          </p>
        </div>

        <div className="provide-grid">
          <div className="provide-card" data-aos="fade-up">
            <FaHotel className="p-icon" />
            <h3>Property-Branded UI</h3>
            <p>
              A fully themed interface with your logo, colors, and property imagery across rooms.
              Deliver a consistent, premium feel.
            </p>
          </div>

          <div className="provide-card" data-aos="fade-up" data-aos-delay="100">
            <FaNetworkWired className="p-icon" />
            <h3>PMS & Network Integration</h3>
            <p>
              Connect to your existing PMS, captive portal, and Wi-Fi VLANs. Room-level provisioning,
              automated check-in/out sync.
            </p>
          </div>

          <div className="provide-card" data-aos="fade-up" data-aos-delay="200">
            <FaBroadcastTower className="p-icon" />
            <h3>Live TV & 4K VOD</h3>
            <p>
              Curated channel packs, premium sports, and multilingual content with adaptive bitrate
              streaming for flawless playback.
            </p>
          </div>

          <div className="provide-card" data-aos="fade-up" data-aos-delay="300">
            <FaConciergeBell className="p-icon" />
            <h3>Guest Services & Upsells</h3>
            <p>
              Order dining, book spa, request housekeeping, late checkout, and more—right on the TV.
              Smart offers boost RevPAR.
            </p>
          </div>

          <div className="provide-card" data-aos="fade-up" data-aos-delay="400">
            <FaShieldAlt className="p-icon" />
            <h3>Compliance & Controls</h3>
            <p>
              Role-based access, audit trails, emergency alerts, and content controls for
              family-friendly stays.
            </p>
          </div>

          <div className="provide-card" data-aos="fade-up" data-aos-delay="500">
            <FaCogs className="p-icon" />
            <h3>Central Admin Console</h3>
            <p>
              Monitor health metrics, push offers, schedule channel changes, and manage devices in
              real time from one dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE STRIP */}
      <section className="experience">
        <div className="exp-grid">
          <div className="exp-item" data-aos="fade-up">
            <FaRegSmileBeam />
            <h4>Delight at Scale</h4>
            <p>Frictionless UX guests “just get”, from business travelers to families.</p>
          </div>
          <div className="exp-item" data-aos="fade-up" data-aos-delay="100">
            <FaChartLine />
            <h4>Revenue Uplift</h4>
            <p>Targeted on-screen offers, packages, and events to lift ancillary sales.</p>
          </div>
          <div className="exp-item" data-aos="fade-up" data-aos-delay="200">
            <FaRegClock />
            <h4>Operational Flow</h4>
            <p>Automations reduce calls to front desk and speed up response times.</p>
          </div>
          <div className="exp-item" data-aos="fade-up" data-aos-delay="300">
            <FaLanguage />
            <h4>Multi-Language</h4>
            <p>Localized UI and content for international travelers.</p>
          </div>
        </div>
      </section>

      {/* MODULES (HOSPITALITY-FOCUSED) */}
      <section className="modules">
        <div className="section-head" data-aos="fade-up">
          <h2>Modules Tailored for Hospitality</h2>
          <p>Pick the stack that fits your property portfolio—scale as you grow.</p>
        </div>

        <div className="module-grid">
          <div className="module-card" data-aos="fade-right">
            <div className="m-head">
              <h3>Front Desk Toolkit</h3>
              <span className="chip">Live</span>
            </div>
            <ul>
              <li>Room pairing & remote control override</li>
              <li>Guest welcome screen & messages</li>
              <li>Do-Not-Disturb & housekeeping status</li>
              <li>Quick service actions & issue logging</li>
            </ul>
          </div>

          <div className="module-card" data-aos="fade-up" data-aos-delay="100">
            <div className="m-head">
              <h3>Guest Experience</h3>
              <span className="chip alt">Prime</span>
            </div>
            <ul>
              <li>Chromecast / AirPlay-style casting</li>
              <li>VOD library with parental controls</li>
              <li>City guides & property channels</li>
              <li>QR handoff from TV to mobile</li>
            </ul>
          </div>

          <div className="module-card" data-aos="fade-left" data-aos-delay="200">
            <div className="m-head">
              <h3>Operations & Insights</h3>
              <span className="chip">Ops</span>
            </div>
            <ul>
              <li>Uptime & QoS monitoring</li>
              <li>Offer performance analytics</li>
              <li>Content scheduling & blackouts</li>
              <li>Role-based user management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SHOWCASE / MOCK TV */}
      <section className="showcase">
        <div className="show-grid">
          <div className="show-visual" data-aos="zoom-in">
            <div className="neo-tv">
              <img src="./maintvwatch2.jpg" alt="In-room IPTV showcase" />
              {/* <div className="badge b1"><FaPhoneAlt /> One-tap Room Service</div> */}
              {/* <div className="badge b2"><FaShieldAlt /> Safe for Families</div> */}
            </div>
          </div>
          <div className="show-copy" data-aos="fade-left">
            <h2>A Premium Screen That Sells & Serves</h2>
            <p>
              Turn the in-room TV into a dynamic concierge. Promote upgrades, events, and amenities, 
              while giving guests instant access to what they need—from dining to spa bookings.
            </p>
            <div className="bullets">
              <span><FaCheckCircle /> No set-top boxes on supported smart TVs</span>
              <span><FaCheckCircle /> Real-time content updates</span>
              <span><FaCheckCircle /> Accessibility-ready layouts</span>
            </div>
            <div className="cta-row left">
              {/* <button
                className="primary-btn"
                onClick={() => navigate("/request-demo")}
              >
                Request Demo
              </button> */}
              <button
                className="outline-btn"
                onClick={() => navigate("/qoute-page")}
              >
                Get Qoute Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="final-cta" data-aos="fade-up">
        <h2>Ready to reinvent your in-room experience?</h2>
        <p>Launch across your property with zero-drama deployment and enterprise support.</p>
        <div className="cta-row">
          <button className="primary-btn" onClick={() => navigate("/request-demo")}>
            Request Demo
          </button>
          <button className="outline-btn" onClick={() => navigate("/frontdesk")}>
            Our Front Desk
          </button>
        </div>
      </section> */}
    </main>
  );
};

export default IptvBusiness;
