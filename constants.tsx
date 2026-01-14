
import React from 'react';
import { Package } from './types';

export const PHONE_NUMBER = "+918421206738";
export const WHATSAPP_NUMBER = "8421206738"; // No '+' or '00'
export const AGENCY_ADDRESS = "123 Transit Ave, Suite 400, New York, NY 10001";

export const CAB_PACKAGES: Package[] = [
  {
    id: 'cab-full-day',
    type: 'cab',
    title: 'Full Day City Tour',
    description: 'Explore the city comfortably for up to 8 hours.',
    pricePerKm: 12,
    baseFare: 1500,
    features: ['8 Hours / 80km', 'A/C Vehicle', 'Professional Guide (Optional)'],
    image: 'https://picsum.photos/seed/cab1/800/600',
    category: 'City Tour'
  },
  {
    id: 'cab-airport',
    type: 'cab',
    title: 'Airport Transfer',
    description: 'Punctual pickup and drop from the airport.',
    pricePerKm: 15,
    baseFare: 800,
    features: ['Real-time tracking', 'Luggage assistance', 'Flight monitoring'],
    image: 'https://picsum.photos/seed/cab2/800/600',
    category: 'Transfer'
  }
];

export const TAXI_PACKAGES: Package[] = [
  {
    id: 'taxi-outstation',
    type: 'taxi',
    title: 'Intercity One Way',
    description: 'Safe and comfortable taxi for long-distance travel.',
    pricePerKm: 10,
    baseFare: 2000,
    features: ['GPS Enabled', 'Newer Models', 'Expert Highway Drivers'],
    image: 'https://picsum.photos/seed/taxi1/800/600',
    category: 'Outstation'
  },
  {
    id: 'taxi-business',
    type: 'taxi',
    title: 'Business Executive',
    description: 'Premium sedans for corporate travel needs.',
    pricePerKm: 18,
    baseFare: 1200,
    features: ['Luxury Sedan', 'Wi-Fi on board', 'Bottled water'],
    image: 'https://picsum.photos/seed/taxi2/800/600',
    category: 'Business'
  }
];

export const Icons = {
  Cab: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
  ),
  Taxi: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="10" rx="2" /><path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" /><path d="M21 15h1" /><path d="M2 15h1" /><path d="M10 16h4" /><circle cx="7" cy="20" r="2" /><circle cx="17" cy="20" r="2" /></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  ),
  WhatsApp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.2h.1l3.3-3.3L21 11.5z" /><path d="M11 9.5a2.5 2.5 0 0 1 2 2" /><path d="M10 14h.01" /><path d="M14 10h.01" /></svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
  ),
  Tag: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" /><path d="M7 7h.01" /></svg>
  )
};
