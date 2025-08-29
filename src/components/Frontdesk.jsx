import React, { useEffect, useRef } from "react";
import "./Frontdesk.css";

export default function Frontdesk() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="image-section">
      <div className="image-wrapper">
        <img
          ref={imgRef}
          src="./frontdesk.png"
          alt="Front Desk"
          className="animated-image"
        />
      </div>

      <div ref={textRef} className="content-container">
        <h1 className="title">Front Desk Solution</h1>
        <p className="description">
          Our advanced front desk system streamlines guest management, offering
          seamless check-in, efficient service handling, and real-time
          communication. With a modern interface and integrated support, hotel
          staff can deliver an enhanced guest experience while reducing
          operational complexity.
        </p>
      </div>
    </section>
  );
}
