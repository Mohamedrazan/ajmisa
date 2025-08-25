import { motion } from "framer-motion";
import "./ExploreSolutions.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExploreSolutions() {
     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div className="exploreSolutionsPage">
            {/* HERO */}
            <section className="exploreSolutions-hero">
                <motion.div
                    className="exploreSolutions-heroContent"
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                >
                    <h1>Explore Our IPTV Solutions</h1>
                    <p>
                        IPTV is transforming the way hotels deliver entertainment and
                        services. Our solutions are built to elevate guest experiences,
                        simplify hotel operations, and create a connected, future-ready
                        hospitality environment.
                    </p>
                </motion.div>
            </section>

            {/* CONTENT */}
            <section className="exploreSolutions-content">
                <motion.div
                    className="exploreSolutions-text"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2>Redefining Hospitality</h2>
                    <p>
                        With IPTV, hotels can move beyond traditional television systems and
                        deliver an integrated digital experience. Guests can watch live TV,
                        explore on-demand content, and access hotel services directly from
                        the comfort of their room.
                    </p>
                    <ul>
                        <li>Seamless live TV and on-demand streaming</li>
                        <li>Interactive in-room services</li>
                        <li>Convenience and modern comfort</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="exploreSolutions-text"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2>Guest-Centered Features</h2>
                    <p>
                        IPTV opens the door to personalized experiences, from custom
                        greetings to easy access to room service and hotel offers. The TV
                        becomes a central hub of convenience.
                    </p>
                    <ul>
                        <li>Tailored welcome messages</li>
                        <li>Language and content preferences</li>
                        <li>Easy access to bookings and promotions</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="exploreSolutions-text"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2>Operational Benefits</h2>
                    <p>
                        For hotels, IPTV provides an efficient and sustainable way to
                        communicate with guests while generating additional revenue through
                        promotions and offers.
                    </p>
                    <ul>
                        <li>Reduce printing costs and paper waste</li>
                        <li>Instantly update menus and information</li>
                        <li>Promote in-house dining and local services</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="exploreSolutions-text"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2>Seamless Technology</h2>
                    <p>
                        Our IPTV solutions are designed for scalability and easy integration
                        with existing hotel infrastructure, making them simple to manage and
                        intuitive for guests.
                    </p>
                    <ul>
                        <li>Integration with hotel systems</li>
                        <li>Supports mobile casting & apps</li>
                        <li>User-friendly and reliable platform</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="exploreSolutions-text"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2>Future-Ready Solutions</h2>
                    <p>
                        IPTV ensures your hotel is prepared for evolving guest expectations
                        with features that grow with your business.
                    </p>
                    <ul>
                        <li>Adaptable to new technologies</li>
                        <li>Customizable for different hotel needs</li>
                        <li>Built for long-term value</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="exploreSolutions-text"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2>Sustainability and Efficiency</h2>
                    <p>
                        IPTV is not just about entertainment — it also helps hotels achieve
                        greener operations and reduce environmental impact.
                    </p>
                    <ul>
                        <li>Lower carbon footprint with digital services</li>
                        <li>Eliminate unnecessary paper waste</li>
                        <li>Eco-friendly while enhancing guest comfort</li>
                    </ul>
                </motion.div>
            </section>

            {/* IMAGE PLACEHOLDER */}
            {/* <section className="exploreSolutions-imageSection">
        <motion.div
          className="exploreSolutions-imageWrapper"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <img src="./iptvsolution.jpg" alt="Explore IPTV Solutions" />
        </motion.div>
      </section> */}

            {/* CTA */}
            <section className="exploreSolutions-cta">
                <motion.div
                    className="exploreSolutions-ctaContent"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2>Start Your IPTV Journey</h2>
                    <p>
                        Whether you manage a boutique hotel or a large chain, our IPTV
                        solutions are designed to adapt to your unique needs. Let’s work
                        together to create a connected, modern, and guest-focused
                        hospitality experience.
                    </p>
                    <Link to="/contact" className="exploreSolutions-btn">
                        Contact Us
                    </Link>

                </motion.div>
            </section>
        </div>
    );
}
