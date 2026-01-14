
import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Icons, CAB_PACKAGES, TAXI_PACKAGES, AGENCY_ADDRESS } from '../constants';
import PackageGrid from '../components/PackageGrid';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  // Public demonstration embed URL consistent with Contact page
  const publicEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492637.2072258353!2d73.34791598906253!3d15.282612199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb375b0c4e039%3A0x65de006bb06713d9!2sSiya%20Car%20Rental%20goa!5e0!3m2!1sen!2sin!4v1768377723052!5m2!1sen!2sin`;

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Premium Services</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Whether it's a quick trip to the mall or a long-distance journey, we have the perfect ride for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-20">
            <ServiceCard
              type="cab"
              title="Cab Services"
              description="High-end sedans and SUVs for city travel, events, and hourly bookings."
              pricePerKm={12}
              packagePrice="Starting at ₹1200"
            />
            <ServiceCard
              type="taxi"
              title="Taxi Services"
              description="Fast, reliable taxi rides for immediate travel and outstation destinations."
              pricePerKm={10}
              packagePrice="Starting at ₹2000"
            />
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section id="packages" className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Packages</h2>
              <p className="text-slate-600 dark:text-slate-400">Save more with our curated travel bundles.</p>
            </div>
            <div className="flex gap-4">
              <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-bold">Limited Time Offers</span>
            </div>
          </div>

          <PackageGrid packages={[...CAB_PACKAGES, ...TAXI_PACKAGES].slice(0, 3)} title="All Packages" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/travel1/400/500" alt="Travel" className="rounded-3xl shadow-lg w-full h-64 object-cover" />
                  <img src="https://picsum.photos/seed/travel2/400/300" alt="Car" className="rounded-3xl shadow-lg w-full h-48 object-cover" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="https://picsum.photos/seed/travel3/400/300" alt="Driver" className="rounded-3xl shadow-lg w-full h-48 object-cover" />
                  <img src="https://picsum.photos/seed/travel4/400/500" alt="Destination" className="rounded-3xl shadow-lg w-full h-64 object-cover" />
                </div>
              </div>
              {/* Badge Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-8 rounded-3xl shadow-2xl flex flex-col items-center">
                <span className="text-4xl font-extrabold">12+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-center">Years of Experience</span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  We Make Every Journey <span className="text-yellow-500">Safe and Comfortable</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  SiyaCar has been at the forefront of passenger safety for over a decade. We don't just provide a ride; we provide peace of mind.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Icons.Tag, title: 'Affordable Pricing', desc: 'No hidden charges. Clear upfront pricing for every trip.' },
                  { icon: Icons.Shield, title: 'Clean & Safe', desc: 'Regularly sanitized vehicles and mandatory safety protocols.' },
                  { icon: Icons.Cab, title: 'Professional Drivers', desc: 'Vetted, experienced drivers who know the city well.' },
                  { icon: Icons.Clock, title: '24/7 Availability', desc: 'Always on call, day or night, rain or shine.' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="shrink-0 w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-xl flex items-center justify-center">
                      <feature.icon />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4 block">Reservation</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Book Your Ride in <span className="text-yellow-500 text-gradient">Seconds</span></h2>
              <p className="text-slate-400 text-lg mb-12">
                Fill out the form and our team will coordinate with you via WhatsApp instantly to confirm your booking and driver details.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all">
                    <Icons.Phone />
                  </div>
                  <div>
                    <span className="block text-slate-500 text-sm">Call for Booking</span>
                    <a href="tel:+1234567890" className="text-xl font-bold hover:text-yellow-500 transition-colors">+1 234 567 890</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                    <Icons.WhatsApp />
                  </div>
                  <div>
                    <span className="block text-slate-500 text-sm">WhatsApp Chat</span>
                    <a href="https://wa.me/1234567890" className="text-xl font-bold hover:text-green-500 transition-colors">Start Chat Now</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[40px] shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Find Us</h2>
            <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {AGENCY_ADDRESS}
            </p>
          </div>

          <div className="h-[450px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-100 dark:border-slate-800">
            <iframe
              title="Agency Location Main Map"
              src={publicEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 dark:invert-[0.9] dark:hue-rotate-180 transition-all duration-1000"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
