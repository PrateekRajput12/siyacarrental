
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import CabPackages from './pages/CabPackages';
import TaxiPackages from './pages/TaxiPackages';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cab-packages" element={<CabPackages />} />
            <Route path="/taxi-packages" element={<TaxiPackages />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
