
import React from 'react';
import { Package } from '../types';
import { Link } from 'react-router-dom';

interface PackageGridProps {
  packages: Package[];
  title: string;
}

const PackageGrid: React.FC<PackageGridProps> = ({ packages, title }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg) => (
        <div 
          key={pkg.id} 
          className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col group"
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src={pkg.image} 
              alt={pkg.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {pkg.category}
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{pkg.description}</p>
            
            <ul className="space-y-2 mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <div>
                <span className="block text-xs text-slate-400 uppercase font-semibold">Starting From</span>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">${pkg.baseFare}</span>
              </div>
              <Link 
                to={`/contact?package=${pkg.id}`}
                className="bg-slate-100 dark:bg-slate-700 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-black p-3 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageGrid;
