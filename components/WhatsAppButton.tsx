
import React from 'react';
import { Icons, WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group"
      aria-label="Contact on WhatsApp"
    >
      <div className="relative">
        {/* Pulsing effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:scale-125 transition-transform"></div>
        
        <div className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all group-hover:scale-110 active:scale-95 group-hover:rotate-12">
          <Icons.WhatsApp />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Need Help? Chat with us!
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 -ml-1"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
