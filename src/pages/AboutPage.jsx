import React from 'react';
import { Link } from 'react-router-dom';
import { LuArrowUpRight, LuShieldCheck } from 'react-icons/lu';
import { companyInfo, companyValues } from '../data/companyData';
import { useInView } from '../hooks/useInView';

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.08 });

  return (
    <div className="min-h-screen relative s-section-cream">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 s-section-cream overflow-hidden">
        
        {/* Top Banner Background - Only top ~520px, scrolls naturally, NOT fixed */}
        <div className="absolute top-0 inset-x-0 h-[500px] sm:h-[560px] z-0 pointer-events-none select-none overflow-hidden bg-[#071328]">
          <img
            src="/images/about-hero-bg.png"
            alt="Shree Krishna Traders Official Branding"
            className="w-full h-full object-contain object-center scale-[0.8] sm:scale-[0.7] filter blur-[2px] sm:blur-[3px] opacity-90"
          />
          {/* Subtle dark tint */}
          <div className="absolute inset-0 bg-[#071328]/40" />
          {/* Smooth bottom gradient fade into cream section */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-[#FDFBF7]/75 to-[#FDFBF7]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto" ref={heroRef}>
          
          {/* Top Pill & Main Heading - Pure White Text */}
          <div className="max-w-3xl mb-8">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-wider text-amber-300 font-semibold mb-4 reveal d1 ${heroInView ? 'visible' : ''}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02] animate-pulse" />
              <span>ABOUT US · OFFICIAL TRADE PROFILE</span>
            </div>
            
            <h1
              style={{ color: '#FFFFFF' }}
              className={`s-heading !text-white text-5xl sm:text-7xl lg:text-8xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] leading-tight reveal d2 ${heroInView ? 'visible' : ''}`}
            >
              WHO WE ARE.
            </h1>
          </div>

          {/* Official Tagline / Mission quote from Business Card */}
          <div className={`p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.35)] mb-10 reveal d2 ${heroInView ? 'visible' : ''}`}>
            <div className="flex items-center justify-between gap-4 flex-wrap pb-3 mb-3 border-b border-[rgba(30,22,21,0.08)]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F45F02] font-bold">
                Official Business Profile · Cuttack, Odisha
              </span>
              <span className="text-xs font-mono text-[#7A6754]">
                Proprietor: <strong className="text-[#1A1208] font-bold">{companyInfo.proprietor}</strong>
              </span>
            </div>
            <p className="text-lg sm:text-2xl text-[#1A1208] font-display font-medium leading-relaxed italic">
              "{companyInfo.tagline}"
            </p>
          </div>

          {/* Balanced 2-Column Narrative Story Card */}
          <div className={`p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.35)] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 reveal d3 ${heroInView ? 'visible' : ''}`}>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-[#1A1208] font-semibold leading-relaxed">
                Headquartered at <span className="text-[#F45F02]">Rajendranagar, Madhupatna, Cuttack</span>, Shree Krishna Traders is a premier industrial supply and contract trading firm catering to major infrastructure projects across Odisha.
              </p>
              <p className="text-sm sm:text-base text-[#5C4D3E] leading-relaxed">
                We work directly with civil infrastructure contractors, PEB steel fabricators, industrial manufacturing plants, and site engineers. Our core mission is simple: keeping site operations running smoothly without procurement delays or supply bottlenecks.
              </p>
            </div>

            <div className="space-y-5 flex flex-col justify-between">
              <p className="text-sm sm:text-base text-[#5C4D3E] leading-relaxed">
                Every consignment is backed by compliant GST tax invoices (GSTIN: {companyInfo.gstin}) and Manufacturer Test Certificates (MTC). We deliver directly to job sites across Cuttack, Bhubaneswar, Paradeep, Angul, Jajpur, Jharsuguda, and Rourkela.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-1">
                <Link to="/products" className="animated-button text-sm">
                  <span className="circle" />
                  <span className="text">Explore Core Products</span>
                  <svg className="arr-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <svg className="arr-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link to="/contact" className="animated-button-ghost text-sm">
                  <span className="circle" />
                  <span className="text">Contact Our Desk</span>
                  <svg className="arr-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <svg className="arr-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* 3-Column Structured Breakdown from Official Business Card */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal d4 ${heroInView ? 'visible' : ''}`}>
            
            {/* Box 1: Deals In */}
            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.25)] hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#F45F02]" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A6754]">
                  DEALS IN (CORE SPECIALIZATION)
                </h3>
              </div>
              <ul className="space-y-2.5">
                {(companyInfo.cardDeals || [
                  "Hand Tools & Power Tools",
                  "Accessories & Welding Machines",
                  "Construction Chemicals",
                  "Anchor Fasteners",
                  "Water Proofing Solutions"
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#1A1208]">
                    <span className="text-[#F45F02] font-mono mt-0.5">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Brands Available */}
            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.25)] hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#F45F02]" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A6754]">
                  BRANDS AVAILABLE
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {(companyInfo.cardBrands || [
                  "Bosch", "Polymak", "Ralli Wolf", "JK", "Taparia", "Freemans", "Celo", "Fischer"
                ]).map((brand, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[rgba(30,22,21,0.03)] border border-[rgba(30,22,21,0.1)] text-xs font-bold text-[#3E3125] hover:border-[#F45F02] hover:text-[#F45F02] transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 pt-5 border-t border-[rgba(30,22,21,0.07)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7A6754]">
                    HARDWARE ITEMS
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(companyInfo.cardHardware || ["Clamps", "GI Wire", "Nails"]).map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#1A1208]/5 text-xs font-semibold text-[#1A1208]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Box 3: Quick Desk & Verified Location */}
            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.25)] hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#F45F02]" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A6754]">
                  OFFICIAL DESK CONTACT
                </h3>
              </div>
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#9A8470] mb-0.5">Order &amp; Inquiry Phones</div>
                  <div className="font-mono font-bold text-[#1A1208] space-x-2">
                    <a href="tel:+919437564007" className="hover:text-[#F45F02] transition-colors">9437564007</a>
                    <span className="text-[#9A8470]">/</span>
                    <a href="tel:+917008585258" className="hover:text-[#F45F02] transition-colors">7008585258</a>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#9A8470] mb-0.5">Email Desk</div>
                  <a href={`mailto:${companyInfo.email}`} className="font-mono font-bold text-[#1A1208] hover:text-[#F45F02] transition-colors break-all">
                    {companyInfo.email}
                  </a>
                </div>

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#9A8470] mb-0.5">Registered Location</div>
                  <p className="text-[#3E3125] font-medium leading-relaxed">
                    Rajendranagar, Madhupatna, Cuttack – 753010 (Odisha)
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={companyInfo.googleMapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#F45F02] hover:underline"
                  >
                    <span>View Map Directions</span>
                    <LuArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── 3. COMPANY VALUES ─── */}
      <section className="relative z-20 py-24 bg-[#FDFBF7] border-t border-[rgba(30,22,21,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={valuesRef}>
          <div className="mb-14">
            <div className={`s-pill mb-4 reveal d1 ${valuesInView ? 'visible' : ''}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
              <span>OUR CORE VALUES</span>
            </div>
            <h2 className={`s-heading text-4xl sm:text-6xl text-[#1A1208] reveal d2 ${valuesInView ? 'visible' : ''}`}>
              WHAT DEFINES <span className="text-[#F45F02]">US.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((val, i) => (
              <div key={i} className={`s-card p-7 group reveal d${Math.min(i + 1, 6)} ${valuesInView ? 'visible' : ''}`}>
                <div className="w-11 h-11 rounded-xl bg-[#F45F02]/10 flex items-center justify-center text-[#F45F02] mb-4 group-hover:bg-[#F45F02] group-hover:text-white transition-all shadow-xs">
                  <LuShieldCheck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A1208] group-hover:text-[#F45F02] transition-colors mb-2.5">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4D3E] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
