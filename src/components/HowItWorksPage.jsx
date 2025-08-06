import React, { useEffect, useRef } from "react";
import "./HowItWorksPage.css";

const steps = [
  {
    icon: "⬆️",
    title: "Upload",
    desc: "Add new content",
  },
  {
    icon: "📅",
    title: "Schedule",
    desc: "Plan the content",
  },
  {
    icon: "▶️",
    title: "Display",
    desc: "Show on screens",
  },
  {
    icon: "📈",
    title: "Monitor",
    desc: "Track performance",
  },
];

export default function HowItWorksPage() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="howitworks-wrapper">
        
      {/* How It Works Section */}
      <section
        className="how-section animate-hidden"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <h2>How It Works</h2>
        <p>A brief description about how the system works.</p>
        {/* <div className="how-icons">
          <div className="how-icon">📺 IPTV</div>
          <div className="how-icon">☁️</div>
          <div className="how-icon">▶️</div>
        </div> */}
      </section>
      <br />
      {/* Steps Section */}
      <section
        className="steps-section animate-hidden"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        {steps.map((step, i) => (
          <div className="step-card" key={i}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            {i < steps.length - 1 && <span className="arrow">→</span>}
          </div>
        ))}
      </section>

    </div>
  );
}
