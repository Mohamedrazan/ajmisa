import React, { useEffect, useState } from 'react';
import './Splashscreen.css';
import logo from '../../public/macvisionmainlogo.png'; 

const Splashscreen = () => {
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideSplash(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  if (hideSplash) return null;

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <img src={logo} alt="IPTV Logo" className="splash-logo" />
        <h1 className="splash-title">Wlcome to IPTV HUB</h1>
        <div className="pulse-ring"></div>
      </div>
    </div>
  );
};

export default Splashscreen;
