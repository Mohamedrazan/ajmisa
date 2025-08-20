import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHotel,
  FaTv,
  FaChartLine,
  FaConciergeBell,
  FaUsers,
  FaWifi,
} from "react-icons/fa";
import "./Iptvintro.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Iptvintro() {
  return (
    <div className="iptvIntroPage">
      {/* HERO */}
      <section className="iptvIntro-hero">
        <motion.div
          className="iptvIntro-heroContent"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1>
            Transform Hospitality with <span>Next-Gen IPTV Solutions</span>
          </h1>
          <p>
            Deliver unforgettable guest experiences. Our IPTV platform brings
            together entertainment, information, and hotel services — all in one
            seamless, interactive system.
          </p>
          <div className="iptvIntro-buttons">
            <Link to="/solutions" className="iptvIntro-btnPrimary" style={{ color: "black" }}>
              Explore Solutions
            </Link>
            <Link to="/request-demo" className="iptvIntro-btnSecondary">
              Request a Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* WHAT IS IPTV */}
      <section className="iptvIntro-grid">
        <motion.div
          className="iptvIntro-textBox"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>What is IPTV?</h2>
          <p>
            IPTV stands for <strong>Internet Protocol Television</strong>. Unlike
            traditional cable or satellite, IPTV streams content through the
            internet. This means your hotel can deliver live TV, movies, music,
            and interactive services — all powered by a simple internet
            connection. No outdated equipment. No hassle.
          </p>
        </motion.div>
        <motion.div
          className="iptvIntro-imageBox"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <img
            src="./iptvintro1.jpg"
            alt="IPTV Illustration"
          />
        </motion.div>
      </section>

      {/* IPTV FOR HOSPITALITY */}
      <section className="iptvIntro-grid reverse">
        <motion.div
          className="iptvIntro-imageBox"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <img
            src="./iptvintro3.jpg"
            alt="Hospitality IPTV"
          />
        </motion.div>
        <motion.div
          className="iptvIntro-textBox"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>IPTV in the Hospitality Business</h2>
          <p>
            Hotels today need more than just basic TV. Guests expect
            <strong> personalized, connected, and modern experiences</strong>.
            IPTV makes that possible — combining in-room entertainment with
            hotel services such as room service ordering, promotions, local
            information, and smart connectivity.
          </p>
          <p>
            We provide IPTV solutions tailored for every kind of property —
            whether you manage a <strong>luxury resort, boutique hotel, or a
              business chain</strong>. Our platform adapts to your brand and guest
            needs, ensuring maximum satisfaction and higher revenue.
          </p>
        </motion.div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="iptvIntro-features">
        <motion.div
          className="iptvIntro-featureGrid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <FaUsers />,
              title: "Enhanced Guest Experience",
              desc: "Deliver personalized content and services that make guests feel valued and comfortable.",
            },
            // {
            //   icon: <FaChartLine />,
            //   title: "Boost Revenue",
            //   desc: "Upsell services, promote offers, and increase bookings through in-room promotions.",
            // },
            {
              icon: <FaHotel />,
              title: "For Every Hotel",
              desc: "From luxury resorts to budget stays, our IPTV solutions fit all hospitality needs.",
            },
            {
              icon: <FaConciergeBell />,
              title: "Smart Services",
              desc: "Guests can order food, book spa sessions, or request services — all via TV.",
            },
            {
              icon: <FaWifi />,
              title: "Seamless Connectivity",
              desc: "Enable casting, streaming apps, and high-speed integration for digital travelers.",
            },
            {
              icon: <FaTv />,
              title: "All-in-One Entertainment",
              desc: "Live channels, movies, apps, and music — an immersive entertainment hub.",
            },
          ].map((item, i) => (
            <motion.div
              className="iptvIntro-featureCard"
              key={i}
              variants={fadeUp}
            >
              <div className="iptvIntro-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="iptvIntro-cta">
        <motion.div
          className="iptvIntro-ctaBox"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Upgrade Your Hotel Experience Today</h2>
          <p>
            Impress your guests, boost your revenue, and modernize your property
            with our professional IPTV hospitality solutions.
          </p>
          <Link to="/contact" className="iptvIntro-btnPrimary" style={{ color: "black" }}>
            Contact Us
          </Link>       
           </motion.div>
      </section>
    </div>
  );
}
