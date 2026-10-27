import React from 'react';
import { Link } from 'react-router-dom';
import { LuPhone, LuMail, LuMapPin, LuArrowUpRight, LuMessageSquare } from 'react-icons/lu';
import { companyInfo, productCategories, services } from '../data/companyData';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-20 s-section-sand border-t border-[rgba(30,22,21,0.1)]">
      {/* Top strip CTA */}
      <div className="border-b border-[rgba(30,22,21,0.08)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <div className="s-pill mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
              <span>INDUSTRIAL SUPPLY PARTNER — ODISHA</span>
            </div>
            <h2 className="s-heading text-4xl sm:text-6xl text-[#2D241C]">
              SHREE KRISHNA<br /><span className="text-[#F45F02]">TRADERS.</span>
            </h2>
            <p className="mt-3 text-sm text-[#9A8470] max-w-md">
              Your dependable industrial procurement &amp; site supply partner in Cuttack, Odisha.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cssbuttons-io btn-sm text-sm"
            >
              <span>
                <LuMessageSquare className="w-4 h-4 mr-1.5 stroke-[2]" />
                WhatsApp Us
              </span>
            </a>
            <a href={`tel:${companyInfo.primaryPhone}`} className="btn-bubbles btn-sm text-sm">
              <span /><span /><span /><span /><span />
              <span>
                <LuPhone className="w-4 h-4 text-[#F45F02]" />
                {companyInfo.primaryPhone}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand block */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo/skt-emblem.png"
              alt="Shree Krishna Traders Logo"
              className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(234,179,8,0.25)] group-hover:rotate-12 transition-transform duration-300 shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-base text-[#2D241C] uppercase tracking-tight leading-none group-hover:text-[#F45F02] transition-colors">
                SHREE KRISHNA TRADERS
              </span>
              <span className="text-[10px] font-mono text-[#9A8470] uppercase mt-1">
                Prop: {companyInfo.proprietor}
              </span>
            </div>
          </Link>
          <p className="text-xs text-[#5C4D3E] leading-relaxed italic border-l-2 border-[#F45F02]/40 pl-3">
            "{companyInfo.tagline}"
          </p>
          <p className="text-xs text-[#9A8470] leading-relaxed">
            Industrial supply and trading company based in Madhupatna, Cuttack — serving infrastructure, fabrication, and construction across Odisha.
          </p>
          <div className="space-y-1 text-[10px] font-mono text-[#9A8470]">
            <div><span className="text-[#5C4D3E]">GSTIN:</span> {companyInfo.gstin}</div>
            <div><span className="text-[#5C4D3E]">UDYAM:</span> {companyInfo.udyam}</div>
          </div>
        </div>

        {/* Product categories */}
        <div>
          <h4 className="font-display font-black text-xs text-[#2D241C] uppercase tracking-widest mb-4">Products</h4>
          <ul className="space-y-2">
            {productCategories.slice(0, 7).map(c => (
              <li key={c.id}>
                <Link to={`/products/${c.id}`} className="text-xs text-[#9A8470] hover:text-[#F45F02] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F45F02] font-mono text-[9px]">{c.categoryNumber}</span>
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="text-[10px] text-[#F45F02] hover:underline font-bold flex items-center gap-1">
                View All <LuArrowUpRight className="w-3 h-3" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-black text-xs text-[#2D241C] uppercase tracking-widest mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map(s => (
              <li key={s.id}>
                <Link to="/services" className="text-xs text-[#9A8470] hover:text-[#F45F02] transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2">
            <Link to="/about" className="block text-xs text-[#9A8470] hover:text-[#F45F02] transition-colors">About Us</Link>
            <Link to="/brands" className="block text-xs text-[#9A8470] hover:text-[#F45F02] transition-colors">Authorized Brands</Link>
            <Link to="/gallery" className="block text-xs text-[#9A8470] hover:text-[#F45F02] transition-colors">Gallery</Link>
            <Link to="/contact" className="block text-xs text-[#9A8470] hover:text-[#F45F02] transition-colors">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-black text-xs text-[#2D241C] uppercase tracking-widest mb-4">Contact</h4>
          <div className="space-y-3">
            <a
              href={companyInfo.googleMapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 group cursor-pointer"
            >
              <LuMapPin className="w-4 h-4 text-[#F45F02] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-[#52432E] group-hover:text-[#F45F02] transition-colors leading-relaxed">
                  {companyInfo.address.full}
                </p>
                <span className="text-[10px] font-mono text-[#F45F02] underline mt-0.5 inline-block">
                  View on Google Maps →
                </span>
              </div>
            </a>
            {companyInfo.phones.map(p => (
              <a key={p.number} href={`tel:${p.clean}`} className="flex items-center gap-2.5 group">
                <LuPhone className="w-4 h-4 text-[#F45F02] shrink-0" />
                <div>
                  <div className="text-[9px] font-mono text-[#C4B49A] uppercase">{p.label}</div>
                  <div className="text-xs text-[#52432E] group-hover:text-[#F45F02] font-mono transition-colors">{p.number}</div>
                </div>
              </a>
            ))}
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2.5 group">
              <LuMail className="w-4 h-4 text-[#F45F02] shrink-0" />
              <div className="text-xs text-[#52432E] group-hover:text-[#F45F02] font-mono transition-colors break-all">
                {companyInfo.email}
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(30,22,21,0.08)] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-[#C4B49A]">
          <span>© {year} Shree Krishna Traders. All rights reserved. Cuttack, Odisha – 753010.</span>
          <span className="text-[#F45F02]">{companyInfo.timings}</span>
        </div>
      </div>
    </footer>
  );
}
