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
import Contact from './components/Contact';
import Iptvmovie from './components/Iptvmovie';
import Iptvhotel from './components/Iptvhotel';
import Hotelinfo from './components/Hotelinfo';
import Roomservice from './components/Roomservice';
import Guestinfo from './components/Guestinfo';
import Review from './components/Review';
import ContactPromo from './components/Contactpromo';
import IPTVDetails from './components/IPTVDetails';
import Ourclient from './components/Ourclient';
import OurServices from './components/Ourservice';
import Solutions from './components/Solutions';
import FAQ from './components/FAQ';
import FAQPage from './components/FAQPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import HelpCenter from './components/HelpCenter';
import Help from './components/Help';
import RequestDemo from './components/RequestDemo';
// import TestimonialPage from './components/TestimonialPage';
import IPTVPage from './components/IPTVPage';
import VODPage from './components/VODPage';
import DigitalSignagePage from './components/DigitalSignagePage';
import AnalyticsPage from './components/AnalyticsPage';
import CloudHybridPage from './components/CloudHybridPage';
import SupportPage from './components/SupportPage';
import GetIPTVAccess from './components/GetIPTVAccess';
import ContactUs from './components/ContactUs';
import MobileAppDevelopment from './components/MobileAppDevelopment';
import WebDesigning from './components/WebDesigning';
import Iptvintro from './components/Iptvintro';
import Product from './components/Product';
import SmartMiddleware from './components/SmartMiddleware';
// import Herosection from './components/Herosection';

function HomePage() {
  return (
    <>
      {/* <Splashscreen /> */}
      {/* <Herosection/> */}
      {/* <Navbar /> */}
      <Mainherosection/>
      <Iptvintro/>
      <IPTVDetails/>
      <Iptvsection />

      <Solutions/>
      <SmartMiddleware/>
      <ContactPromo/>

      <FAQ/>
      {/* <Help/> */}
      {/* <TestimonialPage/> */}

      <br /><br />
        {/* <BookDemo/> */}
      <Review/>
      {/* <Iptvfeatures /> */}
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
        <Route path="/guest-info" element={<Guestinfo/>} />\
        <Route path="/products" element={<Product />} />
        <Route path="/client" element={<Ourclient/>} />
        <Route path="/services" element={<OurServices/>} />
        <Route path="/faq" element={<FAQPage/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-conditions" element={<TermsAndConditions/>} />
        <Route path="/help-center" element={<HelpCenter/>} />
        <Route path="/request-demo" element={<RequestDemo/>} />
        <Route path="/iptv" element={<IPTVPage/>} />
        <Route path="/vod" element={<VODPage/>} />
        <Route path="/digital-signage" element={<DigitalSignagePage/>} />
        <Route path="/analytics" element={<AnalyticsPage/>} />
        <Route path="/cloud-hybrid" element={<CloudHybridPage/>} />
        <Route path="/support" element={<SupportPage/>} />
        <Route path="/get-iptv-access" element={<GetIPTVAccess />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/mobile-app" element={<MobileAppDevelopment />} />
        <Route path="/web-design" element={<WebDesigning />} />

      </Routes>
    </Router>
  );
}

export default App;
