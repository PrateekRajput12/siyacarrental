
import React from 'react';
import { Icons, PHONE_NUMBER, WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    // <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554672408-730436b60dde?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Cab"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-yellow-500 text-black rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Reliable • Affordable • Safe
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Reliable Cab & Taxi Services at <span className="text-yellow-400">Best Prices</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl">
            Experience premium comfort and punctual arrivals. From city tours to outstation trips, we've got your journey covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-yellow-500/20 active:scale-95"
            >
              <Icons.Phone />
              Book via Call
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Icons.WhatsApp />
              WhatsApp Now
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              24/7 Available
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Verified Drivers
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Safe Rides
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
