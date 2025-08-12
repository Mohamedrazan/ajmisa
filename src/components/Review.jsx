import React, { useEffect, useRef, useState } from 'react';
import './Review.css';

const testimonials = [
    {
        quote: "MacVision IPTV System and WiFi System have successfully completed 200 TV lines. The system's quality and reliability have greatly improved our employees' morale by providing them with excellent entertainment options during their downtime.",
        name: "ADW - Al Mansoura Al Massarh Gold Mining",
        project: "Maa'dan Project",
        src: "./macvisionmainlogo.png",
        stars: 5
    },
    {
        quote: "MacVision IPTV System and WiFi System have successfully completed 450 TV lines. The system's quality and reliability have greatly improved our employees' morale by providing them with excellent entertainment options during their downtime.",
        name: "JRAR - Al Mansoura Al Massarh Gold Mining",
        project: "Maa'dan Project",
        src: "./macvisionmainlogo.png",
        stars: 5
    },
    {
        quote: "MacVision's IPTV System and WiFi System have been successfully implemented with 230 TV lines. The system's high-quality service and reliability have significantly improved our employees' satisfaction by providing during their downtime.",
        name: "South Gahar Gas Oil Project Aramco",
        project: "JGC Labor Camp",
        src: "./macvisionmainlogo.png",
        stars: 5
    },
    {
        quote: "We implemented MacVision's IPTV system with WiFi solutions in 700 rooms at our labor camp. The system is reliable, and the high-definition streaming has been well-received by our residents. The seamless integration and robust performance.",
        name: "Tecnidas Renidas Labor Camp",
        project: "Aramco Merjan Development Program",
        src: "./macvisionmainlogo.png",
        stars: 5
    }
];

export default function Review() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`testimonial-section ${isVisible ? 'animate' : ''}`}
        >
            <div className="testimonial-header">
                <h2 style={{ color: "black" }}>
                    Thousands of satisfied <br />customers said:
                </h2>
            </div>
            <div className="testimonial-cards">
                {testimonials.map((t, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="quote-icon">“</div>
                        <p className="quote">{t.quote}</p>
                        <div className="testimonial-footer">
                            <div className="client-info">
                                <strong>{t.name}</strong>
                                <div>{t.project}</div>
                            </div>
                            <div className="logo-stars">
                                {t.src ? (
                                    <img src={t.src} alt="logo" className="testimonial-logo" />
                                ) : (
                                    <span className="logo">{t.logo}</span>
                                )}
                                <span className="stars">{"⭐".repeat(t.stars)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
