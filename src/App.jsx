import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Iptvsection from './components/Iptvsection';
import Channel from './components/Channel';
import Footer from './components/Footer';
import Iptvfeatures from './components/Iptvfeatures';
import Iptvapp from './components/Iptvapp';
import Splashscreen from './components/Splashscreen';
import Certificates from './components/Certificates';

function HomePage() {
  return (
    <>
      <Splashscreen />
      <Navbar />
      <Iptvsection />
      <Iptvfeatures />
      <Channel />
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
      </Routes>
    </Router>
  );
}

export default App;
