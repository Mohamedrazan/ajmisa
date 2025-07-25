import React from 'react';
import './Channel.css';

// Demo channel logos
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';
import logo11 from '../assets/logo11.png';
import logo12 from '../assets/logo12.jpg';
import logo13 from '../assets/logo13.jpg';
import logo14 from '../assets/logo14.jpg';
import logo15 from '../assets/logo15.png';
import logo16 from '../assets/logo16.png';
import logo17 from '../assets/logo17.png';
// import logo18 from '../assets/logo18.png';
// import logo19 from '../assets/logo19.png';
// import logo20 from '../assets/logo20.png';

// Paid channel logos
// import paid1 from '../assets/paid1.png';
// import paid2 from '../assets/paid2.png';
// import paid3 from '../assets/paid3.png';
// import paid4 from '../assets/paid4.png';
// import paid5 from '../assets/paid5.png';
// import paid6 from '../assets/paid6.png';
// import paid7 from '../assets/paid7.png';
// import paid8 from '../assets/paid8.png';

const Channel = () => {
  const demoLogos = [
    logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,
    logo16,logo17
  ];

  const paidLogos = [
    // paid1, paid2, paid3, paid4, paid5,
    // paid6, paid7, paid8,
  ];

  return (
    <div className="channel-container">
      <div className="overlay">
        <div className="channel-content">
          <div className="top-section">
            <h1>TOP FREE CHANNEL</h1>
            <div className="logo-grid">
              {demoLogos.map((logo, index) => (
                <div key={index} className="logo-circle">
                  <img src={logo} alt={`Free Channel ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="buttons">
              <button className="deal-btn">Deal Now</button>
              <button className="try-btn">Try Free</button>
            </div>
          </div>

          <div className="bottom-section">
            <h2>TOP PAID CHANNEL</h2>
            <div className="logo-grid small-grid">
              {paidLogos.map((logo, index) => (
                <div key={index} className="logo-circle small">
                  <img src={logo} alt={`Paid Channel ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
