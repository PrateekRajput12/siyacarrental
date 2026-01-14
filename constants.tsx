
import React from 'react';
import { Package } from './types';

export const PHONE_NUMBER = "+918530286538";
export const WHATSAPP_NUMBER = "8530286538"; // No '+' or '00'
export const AGENCY_ADDRESS = "road, Old Market, Madgaon, Goa 403601";

// export const CAB_PACKAGES: Package[] = [
//   {
//     id: 'creta-auto',
//     type: 'cab',
//     title: 'Creta (Automatic)',
//     description: 'Self drive car rental',
//     pricePerKm: 0,
//     baseFare: 3000,
//     features: ['Automatic Transmission', 'Self Drive', 'Per Day Rental'],
//     image: 'https://i.pinimg.com/736x/50/66/0e/50660e2e46c306296a78717fb7231934.jpg',
//     category: 'Car Rental'
//   },
//   {
//     id: 'creta-manual',
//     type: 'cab',
//     title: 'Creta (Manual)',
//     description: 'Self drive car rental',
//     pricePerKm: 0,
//     baseFare: 2500,
//     features: ['Manual Transmission', 'Self Drive', 'Per Day Rental'],
//     image: 'https://i.pinimg.com/1200x/f3/45/d0/f345d0e0ee1dc77e7fb3eb9d367c9e77.jpg',
//     category: 'Car Rental'
//   },
//   {
//     id: 'baleno-manual',
//     type: 'cab',
//     title: 'Baleno (Manual)',
//     description: 'Self drive car rental',
//     pricePerKm: 0,
//     baseFare: 1300,
//     features: ['Manual Transmission', 'Self Drive', 'Per Day Rental'],
//     image: 'https://i.pinimg.com/736x/a1/92/ae/a192ae47b0a1cbcc7974809a7d737918.jpg',
//     category: 'Car Rental'
//   },
//   {
//     id: 'baleno-auto',
//     type: 'cab',
//     title: 'Baleno (Automatic)',
//     description: 'Self drive car rental',
//     pricePerKm: 0,
//     baseFare: 1700,
//     features: ['Automatic Transmission', 'Self Drive', 'Per Day Rental'],
//     image: 'https://i.pinimg.com/1200x/c9/ba/c3/c9bac3eb9a0a9c738de53051e495a08b.jpg',
//     category: 'Car Rental'
//   }
// ];

// export const TAXI_PACKAGES: Package[] = [
//   {
//     id: 'baleno-taxi',
//     type: 'taxi',
//     title: 'Baleno Taxi',
//     description: 'With driver city taxi service',
//     pricePerKm: 0,
//     baseFare: 2800,
//     features: ['8 Hours', '80 KM', 'Driver Included'],
//     image: 'https://i.pinimg.com/736x/a1/92/ae/a192ae47b0a1cbcc7974809a7d737918.jpg',
//     category: 'Taxi Service'
//   },
//   {
//     id: 'ertiga-taxi',
//     type: 'taxi',
//     title: 'Ertiga Taxi',
//     description: 'With driver city taxi service',
//     pricePerKm: 0,
//     baseFare: 3500,
//     features: ['8 Hours', '80 KM', 'Driver Included'],
//     image: 'https://i.pinimg.com/1200x/19/ba/1a/19ba1a3eaef75a0106669bc1c7577ee5.jpg',
//     category: 'Taxi Service'
//   },
//   {
//     id: 'crysta-taxi',
//     type: 'taxi',
//     title: 'Innova Crysta Taxi',
//     description: 'Premium taxi service',
//     pricePerKm: 0,
//     baseFare: 5000,
//     features: ['8 Hours', '80 KM', 'Driver Included'],
//     image: 'https://i.pinimg.com/736x/bb/56/11/bb56115d7a3a77cf886e7a8c9e82106b.jpg',
//     category: 'Taxi Service'
//   },
//   {
//     id: 'dzire-taxi',
//     type: 'taxi',
//     title: 'Swift Dzire Taxi',
//     description: 'Budget-friendly taxi service',
//     pricePerKm: 0,
//     baseFare: 2600,
//     features: ['8 Hours', '80 KM', 'Driver Included'],
//     image: 'https://i.pinimg.com/736x/0b/ac/72/0bac72dc871f8c92d43a1913a1461aaf.jpg',
//     category: 'Taxi Service'
//   }
// ];

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



export const TAXI_PACKAGES: Package[] = [
  {
    id: 'baleno-taxi',
    type: 'taxi',
    title: 'Baleno Taxi',
    description: 'With driver city taxi service',
    pricePerKm: 0,
    baseFare: 2800,
    features: ['8 Hours', '80 KM', 'Driver Included'],
    image: 'https://i.pinimg.com/736x/a1/92/ae/a192ae47b0a1cbcc7974809a7d737918.jpg',
    category: 'Taxi Service'
  },
  {
    id: 'ertiga-taxi',
    type: 'taxi',
    title: 'Ertiga Taxi',
    description: 'With driver city taxi service',
    pricePerKm: 0,
    baseFare: 3500,
    features: ['8 Hours', '80 KM', 'Driver Included'],
    image: 'https://i.pinimg.com/1200x/19/ba/1a/19ba1a3eaef75a0106669bc1c7577ee5.jpg',
    category: 'Taxi Service'
  },
  {
    id: 'crysta-taxi',
    type: 'taxi',
    title: 'Innova Crysta Taxi',
    description: 'Premium city taxi service',
    pricePerKm: 0,
    baseFare: 5000,
    features: ['8 Hours', '80 KM', 'Driver Included'],
    image: 'https://i.pinimg.com/736x/bb/56/11/bb56115d7a3a77cf886e7a8c9e82106b.jpg',
    category: 'Taxi Service'
  },
  {
    id: 'dzire-taxi',
    type: 'taxi',
    title: 'Swift Dzire Taxi',
    description: 'Budget-friendly city taxi service',
    pricePerKm: 0,
    baseFare: 2600,
    features: ['8 Hours', '80 KM', 'Driver Included'],
    image: 'https://i.pinimg.com/736x/0b/ac/72/0bac72dc871f8c92d43a1913a1461aaf.jpg',
    category: 'Taxi Service'
  }
];
export const CAB_PACKAGES: Package[] = [
  {
    id: 'creta-auto',
    type: 'cab',
    title: 'Creta (Automatic)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 3000,
    features: ['Automatic Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/736x/50/66/0e/50660e2e46c306296a78717fb7231934.jpg',
    category: 'Car Rental'
  },
  {
    id: 'creta-manual',
    type: 'cab',
    title: 'Creta (Manual)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 2500,
    features: ['Manual Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/1200x/f3/45/d0/f345d0e0ee1dc77e7fb3eb9d367c9e77.jpg',
    category: 'Car Rental'
  },
  {
    id: 'baleno-manual',
    type: 'cab',
    title: 'Baleno (Manual)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 1300,
    features: ['Manual Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/736x/a1/92/ae/a192ae47b0a1cbcc7974809a7d737918.jpg',
    category: 'Car Rental'
  },
  {
    id: 'baleno-auto',
    type: 'cab',
    title: 'Baleno (Automatic)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 1700,
    features: ['Automatic Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/1200x/66/c1/a2/66c1a24117004645a8c2e012afd5f051.jpg',
    category: 'Car Rental'
  },
  {
    id: 'swift-manual',
    type: 'cab',
    title: 'Swift (Manual)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 1200,
    features: ['Manual Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/736x/b6/4e/bd/b64ebdb90bf220aa9d988d5dc78f1e12.jpg',
    category: 'Car Rental'
  },
  {
    id: 'swift-auto',
    type: 'cab',
    title: 'Swift (Automatic)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 1500,
    features: ['Automatic Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/736x/30/c3/f1/30c3f1f2f6d7081a04d1c3f4843f8e69.jpg',
    category: 'Car Rental'
  },
  {
    id: 'i20-manual',
    type: 'cab',
    title: 'i20 (Manual)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 1400,
    features: ['Manual Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/1200x/b9/dd/c6/b9ddc64a23583eda698fe7ab8bc85ca0.jpg',
    category: 'Car Rental'
  },
  {
    id: 'i20-auto',
    type: 'cab',
    title: 'i20 (Automatic)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 1800,
    features: ['Automatic Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/1200x/96/d4/7c/96d47c42315ee2f43a93b7c27f17bc4a.jpg',
    category: 'Car Rental'
  },
  {
    id: 'ertiga-manual',
    type: 'cab',
    title: 'Ertiga (Manual)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 2000,
    features: ['Manual Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/736x/84/23/e0/8423e06a0bc4f9ba6a70d134afbf8c04.jpg',
    category: 'Car Rental'
  },
  {
    id: 'ertiga-auto',
    type: 'cab',
    title: 'Ertiga (Automatic)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 2400,
    features: ['Automatic Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/736x/8e/77/f1/8e77f1515a70f8cafed72fac8336990a.jpg',
    category: 'Car Rental'
  },
  {
    id: 'crysta-manual',
    type: 'cab',
    title: 'Innova Crysta (Manual)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 2800,
    features: ['Manual Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/1200x/d5/b0/69/d5b069cb7ff31b6cc9261537ad5c4ecb.jpg',
    category: 'Car Rental'
  },
  {
    id: 'crysta-auto',
    type: 'cab',
    title: 'Innova Crysta (Automatic)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 3500,
    features: ['Automatic Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/1200x/ed/c4/36/edc436f5f59f1fd4eac5a7cfe884dd81.jpg',
    category: 'Car Rental'
  },
  {
    id: 'thar-manual',
    type: 'cab',
    title: 'Thar (Manual)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 2800,
    features: ['Manual Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/736x/29/2c/14/292c1409d5f612e6a196d3abe629f8b0.jpg',
    category: 'Car Rental'
  },
  {
    id: 'thar-auto',
    type: 'cab',
    title: 'Thar (Automatic)',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 3500,
    features: ['Automatic Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/736x/b7/56/d5/b756d5d6e168684d9388b0cc4cb6382e.jpg',
    category: 'Car Rental'
  },
  {
    id: 'hycross',
    type: 'cab',
    title: 'Innova Hycross',
    description: 'Self drive car rental',
    pricePerKm: 0,
    baseFare: 3500,
    features: ['Automatic Transmission', 'Self Drive', 'Per Day Rental'],
    image: 'https://i.pinimg.com/1200x/32/5d/12/325d12ace67d80391e6d4e9c9ce64a93.jpg',
    category: 'Car Rental'
  }
];
