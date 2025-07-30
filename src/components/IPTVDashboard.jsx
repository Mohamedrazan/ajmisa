import React from 'react';
import './IPTVDashboard.css';
import { FaTv, FaPlayCircle, FaFilm, FaTh, FaSync, FaStream } from 'react-icons/fa';
import { FiSearch, FiBell, FiSettings, FiUser } from 'react-icons/fi';

const IPTVDashboard = () => {
  return (
    <div className="iptv-dashboard">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="logo">IPTV <span>SMARTERS</span></div>
        <div className="date-time">04:06 PM | June 30, 2021</div>
        <div className="top-icons">
          <FiSearch />
          <FiBell />
          <FiUser />
          <FiSettings />
        </div>
      </header>

      {/* Main Content */}
      <div className="card-section">
        <div className="main-cards">
          <div className="card live-tv">
            <FaTv size={40} />
            <h2>LIVE TV</h2>
            <p>Last updated: 3 sec ago</p>
          </div>
          <div className="card movies">
            <FaPlayCircle size={40} />
            <h2>MOVIES</h2>
            <p>Last updated: 1 sec ago</p>
          </div>
          <div className="card series">
            <FaFilm size={40} />
            <h2>SERIES</h2>
            <p>Last updated: 1 sec ago</p>
          </div>
        </div>

        {/* Bottom Options */}
        <div className="bottom-buttons">
          <button><FaStream /> LIVE WITH EPG</button>
          <button><FaTh /> MULTI-SCREEN</button>
          <button><FaSync /> CATCH UP</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>Expiration: Unlimited</p>
        <p>Buy Premium Version</p>
        <p>Logged in: demo</p>
      </footer>
    </div>
  );
};

export default IPTVDashboard;
