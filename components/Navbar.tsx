
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons, PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldShowDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    if (shouldShowDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cab Packages', path: '/cab-packages' },
    { name: 'Taxi Packages', path: '/taxi-packages' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Logic for text colors based on scroll and theme
  const getTextColor = () => {
    if (scrolled) return 'text-slate-800 dark:text-white';
    return 'text-white'; // On hero section, we always want white text against the dark overlay
  };

  const getLinkColor = (path: string) => {
    const isActive = location.pathname === path;
    if (isActive) return 'text-yellow-500 font-bold';
    if (scrolled) return 'text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400';
    return 'text-slate-100 hover:text-yellow-400';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-200 dark:border-slate-800' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`p-2 rounded-xl transition-all duration-300 ${scrolled ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'bg-yellow-400 text-black'}`}>
              <Icons.Cab />
            </div>
            <span className={`text-2xl font-black tracking-tight transition-colors duration-300 ${getTextColor()}`}>
              Siya<span className="text-yellow-500">Car</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-200 relative group py-1 ${getLinkColor(link.path)}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l border-slate-300/30 dark:border-slate-700/30 pl-8">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 border ${scrolled ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700' : 'bg-white/10 border-white/20 hover:bg-white/20'} text-lg`}
                aria-label="Toggle Theme"
              >
                {isDark ? '☀️' : '🌙'}
              </button>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 flex items-center gap-2 text-sm"
              >
                <Icons.Phone />
                <span className="hidden lg:inline">Book Now</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${scrolled ? 'bg-slate-100 dark:bg-slate-800' : 'bg-white/10'}`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="mx-4 mt-2 bg-white dark:bg-slate-900 shadow-2xl rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-4 text-base font-bold rounded-2xl transition-all ${location.pathname === link.path
                  ? 'bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-500'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-3 w-full bg-yellow-500 text-black py-4 rounded-2xl font-black shadow-lg shadow-yellow-500/20 active:scale-95 transition-transform"
              >
                <Icons.Phone /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
