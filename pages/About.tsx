
import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Subpage Hero */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">About <span className="text-yellow-500">SiyaCar</span></h1>
          <p className="text-slate-400 text-lg md:text-xl">
            Since 2010, we've been redefining what it means to travel with comfort, safety, and reliability.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img
                src="https://picsum.photos/seed/about-img/800/1000"
                alt="Our Fleet"
                className="rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-10 -right-10 bg-yellow-500 p-10 rounded-3xl hidden md:block">
                <p className="text-black font-bold text-xl">1M+ Happy Rides</p>
                <p className="text-black/60 text-sm">And counting...</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Vision & Mission</h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  At SiyaCar, we believe that transportation is more than just getting from point A to point B. It's about the safety of our passengers, the livelihood of our drivers, and the memories created during the journey.
                </p>
                <p>
                  Founded by a group of travel enthusiasts, we noticed a gap in the market for reliable, punctual, and transparent cab services. Today, we manage a fleet of over 200 vehicles ranging from economical hatchbacks to luxury executive sedans.
                </p>
                <p>
                  Our mission is to become the most trusted travel partner for millions by leveraging technology and maintaining a human touch in customer service.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <p className="text-3xl font-bold text-yellow-500 mb-1">200+</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Vehicles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-500 mb-1">500+</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Drivers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-500 mb-1">50+</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Cities Covered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-500 mb-1">4.9/5</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Avg Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16">The Values We Live By</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Transparency', desc: 'Clear billing, no hidden fees, and honest communication at every step.' },
              { title: 'Safety First', desc: 'Verified drivers, GPS tracking, and SOS features for every single ride.' },
              { title: 'Innovation', desc: 'Constantly improving our fleet and booking experience through modern technology.' }
            ].map((value, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 mx-auto mb-6">
                  <span className="text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
