import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./IPTVPage.css";

const IPTVPage = () => {
  useEffect(() => {
    // Animate on scroll
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="iptv-section">
      <div className="iptv-container">

        {/* Text Section */}
        <div className="iptv-text" data-aos="fade-right">
          <h1 className="iptv-title">IPTV Hospitality Solution</h1>
          <p className="iptv-subtitle">
            IPTV (Internet Protocol Television) is transforming the way hotels entertain, inform,
            and engage their guests. By delivering TV and multimedia content over a secure IP network,
            hotels can offer guests a personalized, modern, and interactive in-room experience.
          </p>

          <p className="iptv-description" data-aos="fade-up" data-aos-delay="200">
            From live TV channels and video-on-demand to hotel information portals and interactive services,
            IPTV brings everything into one sleek, easy-to-use platform. Whether your guests want to watch
            movies, check the weather, explore hotel amenities, or order room service — IPTV makes it possible,
            all from the comfort of their room.
          </p>

          <ul className="iptv-features">
            <li data-aos="zoom-in"> Live HD & 4K TV Channels</li>
            <li data-aos="zoom-in" data-aos-delay="100"> Video on Demand Library</li>
            <li data-aos="zoom-in" data-aos-delay="200"> Customizable UI & Branding</li>
            <li data-aos="zoom-in" data-aos-delay="300"> Cloud or On-Premise Deployment</li>
            <li data-aos="zoom-in" data-aos-delay="400"> 24/7 Technical Support</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="iptv-image" data-aos="fade-left">
          <img
            src="./maintvwatch2.jpg"
            alt="IPTV Hospitality"
            className="iptv-img"
          />
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="iptv-extra">
        <div className="extra-box" data-aos="fade-up">
          <h2>Why Choose IPTV for Hotels?</h2>
          <p>
            IPTV hospitality solutions not only entertain guests but also improve
            operational efficiency. Hotels can promote special offers, upsell
            services, and gather guest preferences through interactive menus,
            all while maintaining a premium brand image.
          </p>
        </div>

        <div className="extra-box" data-aos="fade-up" data-aos-delay="200">
          <h2>Guest Experience</h2>
          <p>
            Guests enjoy high-definition channels, access to local attractions,
            and on-demand movies, all with intuitive navigation. Personalized
            greetings and language options make every stay feel special.
          </p>
        </div>

        <div className="extra-box" data-aos="fade-up" data-aos-delay="400">
          <h2>Hotel Benefits</h2>
          <p>
            From branding opportunities to increased revenue through upselling
            and advertising, IPTV turns the TV screen into a powerful communication tool.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPTVPage;
