import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Iptvmovie.css";
import { Link } from "react-router-dom";

// Posters
import movie1 from "../assets/titanic.jpg";
import movie2 from "../assets/interstellar.jpg";
import movie3 from "../assets/lifeofpi.jpg";
import movie4 from "../assets/inception.jpg";
import movie5 from "../assets/jumanji.jpg";
import movie6 from "../assets/fastfurious.jpg";
import movie7 from "../assets/passengers.jpg";
import movie8 from "../assets/dune.jpg";
import movie9 from "../assets/mechanic.jpg";
import movie10 from "../assets/independence.jpg";
import movie11 from "../assets/nun.jpg";
import movie12 from "../assets/avatar.jpg";
import movie13 from "../assets/aquaman.jpg";
import movie14 from "../assets/it.jpg";

// Movies with Netflix/YT trailers
const movieData = [
  { id: 1, title: "Titanic", image: movie1, link: "https://www.netflix.com/title/1181568", trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ" },
  { id: 2, title: "Interstellar", image: movie2, link: "https://www.netflix.com/title/70305903", trailer: "https://www.youtube.com/embed/zSWdZVtXT7E" },
  { id: 3, title: "Life of Pi", image: movie3, link: "https://www.netflix.com/title/70217905", trailer: "https://www.youtube.com/embed/j9Hjrs6WQ8M" },
  { id: 4, title: "Inception", image: movie4, link: "https://www.netflix.com/title/70131314", trailer: "https://www.youtube.com/embed/YoHD9XEInc0" },
  { id: 5, title: "Jumanji", image: movie5, link: "https://www.netflix.com/title/80192646", trailer: "https://www.youtube.com/embed/2QKg5SZ_35I" },
  { id: 6, title: "Fast & Furious", image: movie6, link: "https://www.netflix.com/title/70021642", trailer: "https://www.youtube.com/embed/FUK2kdPsBws" },
  { id: 7, title: "Passengers", image: movie7, link: "https://www.netflix.com/title/80101701", trailer: "https://www.youtube.com/embed/7BWWWQzTpNU" },
  { id: 8, title: "Dune", image: movie8, link: "https://www.netflix.com/title/81069398", trailer: "https://www.youtube.com/embed/8g18jFHCLXk" },
  { id: 9, title: "Mechanic", image: movie9, link: "https://www.netflix.com/title/80092834", trailer: "https://www.youtube.com/embed/XGk2EfbD_Ps" },
  { id: 10, title: "Independence Day", image: movie10, link: "https://www.netflix.com/title/60023070", trailer: "https://www.youtube.com/embed/B1E7h3SeMDk" },
  { id: 11, title: "The Nun", image: movie11, link: "https://www.netflix.com/title/80210911", trailer: "https://www.youtube.com/embed/pzD9zGcUNrw" },
  { id: 12, title: "Avatar", image: movie12, link: "https://www.netflix.com/title/70125612", trailer: "https://www.youtube.com/embed/5PSNL1qE6VY" },
  { id: 13, title: "Aquaman", image: movie13, link: "https://www.netflix.com/title/81012335", trailer: "https://www.youtube.com/embed/WDkg3h8PCVU" },
  { id: 14, title: "IT", image: movie14, link: "https://www.netflix.com/title/80170653", trailer: "https://www.youtube.com/embed/xKJmEC5ieOk" },
];

const navLinks = [
  { label: "Products", path: "/products" },
  { label: "Our Services", path: "/services" },
  { label: "Our Client", path: "/client" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact Us", path: "/contact" },
];

const IptvMovie = () => {
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredMovies = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="iptv-page"
      initial={{ opacity: 0, y: 50 }}   // 👈 start
      animate={{ opacity: 1, y: 0 }}    // 👈 animate to
      exit={{ opacity: 0, y: -50 }}     // 👈 exit animation
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Navbar */}
      <div className="iptv-navbar iptv-animate-navbar">
        <img src="./macvisionmainlogo.png" alt="Logo" className="iptv-logo-image" />
        <div className="iptv-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <div className={`iptv-nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="iptv-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="iptv-fullscreen">
        {/* Hero Section */}
        <motion.header
          className="iptv-header"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Movie Hub</h1>
          <p>Stream blockbuster movies directly with our IPTV hospitality solution</p>
          <input
            type="text"
            className="iptv-search"
            placeholder=" Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.header>

        {/* Movies Grid */}
        <motion.div
          className="iptv-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {filteredMovies.map((movie) => (
            <motion.div
              key={movie.id}
              className="iptv-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedMovie(movie)}
            >
              <div className="iptv-poster">
                <img src={movie.image} alt={movie.title} />
              </div>
              <h3>{movie.title}</h3>
              <p>HD | 120 mins</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Popup Trailer Modal */}
        {selectedMovie && (
          <motion.div
            className="iptv-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="iptv-modal-content">
              <span className="iptv-close" onClick={() => setSelectedMovie(null)}>
                &times;
              </span>
              <h2>{selectedMovie.title} - Trailer</h2>
              <iframe
                src={selectedMovie.trailer}
                title={selectedMovie.title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <a
                href={selectedMovie.link}
                target="_blank"
                rel="noopener noreferrer"
                className="iptv-watch-btn"
              >
                Watch on Netflix
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default IptvMovie;
