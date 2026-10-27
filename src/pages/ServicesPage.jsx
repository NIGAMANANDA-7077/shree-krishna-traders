import React, { useState } from 'react';
import { LuShieldCheck, LuWrench, LuSparkles, LuPhone, LuMessageSquare, LuArrowUpRight, LuCircleCheck, LuMapPin } from 'react-icons/lu';
import { services, companyInfo } from '../data/companyData';
import ServiceCard from '../components/ServiceCard';
import { useInView } from '../hooks/useInView';

export default function ServicesPage({ onOpenQuote }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Services', count: services.length },
    { id: 'anchoring', label: 'Anchoring & Rebar', matchIds: ['chemical-anchoring', 'project-based-supply'] },
    { id: 'safety', label: 'Bird Netting & Safety', matchIds: ['bird-safety-net-installation'] },
    { id: 'waterproofing', label: 'Waterproofing & Grouts', matchIds: ['waterproofing-solutions', 'precision-grouting'] },
  ];

  const filteredServices = services.filter(service => {
    if (activeFilter === 'all') return true;
    const currentTab = filterTabs.find(t => t.id === activeFilter);
    return currentTab?.matchIds?.includes(service.id);
  });

  return (
    <div className="s-section-cream min-h-screen">
      {/* ─── HERO SECTION WITH ANIMATED ACCENTS ─────────────────── */}
      <section className="relative pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 s-section-cream overflow-hidden">
        {/* Ambient Glowing Background Accents */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#F45F02]/15 via-amber-200/25 to-transparent rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#F45F02]/10 rounded-full blur-2xl pointer-events-none animate-float" />

        <div className="max-w-6xl mx-auto relative z-10" ref={heroRef}>
          {/* Top Pill with live pulsing beacon */}
          <div className={`s-pill mb-6 reveal d1 ${heroInView ? 'visible' : ''} bg-white/80 backdrop-blur-md shadow-sm border-[rgba(244,95,2,0.25)]`}>
            <span className="w-2 h-2 rounded-full bg-[#F45F02] animate-ping" />
            <span className="font-mono text-xs tracking-wider text-[#3D2C1E]">
              SPECIALIZED INDUSTRIAL EXECUTION · CUTTACK, ODISHA
            </span>
          </div>

          {/* Animated Vibrant Heading (Warm, not harsh black) */}
          <div className={`mb-6 reveal d2 ${heroInView ? 'visible' : ''}`}>
            <h1 className="s-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.92] tracking-tight text-[#2E2216]">
              INDUSTRIAL &amp; SITE <br />
              <span className="inline-block bg-gradient-to-r from-[#F45F02] via-[#FF8533] to-[#E05200] bg-clip-text text-transparent animate-shimmer-text drop-shadow-[0_4px_30px_rgba(244,95,2,0.25)]">
                SERVICES.
              </span>
            </h1>
          </div>

          {/* Warm Subtitle & Intro */}
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-end reveal d3 ${heroInView ? 'visible' : ''}`}>
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg text-[#655444] leading-relaxed max-w-2xl">
                Beyond supplying genuine hardware, Shree Krishna Traders provides turnkey execution support across Odisha. From specialized <strong className="text-[#F45F02] font-semibold">Garware bird safety net rigging</strong> to <strong className="text-[#F45F02] font-semibold">high-load chemical rebar anchoring</strong>, precision machine grouting, and project site material coordination.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <button
                onClick={() => onOpenQuote('General Service Enquiry')}
                className="animated-button"
              >
                <span className="circle" />
                <span className="text">Request Service Quote</span>
                <svg className="arr-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <svg className="arr-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>

          {/* Animated Highlights Row */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-[rgba(30,22,21,0.08)] reveal d4 ${heroInView ? 'visible' : ''}`}>
            <div className="s-card p-4 bg-white/90 backdrop-blur-sm border-[rgba(30,22,21,0.08)] hover:border-[#F45F02]/40 transition-colors">
              <div className="text-[10px] font-mono text-[#9A8470] uppercase">Materials</div>
              <div className="font-display font-black text-xl text-[#2E2216] mt-0.5">100% GENUINE</div>
              <div className="text-[11px] text-[#655444] mt-1">Hilti, fischer &amp; Garware certified</div>
            </div>

            <div className="s-card p-4 bg-white/90 backdrop-blur-sm border-[rgba(30,22,21,0.08)] hover:border-[#F45F02]/40 transition-colors">
              <div className="text-[10px] font-mono text-[#9A8470] uppercase">On-Site Work</div>
              <div className="font-display font-black text-xl text-[#F45F02] mt-0.5">RIGGING &amp; ANCHORS</div>
              <div className="text-[11px] text-[#655444] mt-1">Trained height &amp; core technicians</div>
            </div>

            <div className="s-card p-4 bg-white/90 backdrop-blur-sm border-[rgba(30,22,21,0.08)] hover:border-[#F45F02]/40 transition-colors">
              <div className="text-[10px] font-mono text-[#9A8470] uppercase">Coverage</div>
              <div className="font-display font-black text-xl text-[#2E2216] mt-0.5">ALL ODISHA</div>
              <div className="text-[11px] text-[#655444] mt-1">Cuttack, BBSR, Paradeep &amp; Angul</div>
            </div>

            <div className="s-card p-4 bg-white/90 backdrop-blur-sm border-[rgba(30,22,21,0.08)] hover:border-[#F45F02]/40 transition-colors">
              <div className="text-[10px] font-mono text-[#9A8470] uppercase">Compliance</div>
              <div className="font-display font-black text-xl text-[#F45F02] mt-0.5">MTC &amp; GST</div>
              <div className="text-[11px] text-[#655444] mt-1">Full documentation for audits</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE FILTER TABS & SERVICE CARDS ───────────── */}
      <section className="py-16 s-section-white border-t border-[rgba(30,22,21,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[rgba(30,22,21,0.07)]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#9A8470] uppercase tracking-wider mr-2 hidden sm:inline">
                Filter Capabilities:
              </span>
              {filterTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 font-mono flex items-center gap-1.5 ${
                    activeFilter === tab.id
                      ? 'bg-[#F45F02] text-white shadow-md shadow-[#F45F02]/25 scale-105'
                      : 'bg-[#FFF7EC] text-[#52432E] hover:bg-[#F5EDD8] border border-[rgba(30,22,21,0.08)]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeFilter === tab.id ? 'bg-white/25 text-white' : 'bg-black/5 text-[#9A8470]'
                  }`}>
                    {tab.count || (tab.matchIds ? tab.matchIds.length : 0)}
                  </span>
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-[#9A8470]">
              Showing <span className="font-bold text-[#F45F02]">{filteredServices.length}</span> verified services
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onQuoteClick={t => onOpenQuote(t)}
              />
            ))}
          </div>

          {/* Bottom Site Visit Callout */}
          <div className="mt-16 s-card p-6 sm:p-10 bg-gradient-to-br from-[#FFF7EC] to-[#FBF1E2] border border-[#F45F02]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <div className="s-pill text-[10px] bg-white">
                <LuMapPin className="w-3 h-3 text-[#F45F02]" />
                <span>ON-SITE SITE VISITS &amp; MEASUREMENT IN ODISHA</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#2E2216]">
                REQUIRE SITE INSPECTION OR TECHNICAL SIZING?
              </h3>
              <p className="text-xs sm:text-sm text-[#655444] max-w-2xl">
                Our team assists with bird netting dimension surveys, rebar anchor hole sizing, and waterproofing material estimates directly at your Cuttack or Bhubaneswar project location.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cssbuttons-io btn-sm text-xs"
              >
                <span>
                  <LuMessageSquare className="w-4 h-4 mr-1.5 fill-current" />
                  WhatsApp Order Desk
                </span>
              </a>
              <a
                href={`tel:${companyInfo.primaryPhone}`}
                className="btn-bubbles btn-sm text-xs"
              >
                <span /><span /><span /><span /><span />
                <span>
                  <LuPhone className="w-4 h-4 text-[#F45F02]" />
                  {companyInfo.primaryPhone}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
