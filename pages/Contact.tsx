
import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { Icons, PHONE_NUMBER, AGENCY_ADDRESS } from '../constants';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Public demonstration embed URL for a static location (Empire State Building as proxy)
  const publicEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175436659793!2d-73.985428!3d40.748441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625682000000!5m2!1sen!2sus`;

  return (
    <div className="pt-20">
      <section className="bg-yellow-500 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black">Get In Touch</h1>
        <p className="text-black/70 mt-4 text-lg">We're here to help with your travel needs 24/7.</p>
      </section>

      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Office Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-400 p-3 rounded-xl text-black">
                      <Icons.Phone />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                      <a href={`tel:${PHONE_NUMBER}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-yellow-500 transition-colors">
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-400 p-3 rounded-xl text-black">
                      <Icons.WhatsApp />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">WhatsApp</p>
                      <a href="https://wa.me/1234567890" className="text-lg font-bold text-slate-900 dark:text-white hover:text-green-500 transition-colors">
                        Chat with Support
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-400 p-3 rounded-xl text-black">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        {AGENCY_ADDRESS}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map with aesthetic container */}
              <div className="h-80 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform lg:rotate-1 transition-transform hover:rotate-0 duration-500">
                <iframe
                  title="Agency Location Map"
                  src={publicEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 dark:invert-[0.9] dark:hue-rotate-180 transition-all duration-700"
                ></iframe>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-700">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Send us a Message</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-10">We usually respond within 5 minutes on WhatsApp.</p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
