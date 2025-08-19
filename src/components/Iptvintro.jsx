import React from "react";
import { motion } from "framer-motion";
import "./Iptvintro.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Iptvintro() {
  return (
    <div className="iptvPage">
      
      {/* HERO */}
      <section className="iptvPage-hero">
        <motion.div
          className="iptvPage-heroContent"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1>Next-Gen IPTV Solutions for Hospitality</h1>
          <p>
            Deliver personalized entertainment, seamless connectivity, and
            smarter guest experiences with our professional IPTV hospitality
            solutions.
          </p>
          <div className="iptvPage-buttons">
            <button className="iptvPage-btnPrimary">Discover Solutions</button>
            <button className="iptvPage-btnSecondary">Request a Demo</button>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="iptvPage-section">
        <motion.div
          className="iptvPage-contentBox"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Why IPTV Matters in Hospitality</h2>
          <p>
            Today’s travelers expect more than just a comfortable stay. IPTV
            transforms traditional hotel TV into a fully interactive platform —
            offering live channels, on-demand content, and personalized
            recommendations to enhance guest satisfaction and brand value.
          </p>
        </motion.div>
      </section>

      {/* BUSINESS VALUE */}
      <section className="iptvPage-section iptvPage-altBg">
        <motion.div
          className="iptvPage-contentBox"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Business Advantages of IPTV</h2>
          <p>
            IPTV is more than entertainment — it’s a business opportunity. Hotels
            and resorts can generate new revenue while improving service quality
            through interactive digital platforms.
          </p>
          <ul className="iptvPage-list">
            <li>Increase guest satisfaction with smart, user-friendly interfaces</li>
            <li>Boost revenue via in-room upselling & targeted promotions</li>
            <li>Enhance brand loyalty through personalized guest content</li>
            <li>Reduce operational costs with centralized IPTV management</li>
          </ul>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="iptvPage-cta">
        <motion.div
          className="iptvPage-ctaBox"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Upgrade Your Hospitality Experience Today</h2>
          <p>
            Partner with us to deliver advanced IPTV solutions designed to
            impress your guests and grow your business.
          </p>
          <button className="iptvPage-btnPrimary">Contact Our Team</button>
        </motion.div>
      </section>
    </div>
  );
}
