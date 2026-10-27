import React from 'react';
import { Link } from 'react-router-dom';
import { LuShieldCheck, LuArrowRight } from 'react-icons/lu';
import { brands } from '../data/companyData';

export default function BrandStrip({ showFullGrid = false }) {
  if (showFullGrid) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="p-6 bg-industrial-900 border border-industrial-800 hover:border-accent/40 rounded-sm transition-all group hover:bg-industrial-850 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-extrabold text-xl text-white tracking-tight group-hover:text-accent transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 uppercase px-2 py-0.5 bg-industrial-800 rounded">
                  Authorized
                </span>
              </div>
              <h4 className="text-xs font-semibold text-slate-300 mb-2">
                {brand.role}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {brand.description}
              </p>
            </div>

            <div className="pt-3 border-t border-industrial-800/80">
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5">
                Core Offerings
              </span>
              <div className="flex flex-wrap gap-1">
                {brand.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 bg-industrial-800/80 text-slate-300 rounded border border-white/5"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Horizontal clean industrial ticker & cards for homepage
  return (
    <div className="w-full bg-industrial-900/60 border-y border-industrial-800/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <LuShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Trusted Industry Partners & Authorized Brands
            </span>
          </div>
          <Link
            to="/brands"
            className="text-xs font-mono text-accent hover:underline flex items-center space-x-1 group"
          >
            <span>Explore All Brand Specifications</span>
            <LuArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Clean Responsive Logo / Brand Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to="/brands"
              className="p-3.5 bg-industrial-850/90 hover:bg-industrial-800 border border-industrial-700/60 hover:border-accent/40 rounded flex flex-col items-center justify-center text-center transition-all group"
            >
              <span className="font-display font-bold text-sm sm:text-base text-slate-200 group-hover:text-accent transition-colors">
                {brand.name}
              </span>
              <span className="text-[9px] font-mono text-slate-500 mt-0.5 uppercase tracking-tighter truncate w-full">
                {brand.specialties[0]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
