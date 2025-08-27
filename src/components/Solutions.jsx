import React, { useEffect, useRef, useState } from "react";
import "./Solutions.css";
import {
  FaTv,
  FaLaptop,
  FaChartLine,
  FaCloud,
  FaHeadset,
  FaCode,
  FaMobileAlt,
  FaWhatsapp,
  FaPlayCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      icon: <FaTv />,
      title: "IPTV Middleware Software Development",
      desc: "IPTV streams live and on-demand content over the internet, enhancing in-room entertainment for hotel guests.",
      link: "/iptv",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      desc: "Custom mobile apps for hotels to boost guest engagement, booking, and in-room service accessibility.",
      link: "/mobile-app",
    },
    {
      icon: <FaCode />,
      title: "Web Designing",
      desc: "Professional, responsive web design to elevate hotel branding and online presence.",
      link: "/web-design",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp Business API",
      desc: "Instant confirmations, service requests, promotions, and personalized communication.",
      link: "/whatsapp-business",
    },
    {
      icon: <FaLaptop />,
      title: "Digital Signage",
      desc: "Dynamic screens that engage guests and streamline communication across your property.",
      link: "/digital-signage",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      desc: "Turn data into decisions — optimize guest experiences and revenue.",
      link: "/analytics",
    },
    {
      icon: <FaCloud />,
      title: "Cloud / Hybrid",
      desc: "Flexible, scalable IPTV deployment tailored to your infrastructure.",
      link: "/cloud-hybrid",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Uninterrupted service with expert, always-on assistance.",
      link: "/support",
    },
    {
      icon: <FaPlayCircle />,
      title: "VOD",
      desc: "Movies and shows on demand — flexible, personalized entertainment.",
      link: "/vod",
    },
  ];

  // 3D coverflow state
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoRef = useRef(null);
  const touch = useRef({ startX: 0, dx: 0, dragging: false });

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    autoRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % solutions.length);
    }, 2800);
    return () => clearInterval(autoRef.current);
  }, [isPaused, solutions.length]);

  // helpers
  const prev = () => setActive((p) => (p - 1 + solutions.length) % solutions.length);
  const next = () => setActive((p) => (p + 1) % solutions.length);

  // swipe / drag
  const onPointerDown = (e) => {
    setIsPaused(true);
    touch.current.dragging = true;
    touch.current.startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    touch.current.dx = 0;
  };
  const onPointerMove = (e) => {
    if (!touch.current.dragging) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    touch.current.dx = x - touch.current.startX;
  };
  const onPointerUp = () => {
    if (!touch.current.dragging) return;
    const { dx } = touch.current;
    touch.current.dragging = false;
    setIsPaused(false);
    if (dx > 60) prev();
    else if (dx < -60) next();
  };

  return (
    <section className="solutions-wrapper">
      {/* Background accents */}
      <div className="bg-accent bg-1" />
      <div className="bg-accent bg-2" />
      <div className="bg-grid" />

      <header className="solutions-header">
        <h2>Our Services</h2>
        <p>Everything you need to design, deliver, and delight — powered by #005EB8.</p>
      </header>

      <div
        className="coverflow"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={onPointerUp}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onMouseLeaveCapture={() => {
          // if dragging out of bounds
          touch.current.dragging = false;
          setIsPaused(false);
        }}
      >
        <button className="nav-btn left" onClick={prev} aria-label="Previous">
          <FaChevronLeft />
        </button>

        <ul className="deck" style={{ "--count": solutions.length }}>
          {solutions.map((s, i) => {
            // compute relative position (-N..0..+N)
            const offset = ((i - active + solutions.length) % solutions.length);
            // convert to symmetric range around center
            const half = Math.floor(solutions.length / 2);
            const rel = offset > half ? offset - solutions.length : offset;

            return (
              <li
                key={i}
                className="card"
                style={{
                  "--rel": rel, // custom property for transforms
                  "--abs": Math.abs(rel),
                  "--z": 100 - Math.abs(rel),
                }}
              >
                <div className="card-inner">
                  <div className="card-icon">{s.icon}</div>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-desc">{s.desc}</p>
                  <Link className="card-btn" to={s.link}>
                    Learn More
                  </Link>

                  {/* subtle shine */}
                  <span className="shine" />
                </div>
              </li>
            );
          })}
        </ul>

        <button className="nav-btn right" onClick={next} aria-label="Next">
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="dots">
        {solutions.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Solutions;
