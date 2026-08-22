import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top on route change & Update document title
function RouteHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Title & Meta management per SEO prompt guidelines
    switch (pathname) {
      case '/':
        document.title = 'Komal Beauty Salon | Beauty Salon in Loni Kalbhor, Pune';
        break;
      case '/services':
        document.title = 'Beauty Services | Komal Beauty Salon';
        break;
      case '/about':
        document.title = 'About Komal Beauty Salon | Loni Kalbhor';
        break;
      case '/gallery':
        document.title = 'Salon Gallery | Komal Beauty Salon';
        break;
      case '/contact':
        document.title = 'Contact Komal Beauty Salon | Loni Kalbhor';
        break;
      default:
        document.title = 'Komal Beauty Salon';
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
