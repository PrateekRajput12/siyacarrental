
import React from 'react';
import { Icons } from '../constants';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  type: 'cab' | 'taxi';
  title: string;
  pricePerKm: number;
  packagePrice: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ type, title, pricePerKm, packagePrice, description }) => {
  const Icon = type === 'cab' ? Icons.Cab : Icons.Taxi;
  const linkPath = type === 'cab' ? '/cab-packages' : '/taxi-packages';

  return (
    <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-4 -top-4 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all"></div>

      <div className="relative z-10">
        <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-2xl flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
          <Icon />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-2">{description}</p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Price per KM</span>
            <span className="text-lg font-bold text-slate-900 dark:text-white">₹{pricePerKm}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Base Fare</span>
            <span className="text-lg font-bold text-slate-900 dark:text-white">{packagePrice}</span>
          </div>
        </div>

        <Link
          to={linkPath}
          className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-yellow-500 text-white dark:text-black py-4 rounded-xl font-bold group-hover:bg-yellow-500 group-hover:text-black transition-all"
        >
          Book Now
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
