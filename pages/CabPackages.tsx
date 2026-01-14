
import React, { useEffect } from 'react';
import PackageGrid from '../components/PackageGrid';
import { CAB_PACKAGES } from '../constants';

const CabPackages: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Exclusive <span className="text-yellow-500">Cab Packages</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            From daily city commutes to full-day luxury sightseeing, our cab services are designed to give you comfort at every turn.
          </p>
        </div>

        <PackageGrid packages={CAB_PACKAGES} title="Cab Offers" />

        <div className="mt-24 bg-yellow-500 rounded-3xl p-12 text-black flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-black/80 font-medium">Talk to us for monthly subscriptions or corporate event fleet management.</p>
          </div>
          <a href="/contact" className="relative z-10 bg-black text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl">
            Request Custom Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default CabPackages;
