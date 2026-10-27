import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhone, LuX } from 'react-icons/lu';
import { companyInfo } from '../data/companyData';

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal only after scrolling past the hero section (> 350px)
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
        setOpen(false); // Close dropdown if user scrolls back to top hero
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 transition-all duration-500 ease-out ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Quick Contact Popup */}
      {open && (
        <div className="s-card p-5 w-64 shadow-2xl bg-white border border-[rgba(30,22,21,0.12)] animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-[rgba(30,22,21,0.06)]">
            <div className="flex items-center gap-1.5">
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span className="text-xs font-bold text-[#1A1208] uppercase tracking-tight">Quick Contact</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-6 h-6 rounded-full bg-[#FFF7EC] hover:bg-[#F5EDD8] flex items-center justify-center transition-colors"
            >
              <LuX className="w-3.5 h-3.5 text-[#1A1208]" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold hover:bg-[#25D366] hover:text-white transition-all shadow-xs group"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover:text-white shrink-0 transition-colors" />
              <span>WhatsApp Us Now</span>
            </a>

            <a
              href={`tel:${companyInfo.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.1)] text-[#1A1208] text-xs font-semibold hover:bg-[#F5EDD8] transition-colors"
            >
              <LuPhone className="w-4 h-4 shrink-0 text-[#F45F02]" />
              <span className="font-mono">{companyInfo.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Real WhatsApp Floating Action Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="WhatsApp"
        title="Direct WhatsApp Support"
      >
        {/* Subtle Ping Beacon */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
        
        {/* Real WhatsApp Icon */}
        <FaWhatsapp className="w-7 h-7 text-white fill-current transition-transform duration-300 group-hover:rotate-12" />
      </button>
    </div>
  );
}
