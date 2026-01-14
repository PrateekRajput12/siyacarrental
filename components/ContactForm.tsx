
import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { BookingFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic formatting for WhatsApp
    const whatsappMsg = `*New Booking Request*%0A` +
      `------------------------%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Pickup:* ${formData.pickup}%0A` +
      `*Drop:* ${formData.drop}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Message:* ${formData.message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
          <input 
            required
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
          <input 
            required
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            placeholder="+1 234 567 890"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Pickup Location</label>
          <input 
            required
            type="text" 
            name="pickup" 
            value={formData.pickup} 
            onChange={handleChange}
            placeholder="Address or Landmark"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Drop Location</label>
          <input 
            required
            type="text" 
            name="drop" 
            value={formData.drop} 
            onChange={handleChange}
            placeholder="Address or Destination"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Travel Date</label>
        <input 
          required
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message (Optional)</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange}
          rows={4}
          placeholder="Special requirements or package details..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-yellow-500/10"
      >
        Send Booking Request to WhatsApp
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
};

export default ContactForm;
