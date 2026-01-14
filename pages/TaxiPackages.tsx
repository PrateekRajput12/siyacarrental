
import React, { useEffect } from 'react';
import PackageGrid from '../components/PackageGrid';
import { TAXI_PACKAGES } from '../constants';

const TaxiPackages: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Punctual <span className="text-yellow-500">Taxi Solutions</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Swift and reliable taxi services for your immediate needs. Outstation travel, airport transfers, or simple door-to-door transit.
          </p>
        </div>

        <PackageGrid packages={TAXI_PACKAGES} title="Taxi Deals" />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Airport Ready', desc: 'Pre-book your taxi for guaranteed on-time airport arrivals.', icon: '✈️' },
            { title: 'Outstation Travel', desc: 'Experienced highway drivers for safe long-distance trips.', icon: '🛣️' },
            { title: '24/7 Dispatch', desc: 'Our team is always awake to ensure your ride arrives.', icon: '🌙' }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxiPackages;
