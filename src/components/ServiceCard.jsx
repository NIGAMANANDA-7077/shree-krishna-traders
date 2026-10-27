import React from 'react';
import { LuMessageSquare, LuCircleCheck, LuArrowUpRight, LuBuilding2 } from 'react-icons/lu';
import { companyInfo } from '../data/companyData';

export default function ServiceCard({ service, onQuoteClick }) {
  const whatsappUrl = `https://wa.me/919437564007?text=${encodeURIComponent(
    `Hello Shree Krishna Traders, I have an enquiry regarding ${service.title}. Please provide details and pricing.`
  )}`;

  return (
    <div className="s-card overflow-hidden flex flex-col h-full group bg-white border border-[rgba(30,22,21,0.08)] hover:border-[#F45F02]/40 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#F5EDD8] rounded-t-[1.5rem]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 left-3">
          <span className="s-pill text-[10px] bg-white/95 backdrop-blur-sm shadow-sm border border-[rgba(30,22,21,0.08)] font-mono">
            <span className="text-[#F45F02] font-black">#{service.serviceNumber}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="s-pill-orange text-[9px] mb-3 self-start font-mono tracking-wider">
          {service.tagline}
        </div>

        <h3 className="font-display font-black text-lg text-[#2D2115] uppercase tracking-tight mb-2 group-hover:text-[#F45F02] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs text-[#6B5A49] leading-relaxed mb-4">
          {service.shortDesc}
        </p>

        {/* Features Checklist */}
        <div className="space-y-2 mb-5 py-3 border-y border-[rgba(30,22,21,0.06)] bg-[#FFFDF9] -mx-2 px-3 rounded-xl">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#9A8470] font-bold">
            Key Execution Deliverables:
          </div>
          <ul className="space-y-1.5">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-[11px] text-[#4A3B2C] leading-snug">
                <LuCircleCheck className="w-3.5 h-3.5 text-[#F45F02] shrink-0 mt-0.5 stroke-[2.5]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Scope Note */}
        {service.scope && (
          <div className="flex items-start gap-1.5 text-[10px] text-[#8C7A68] mb-5">
            <LuBuilding2 className="w-3.5 h-3.5 text-[#F45F02] shrink-0 mt-0.5" />
            <span className="leading-tight"><strong className="text-[#52432E]">Scope:</strong> {service.scope}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          <button
            onClick={() => onQuoteClick(service.title)}
            className="cssbuttons-io btn-sm flex-1 justify-center"
          >
            <span>
              Request Quote
              <LuArrowUpRight className="w-3.5 h-3.5 ml-1 stroke-[2.5]" />
            </span>
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bubbles btn-sm justify-center"
            title="Enquire on WhatsApp"
          >
            <span /><span /><span /><span /><span />
            <span>
              <LuMessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-current" />
              <span className="hidden sm:inline">WhatsApp</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
