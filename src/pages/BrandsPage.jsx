import React, { useState } from 'react';
import { LuShieldCheck, LuSearch, LuArrowUpRight, LuAward, LuCircleCheck, LuSparkles } from 'react-icons/lu';
import { brands } from '../data/companyData';
import { useInView } from '../hooks/useInView';

export default function BrandsPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Brands', count: brands.length },
    { id: 'fasteners', label: 'Fasteners & Anchoring', match: ['Landmark', 'SDHP', 'fischer', 'HILTI', 'Balaji', 'Celo'] },
    { id: 'powertools', label: 'Power Tools & Machinery', match: ['Bosch', 'Makita', 'Ralli', 'STIHL', 'BroachCutter', 'Promotech'] },
    { id: 'welding', label: 'Welding & Abrasives', match: ['ESAB', 'ador', 'Sécheron', 'Polymak', 'Hifler'] },
    { id: 'safety', label: 'Safety PPE & Netting', match: ['KARAM', 'Garware', 'UDYOGI'] },
    { id: 'chemicals', label: 'Chemicals & Sealants', match: ['FOSROC', 'Sika', 'DOWSIL'] },
    { id: 'handtools', label: 'Hand Tools & Measuring', match: ['Stanley', 'Taparia', 'Freemans', 'JK'] },
  ];

  const filteredBrands = brands.filter(b => {
    // Search filter
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (activeCategory === 'all') return true;

    const currentCat = categories.find(c => c.id === activeCategory);
    return currentCat?.match?.some(keyword => b.name.toLowerCase().includes(keyword.toLowerCase()));
  });

  return (
    <div className="s-section-cream min-h-screen">
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-36 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 s-section-cream overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#F45F02]/15 via-amber-200/20 to-transparent rounded-full blur-3xl pointer-events-none animate-glow-pulse" />

        <div className="max-w-6xl mx-auto relative z-10" ref={heroRef}>
          <div className={`s-pill mb-6 reveal d1 ${heroInView ? 'visible' : ''} bg-white/80 backdrop-blur-md`}>
            <span className="w-2 h-2 rounded-full bg-[#F45F02] animate-ping" />
            <span className="font-mono text-xs tracking-wider text-[#3D2C1E]">
              AUTHORISED OEM PARTNERSHIPS · 100% GENUINE PRODUCTS
            </span>
          </div>

          <h1 className={`s-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-[#2E2216] mb-6 reveal d2 ${heroInView ? 'visible' : ''}`}>
            AUTHORIZED &amp; <br />
            <span className="inline-block bg-gradient-to-r from-[#F45F02] via-[#FF8533] to-[#E05200] bg-clip-text text-transparent animate-shimmer-text">
              PARTNER BRANDS.
            </span>
          </h1>

          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-end reveal d3 ${heroInView ? 'visible' : ''}`}>
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg text-[#655444] leading-relaxed max-w-2xl">
                Shree Krishna Traders supplies only factory-sealed industrial materials from the world's and India's top certified brands. Every delivery to project sites in Odisha is accompanied by verified <strong className="text-[#F45F02]">Manufacturer Test Certificates (MTC)</strong>, batch test reports, and authorized GST invoicing.
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center gap-3 lg:justify-end font-mono text-xs text-[#52432E]">
              <div className="px-4 py-2.5 rounded-2xl bg-white border border-[rgba(30,22,21,0.08)] shadow-sm">
                <span className="text-[#F45F02] font-black text-lg mr-1">{brands.length}</span>
                <span>Active Brand Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FILTER & SEARCH BAR ───────────────────────────────────── */}
      <section className="py-6 s-section-cream border-t border-[rgba(30,22,21,0.08)] sticky top-20 z-30 bg-[#FFF7EC]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-[#F45F02] text-white shadow-md shadow-[#F45F02]/25 scale-105'
                      : 'bg-white text-[#52432E] hover:bg-[#F5EDD8] border border-[rgba(30,22,21,0.08)]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-72 shrink-0">
              <LuSearch className="w-4 h-4 text-[#9A8470] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search brand, product, role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full text-xs font-mono bg-white border border-[rgba(30,22,21,0.1)] focus:outline-none focus:border-[#F45F02] focus:ring-1 focus:ring-[#F45F02] text-[#1A1208]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRANDS GRID ───────────────────────────────────────────── */}
      <section className="py-16 s-section-white border-t border-[rgba(30,22,21,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={gridRef}>
          {filteredBrands.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-sm font-mono text-[#9A8470]">No brands match your filter or search query.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="animated-button-ghost btn-sm mt-4"
              >
                <span className="circle" />
                <span className="text">Reset Filters</span>
                <svg className="arr-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <svg className="arr-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredBrands.map((brand, i) => (
                <div
                  key={brand.name}
                  className={`s-card p-6 sm:p-7 group flex flex-col justify-between bg-white border border-[rgba(30,22,21,0.08)] hover:border-[#F45F02]/50 hover:shadow-[0_16px_40px_-12px_rgba(244,95,2,0.18)] transition-all duration-300 reveal d${Math.min((i % 3) + 1, 6)} ${gridInView ? 'visible' : ''}`}
                >
                  <div>
                    {/* High-Impact Logo Showcase Box */}
                    <div className="h-28 w-full bg-[#FFFDF9] rounded-2xl border border-[rgba(30,22,21,0.07)] flex items-center justify-center p-4 mb-5 group-hover:bg-white group-hover:border-[#F45F02]/30 transition-all">
                      {brand.logo ? (
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-h-20 max-w-[210px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <span className={`font-display font-black text-2xl text-[#2E2216] uppercase tracking-tight ${brand.logo ? 'hidden' : 'block'}`}>
                        {brand.name}
                      </span>
                    </div>

                    {/* Brand Name Header */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h2 className="font-display font-black text-xl sm:text-2xl text-[#2E2216] group-hover:text-[#F45F02] transition-colors uppercase tracking-tight">
                        {brand.name}
                      </h2>
                      <span className="s-pill-orange text-[9px] shrink-0 font-mono">
                        Authorized
                      </span>
                    </div>

                    <div className="s-divider mb-4" />

                    {/* Category Role & Focus */}
                    <div className="space-y-3">
                      <div>
                        <div className="text-[9px] font-mono text-[#9A8470] uppercase tracking-widest mb-0.5">
                          Category Role
                        </div>
                        <p className="text-xs font-bold text-[#2E2216]">
                          {brand.role}
                        </p>
                      </div>
                      <div>
                        <div className="text-[9px] font-mono text-[#9A8470] uppercase tracking-widest mb-0.5">
                          Product Focus
                        </div>
                        <p className="text-xs text-[#655444] leading-relaxed">
                          {brand.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Specialties Pills */}
                  <div className="mt-5 pt-4 border-t border-[rgba(30,22,21,0.06)]">
                    <div className="text-[9px] font-mono text-[#9A8470] uppercase tracking-widest mb-2 font-bold">
                      Key Specialties
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {brand.specialties.map(s => (
                        <span
                          key={s}
                          className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FFF7EC] text-[#52432E] border border-[rgba(30,22,21,0.06)] group-hover:border-[#F45F02]/20"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
