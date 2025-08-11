import React, { useEffect } from "react";
import "./VODPage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import vodImage from "../assets/vod.jpg"; // Change to your image path

const VODPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
        window.scrollTo(0, 0);

  }, []);

  return (
    <section className="vod-section">
      <div className="vod-container">

        {/* Image Section - Left Side */}
        <div className="vod-image" data-aos="fade-right">
          <img src={vodImage} alt="VOD Service" className="vod-img" />
        </div>

        {/* Right Content Section */}
        <div className="vod-text" data-aos="fade-left">
          <h1 className="vod-title">Video on Demand (VOD) for Hospitality</h1>

          <p className="vod-intro">
            Transform your guests’ entertainment experience with our cutting-edge VOD platform. Guests enjoy the freedom to choose from thousands of movies, TV shows, documentaries, and exclusive content — all available instantly on their in-room screens.
          </p>

          <p className="vod-description">
            Our VOD service is designed specifically for hotels and resorts, offering a fully customizable interface that integrates seamlessly with your existing IPTV system. Guests can browse curated categories, watch trailers, and create watchlists — all in their preferred language.
          </p>

          <div className="vod-points">
            <div className="vod-point" data-aos="zoom-in" data-aos-delay="200">
              <h3> Vast Content Library</h3>
              <p>
                Access thousands of titles across genres including blockbusters, classics, kids’ programming, international films, and more.
              </p>
            </div>

            <div className="vod-point" data-aos="zoom-in" data-aos-delay="400">
              <h3> Ultra-Fast Streaming</h3>
              <p>
                Our optimized IPTV network ensures minimal buffering and crisp, high-definition playback — including 4K support.
              </p>
            </div>

            <div className="vod-point" data-aos="zoom-in" data-aos-delay="600">
              <h3> Fully Customizable UI</h3>
              <p>
                Tailor the user interface to match your brand’s look and feel, including logos, colors, and layout.
              </p>
            </div>

            <div className="vod-point" data-aos="zoom-in" data-aos-delay="800">
              <h3> Multi-Language & Accessibility</h3>
              <p>
                Provide subtitles, audio tracks, and accessibility options to cater to diverse guests.
              </p>
            </div>

            <div className="vod-point" data-aos="zoom-in" data-aos-delay="1000">
              <h3> Multi-Device Access</h3>
              <p>
                Guests can enjoy VOD content on in-room TVs, mobile devices, or tablets — wherever they feel most comfortable.
              </p>
            </div>

            <div className="vod-point" data-aos="zoom-in" data-aos-delay="1200">
              <h3> Analytics & Monetization</h3>
              <p>
                Gain insights on popular content and viewing habits. Unlock new revenue streams with pay-per-view and targeted advertising.
              </p>
            </div>
          </div>

          <p className="vod-extra" data-aos="fade-up" data-aos-delay="1400">
            Elevate guest satisfaction and boost your hotel’s brand value with a VOD experience that feels personalized, modern, and effortless.
          </p>

          <p className="vod-casual" data-aos="fade-up" data-aos-delay="1600">
            Ready to make your guests’ stay unforgettable? Our VOD solution is here to entertain, engage, and inspire — all at the touch of a button.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VODPage;
