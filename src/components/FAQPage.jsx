import React, { useState, useEffect } from 'react';
import './FAQPage.css';

const data = [
  {
    category: 'General FAQs',
    questions: [
      { q: ' 1. What is an IPTV hospitality solution?', 
        a: 'IPTV (Internet Protocol Television) is a digital TV solution that delivers content over the internet to hotel guest rooms, offering a modern, interactive experience.' },
      { q: ' 2. How is IPTV different from traditional cable TV in hotels?',
        a: 'Unlike cable, IPTV uses the hotel’s internet network to deliver high-quality video, interactive services,and custom branding options.' },
      { q: '3. What are the key benefits of using IPTV in hospitality?', 
        a: 'Benefits include HD channels, on-demand content, multi-language support, interactive menus, and integration with hotel services like room service or housekeeping.' },
      { q: '4. Is IPTV legal and safe to use in hotels?', 
        a: 'Yes, when using licensed content and authorized providers, IPTV is completely legal and secure.' },
      { q: '5. Can IPTV be integrated into existing hotel infrastructure?',
        a: ' Yes, most IPTV systems can be integrated with existing LAN/Wi-Fi networks and TVs, minimizing infrastructure costs.' },
    ],
  },
  {
    category: 'Guest Experience & Features',
    questions: [
      { q: '6. Can guests access video-on-demand (VOD) services via IPTV?', 
        a: ' Yes, guests can enjoy movies, shows, and other on-demand content directly from their room.' },
      { q: '7. Does IPTV support multi-language options for international guests?',
        a: ' Yes, most IPTV systems offer multilingual interfaces and channels for global guests.' },
      { q: '8. Can guests stream content from their mobile to the TV?', 
        a: ' Yes, many IPTV solutions support screen casting and streaming apps like YouTube, Netflix (subject to licensing).' },
      { q: '9. Can IPTV systems display custom welcome messages?', 
        a: ' Absolutely! Personalized welcome screens with guest names and hotel branding can be displayed.' },
      { q: '10. Are interactive hotel services (room service, housekeeping) available through IPTV?',
        a: 'Yes, guests can order food, request services, book spa appointments, and more via the IPTV interface.' },
    ],
  },
  {
    category: 'Technical & Installation',
    questions: [
      { q: ' 11. What equipment is required to set up IPTV in a hotel?', 
        a: ' Typically, it includes a server, set-top boxes (if not using smart TVs), middleware, and a stable internet connection.' },
      { q: '12. Is a separate internet connection required for IPTV?',
         a: ' Not always. It can use the hotel’s existing LAN/Wi-Fi, but a high-speed network is recommended for better performance.' },
      { q: ' 13. Can IPTV work on the hotel’s existing network?',
         a: ' Yes, most systems are designed to function with minimal upgrades to current network infrastructure.' },
      { q: '14. How long does it take to install an IPTV system?',
         a: ' Installation time depends on the hotel size, usually ranging from a few days to 2-3 weeks.' },
      { q: ' 15. Is the IPTV system scalable for future upgrades?',
         a: 'Yes, it can be easily upgraded with more channels, features, and integrated services as the hotel grows.' },
     
    ],
  },
  {
    category: 'Billing & Monetization',
    questions: [
      { q: '16. Can hotels charge guests for premium IPTV content?',
         a: 'Yes, you can offer pay-per-view or subscription-based premium content to generate revenue.' },
      { q: '17. Does IPTV support pay-per-view options?',
         a: 'Yes, it allows guests to purchase content on a per-view basis and charges can be added to their room bill.' },
      { q: '18. Is there a subscription cost for IPTV channels?',
         a: ' Yes, subscription costs vary based on the number and type of channels selected. Custom packages are available.' },
      { q: '19. Can hotel owners customize pricing for IPTV services?',
         a: 'Yes, pricing models can be tailored to fit your business strategy and guest expectations.' },
      { q: ' 20. Are there any hidden costs involved?',
         a: 'No, all costs are discussed upfront, including hardware, software licenses, and support plans.' },

    ],
  },
  {
    category: 'Content & Channel Management',
    questions: [
      { q: ' 21. What types of channels can be included in the IPTV package?',
         a: 'Packages can include HD entertainment, news, sports, kids’ content, international channels, and more.' },
      { q: '22. Can IPTV include local, national, and international channels?',
         a: 'Yes, channel bundles can be customized to include a mix of all types.' },
      { q: '23. Is content customizable per room or guest profile?',
         a: 'Yes, IPTV can deliver personalized content based on guest preferences or room category.' },
      { q: '24. Can adult content be restricted or enabled per guest preference?',
         a: ' Yes, adult content can be password protected and managed by the hotel admin or guest settings.' },
      { q: ' 25. Is there support for live TV, movies, and music channels?',
         a: 'Yes, IPTV supports live broadcasting, on-demand movies, and music streaming services.' },
    ],
  },
  {
    category: 'Support & Mintenance',
    questions: [
      { q: '26. What kind of technical support is provided?',
         a: ' We offer full-time remote support, regular system health checks, and on-site assistance when needed.' },
      { q: ' 27. Is 24/7 support available for IPTV issues?',
         a: ' Yes, round-the-clock support is available to ensure uninterrupted service for your guests.' },
      { q: ' 28. How often is the IPTV software updated?',
         a: ' Regular software updates are provided to ensure new features, security patches, and bug fixes.' },
      { q: ' 29. What happens if there’s a power or network outage?',
         a: ' The system is designed to resume automatically. Backup options can also be configured for critical services.' },
      { q: '30. Can the system be remotely monitored and managed?',
         a: 'Yes, hotel admins and providers can monitor and manage the entire system remotely through a dashboard.' },
    ],
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState({});
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const toggleQuestion = (catIndex, qIndex) => {
    const key = `${catIndex}-${qIndex}`;
    setActiveIndex((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title"style={{color:"#333"}}>Got Questions? We’ve Got Answers!</h1>
      {data.map((cat, catIndex) => (
        <div key={catIndex} className="faq-category">
          <h2 className="faq-category-title" style={{color:"#333"}}>{cat.category}</h2>
          <br />
          {cat.questions.map((item, qIndex) => {
            const isOpen = activeIndex[`${catIndex}-${qIndex}`];
            return (
              <div
                key={qIndex}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleQuestion(catIndex, qIndex)}
              >
                <div className="faq-question">{item.q}</div>
                {isOpen && <div className="faq-answer">{item.a}</div>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
