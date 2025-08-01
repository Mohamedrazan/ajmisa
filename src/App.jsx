import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
import Iptvsection from './components/Iptvsection';
import Footer from './components/Footer';
// import Iptvfeatures from './components/Iptvfeatures';
// import Iptvapp from './components/Iptvapp';
import Splashscreen from './components/Splashscreen';
import Certificates from './components/Certificates';
import Mainherosection from './components/Mainherosection';
import Channelpage from './components/Channelpage';
import ContactUs from './components/Contact';
import Contact from './components/Contact';
import Iptvmovie from './components/Iptvmovie';
import Iptvhotel from './components/Iptvhotel';
import Hotelinfo from './components/Hotelinfo';
import Roomservice from './components/Roomservice';
import Guestinfo from './components/Guestinfo';
import Iptvpromo from './components/Iptvpromo';
import Review from './components/Review';
import ContactPromo from './components/Contactpromo';
// import Herosection from './components/Herosection';

function HomePage() {
  return (
    <>
      <Splashscreen />
      {/* <Herosection/> */}
      {/* <Navbar /> */}
      <Mainherosection/>
      <br /><br />
      <Iptvsection />
       <ContactPromo/>
      <Review/>
      {/* <Iptvfeatures /> */}
      <Iptvpromo/>
      <br />
      {/* <Iptvapp /> */}
      <Footer />
    </>
  );
}

function CertificatesPage() {
  return (
    <>
      {/* <Navbar /> */}
      <Certificates />
      {/* <Footer /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/tv-channels" element={<Channelpage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/movies" element={<Iptvmovie/>} />
        <Route path="/room-service" element={<Iptvhotel/>} />
        <Route path="/hotel-info" element={<Hotelinfo/>} />
        <Route path="/menu" element={<Roomservice/>} />
        <Route path="/guest-info" element={<Guestinfo/>} />



      </Routes>
    </Router>
  );
}

export default App;
