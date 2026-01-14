
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <div className="bg-yellow-400 p-2 rounded-lg text-black">
                <Icons.Cab />
              </div>
              <span className="text-2xl font-bold">Siya<span className="text-yellow-500">Car</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading provider of safe, reliable, and affordable taxi services. Committed to excellence in passenger transportation since 2010.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/cab-packages" className="hover:text-yellow-400 transition-colors">Cab Packages</Link></li>
              <li><Link to="/taxi-packages" className="hover:text-yellow-400 transition-colors">Taxi Packages</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Airport Pickup & Drop</li>
              <li>Corporate Travel</li>
              <li>Outstation One Way</li>
              <li>Full Day City Hire</li>
              <li>Wedding Transportation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Icons.Phone />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-yellow-400 transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3">
                <Icons.WhatsApp />
                <span className="text-slate-400">Available 24/7 on WhatsApp</span>
              </li>
              <li className="pt-4">
                <p className="text-xs text-slate-500 italic">"Safe travels start with us."</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SiyaCar Cab Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
