import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
import Iptvsection from './components/Iptvsection';
import Footer from './components/Footer';
// import Iptvfeatures from './components/Iptvfeatures';
import Iptvapp from './components/Iptvapp';
import Splashscreen from './components/Splashscreen';
import Certificates from './components/Certificates';
import Mainherosection from './components/Mainherosection';
import Channelpage from './components/Channelpage';
import ContactUs from './components/Contact';
import Contact from './components/Contact';
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
      {/* <Iptvfeatures /> */}
      <Iptvapp />
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


      </Routes>
    </Router>
  );
}

export default App;
