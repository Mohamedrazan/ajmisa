import React from "react";
import "./Mainherosection.css";
import { Link } from "react-router-dom";
import bgImage from "../../public/resort.jpg";
import logo from "../../public/logo.png"


const icons = [
  { name: "TV Channels", route: "/tv-channels", image: "/assets/icons/tv.png" },
  { name: "Movies", route: "/movies", image: "/assets/icons/movies.png" },
  { name: "Hotel TV", route: "/hotel-tv", image: "/assets/icons/hotel.png" },
  { name: "Hotel Info", route: "/hotel-info", image: "/assets/icons/info.png" },
  { name: "Room Service", route: "/room-service", image: "/assets/icons/room.png" },
  { name: "Guest Info", route: "/guest-info", image: "/assets/icons/guest.png" },
];


export default function Mainherosection() {
  return (
    <div className="iptv-dashboard" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="welcome-text">
        <h2>Mr. John Doe, Welcome</h2>
        <p>
          We hope you enjoy your stay at our hotel. Feel free to explore our
          services for entertainment and relaxation.
        </p>
      </div>

      <div className="iptv-description">
        <p>
          IPTV brings you seamless access to live TV, on-demand movies, hotel
          services, and personalized content—all from the comfort of your room.
        </p>
      </div>

      <div className="icon-grid">
        {icons.map((icon, idx) => (
          <Link to={icon.route} className="icon-button" key={idx}>
            {icon.name}
          </Link>
        ))}
      </div>
    </div>
  );
}