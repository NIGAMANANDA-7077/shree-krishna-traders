import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LuArrowUpRight,
  LuArrowRight,
  LuShieldCheck,
  LuPhone,
  LuMessageSquare,
  LuMapPin,
  LuMaximize2,
  LuMinimize2,
  LuNavigation,
  LuCopy,
  LuCheck,
  LuSparkles,
  LuExternalLink
} from 'react-icons/lu';
import { companyInfo, productCategories, brands } from '../data/companyData';
import FeaturesSection from '../components/FeaturesSection';
import IndustriesSection from '../components/IndustriesSection';
import ProductMarqueeGallery from '../components/ProductMarqueeGallery';
import FaqSection from '../components/FaqSection';
import CategoryCard from '../components/CategoryCard';
import QuotationForm from '../components/QuotationForm';
import AnimatedCounter from '../components/AnimatedCounter';
import { useInView } from '../hooks/useInView';

export default function HomePage({ onOpenQuote }) {
  const [mapExpanded, setMapExpanded] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Dynamic 2-Second Ambient Image Crossfade Carousel
  const heroBackgroundImages = [
    {
      topRight: '/images/products/foundation-fabrication.jpg',
      bottomLeft: '/images/products/anchoring-products.jpg',
      centerRight: '/images/products/welding-cutting.jpg',
      centerLeft: '/images/products/tapes-sealants.jpg'
    },
    {
      topRight: '/images/products/Mechanical and chemical anchors Anchoring systems 1.jpeg',
      bottomLeft: '/images/products/Construction Chemicals 1.jpeg',
      centerRight: '/images/products/Power tools 1.jpeg',
      centerLeft: '/images/products/Waterproofing Solutions 1.jpeg'
    },
    {
      topRight: '/images/products/Industrial fastener 1.jpeg',
      bottomLeft: '/images/products/Welding & Cutting 1.jpeg',
      centerRight: '/images/products/construction-waterproofing.jpg',
      centerLeft: '/images/products/Power tools 3.jpeg'
    },
    {
      topRight: '/images/products/Mechanical and chemical anchors Anchoring systems 2.jpeg',
      bottomLeft: '/images/products/Power tools 6.jpeg',
      centerRight: '/images/products/Industrial fastener 2.jpeg',
      centerLeft: '/images/products/Waterproofing Solutions 2.jpeg'
    },
    {
      topRight: '/images/products/Construction Chemicals 4.jpeg',
      bottomLeft: '/images/products/Mechanical and chemical anchors Anchoring systems 3.jpeg',
      centerRight: '/images/products/Painting & Blasting 1.jpeg',
      centerLeft: '/images/products/power-tools.jpg'
    }
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgroundImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [heroBackgroundImages.length]);

  const currentBg = heroBackgroundImages[bgIndex];

  const handleCopyAddress = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(companyInfo.address.full);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2200);
  };

  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [mapRef, mapInView] = useInView({ threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ threshold: 0.08 });
  const [quoteRef, quoteInView] = useInView({ threshold: 0.08 });
  const [marqueeRef, marqueeInView] = useInView({ threshold: 0.2 });

  return (
    <div className="s-section-cream min-h-screen">

      {/* ─── 1. HERO (Full Viewport Height Screen 1) ───────────────── */}
      <section className="relative min-h-[100dvh] sm:min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 s-section-cream overflow-hidden w-full max-w-full flex flex-col justify-between">
        
        {/* Ambient Industrial Atmospheric Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Subtle blueprint grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(#1A1208 1.2px, transparent 1.2px)',
              backgroundSize: '28px 28px'
            }}
          />

          {/* Warm Industrial Glowing Auras */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-tr from-[#F45F02]/14 via-amber-200/20 to-transparent rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute top-28 -right-20 w-[420px] h-[420px] bg-[#F45F02]/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute top-64 -left-20 w-[380px] h-[380px] bg-amber-400/10 rounded-full blur-[90px]" />

          {/* 4-Corner Dynamic Multi-Directional Continuous Crossfade Carousel */}
          
          {/* Top-Right Quadrant Stack */}
          <div className="absolute -top-12 right-0 sm:right-6 lg:right-12 w-64 sm:w-80 lg:w-[440px] h-64 sm:h-80 lg:h-[440px] rounded-full overflow-hidden blur-[1.5px] rotate-6 pointer-events-none">
            {heroBackgroundImages.map((bg, idx) => (
              <img 
                key={`tr-${idx}`}
                src={bg.topRight} 
                alt=""
                className={`absolute inset-0 w-full h-full object-cover scale-110 filter saturate-150 contrast-125 mix-blend-multiply transition-opacity duration-1000 ease-in-out ${
                  idx === bgIndex ? 'opacity-[0.12] lg:opacity-[0.16]' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Bottom-Left Quadrant Stack */}
          <div className="absolute top-80 -left-16 sm:left-4 lg:left-10 w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] rounded-3xl overflow-hidden blur-[2px] -rotate-12 pointer-events-none">
            {heroBackgroundImages.map((bg, idx) => (
              <img 
                key={`bl-${idx}`}
                src={bg.bottomLeft} 
                alt=""
                className={`absolute inset-0 w-full h-full object-cover scale-125 filter contrast-125 mix-blend-multiply transition-opacity duration-1000 ease-in-out ${
                  idx === bgIndex ? 'opacity-[0.09] lg:opacity-[0.13]' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Center-Right Floating Disc Stack */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-16 lg:right-4 w-52 sm:w-72 lg:w-[340px] h-52 sm:h-72 lg:h-[340px] rounded-full overflow-hidden blur-[2px] rotate-45 pointer-events-none hidden sm:block">
            {heroBackgroundImages.map((bg, idx) => (
              <img 
                key={`cr-${idx}`}
                src={bg.centerRight} 
                alt=""
                className={`absolute inset-0 w-full h-full object-cover scale-110 filter contrast-125 mix-blend-multiply transition-opacity duration-1000 ease-in-out ${
                  idx === bgIndex ? 'opacity-[0.08] lg:opacity-[0.11]' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Center-Left Upper Subtle Accent Stack */}
          <div className="absolute top-20 -left-12 sm:left-16 lg:left-24 w-48 sm:w-60 lg:w-[300px] h-48 sm:h-60 lg:h-[300px] rounded-full overflow-hidden blur-[2.5px] -rotate-6 pointer-events-none hidden sm:block">
            {heroBackgroundImages.map((bg, idx) => (
              <img 
                key={`cl-${idx}`}
                src={bg.centerLeft} 
                alt=""
                className={`absolute inset-0 w-full h-full object-cover scale-115 filter contrast-125 mix-blend-multiply transition-opacity duration-1000 ease-in-out ${
                  idx === bgIndex ? 'opacity-[0.07] lg:opacity-[0.10]' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Giant Faint Industrial Technical Watermark Monogram */}
          <div className="absolute top-20 right-1/4 select-none opacity-[0.03] text-[260px] font-black font-display tracking-tighter text-[#1A1208] leading-none pointer-events-none">
            SKT
          </div>
        </div>

        {/* Hero Content (Clean & centered above the fold) */}
        <div ref={heroRef} className="max-w-6xl mx-auto w-full my-auto space-y-6 sm:space-y-8 lg:space-y-10 relative z-10">

          {/* Eyebrow */}
          <div className={`flex justify-start reveal d1 ${heroInView ? 'visible' : ''}`}>
            <div className="s-pill max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02] animate-pulse shrink-0" />
              <span className="hidden sm:inline">INDUSTRIAL HARDWARE, FASTENERS &amp; SITE CONSUMABLES · CUTTACK, ODISHA</span>
              <span className="sm:hidden text-[10px]">INDUSTRIAL HARDWARE &amp; SUPPLIES · CUTTACK</span>
            </div>
          </div>

          {/* Headline */}
          <div className={`space-y-3 reveal d2 ${heroInView ? 'visible' : ''}`}>
            <h1 className="s-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] text-[#2D241C] leading-[1.05]">
              BUILT TO<br />
              <span className="text-[#F45F02]">SUPPLY.</span>
            </h1>
            <p className="s-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#9A8470]">
              RELIABLE PRODUCTS. COMPETITIVE PRICING. TRUSTED BRANDS.
            </p>
          </div>

          {/* Subtitle & CTAs */}
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end pt-2 reveal d3 ${heroInView ? 'visible' : ''}`}>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base lg:text-lg text-[#5C4D3E] leading-relaxed max-w-2xl">
                Authorised stockists &amp; project suppliers of genuine industrial fasteners, chemical anchors, HP Landmark self-drilling screws, power tools, and construction chemicals. Direct dispatches from our Madhupatna, Cuttack godown to project sites across Odisha.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap items-center gap-3 sm:gap-3.5 justify-start lg:justify-end">
              <Link to="/products" className="animated-button group">
                <span className="circle" />
                <span className="text">Explore Products</span>
                <svg className="arr-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="arr-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <button onClick={() => onOpenQuote()} className="cssbuttons-io">
                <span>
                  <LuArrowUpRight className="w-4 h-4 mr-1.5 stroke-[2.5]" />
                  Request Quotation
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Subtle Scroll Indicator */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-4 pb-1 text-[#9A8470] animate-bounce pointer-events-none select-none">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#9A8470]/80">
            Scroll to view location &amp; inventory ↓
          </span>
        </div>
      </section>

      {/* ─── 1B. INTERACTIVE GOOGLE MAP LOCATION SHOWCASE ─────────────── */}
      <section ref={mapRef} className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 s-section-sand border-t border-[rgba(30,22,21,0.08)] overflow-hidden w-full max-w-full relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F45F02]/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-6 sm:space-y-8">
          {/* Section Header */}
          <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 reveal d1 ${mapInView ? 'visible' : ''}`}>
            <div>
              <div className="s-pill mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02] animate-pulse shrink-0" />
                <span className="text-[11px] sm:text-xs">LIVE WAREHOUSE HEADQUARTERS · MADHUPATNA, CUTTACK</span>
              </div>
              <h2 className="s-heading text-3xl sm:text-5xl lg:text-6xl text-[#2D241C]">
                VISIT OUR CENTRAL SUPPLY HUB.
              </h2>
              <p className="text-sm sm:text-base text-[#5C4D3E] mt-2 max-w-2xl">
                Authorised stockists &amp; direct godown dispatches. Walk in for counter inquiries or direct bulk pickups with instant GST billing.
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <a
                href={companyInfo.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-[#F45F02] hover:underline flex items-center space-x-1.5 bg-[#FFF7EC] px-3.5 py-2 rounded-xl border border-[#F45F02]/20 hover:border-[#F45F02]/40 transition-colors shadow-sm"
              >
                <span>Open in Google Maps</span>
                <LuExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Showcase Container */}
          <div
            className={`relative rounded-3xl overflow-hidden border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group reveal-scale d2 ${mapInView ? 'visible' : ''} ${
              mapExpanded
                ? 'border-[#F45F02]/50 shadow-[0_32px_90px_-20px_rgba(244,95,2,0.35)] ring-4 ring-[#F45F02]/25'
                : 'border-[rgba(30,22,21,0.12)] shadow-[0_24px_80px_-20px_rgba(30,22,21,0.15)] hover:border-[#F45F02]/30'
            }`}
          >
            <div
              className={`relative w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mapExpanded
                  ? 'h-[640px] sm:h-[720px] lg:h-[780px]'
                  : 'h-[380px] sm:h-[490px] lg:h-[540px]'
              }`}
            >
              {/* Google Maps Embed Iframe */}
              <iframe
                title="Shree Krishna Traders Madhupatna Cuttack Location"
                src={companyInfo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full filter saturate-[1.1] contrast-[1.02]"
              />

              {/* Floating Top Bar Control */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10 gap-2">
                {/* Live GPS Beacon Pill */}
                <div className="pointer-events-auto flex items-center space-x-2.5 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[rgba(30,22,21,0.12)] shadow-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F45F02] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F45F02]"></span>
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#2D241C]">
                    LIVE GPS · MADHUPATNA WAREHOUSE
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-mono text-[#9A8470] border-l border-[rgba(30,22,21,0.12)] pl-2">
                    {companyInfo.address.coordinates}
                  </span>
                </div>

                {/* Animated Expand / Minimize Button */}
                <button
                  type="button"
                  onClick={() => setMapExpanded(!mapExpanded)}
                  className={`pointer-events-auto flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-lg ${
                    mapExpanded
                      ? 'bg-[#2D241C] text-white hover:bg-[#F45F02]'
                      : 'bg-[#F45F02] text-white hover:bg-[#E05300] hover:scale-105 active:scale-95'
                  }`}
                  aria-label={mapExpanded ? "Minimize map" : "Expand interactive map"}
                >
                  {mapExpanded ? (
                    <>
                      <LuMinimize2 className="w-3.5 h-3.5" />
                      <span>Minimize Map</span>
                    </>
                  ) : (
                    <>
                      <LuSparkles className="w-3.5 h-3.5 animate-pulse text-amber-200" />
                      <span className="font-semibold">Expand Live Map</span>
                      <LuMaximize2 className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {/* Compact Mode Overlay Cards */}
              {!mapExpanded && (
                <>
                  <div
                    onClick={() => setMapExpanded(true)}
                    className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[rgba(30,22,21,0.1)] shadow-xl cursor-pointer hover:border-[#F45F02]/40 hover:shadow-2xl transition-all duration-300 group/card"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <LuMapPin className="w-4 h-4 text-[#F45F02]" />
                        <span className="text-[11px] font-mono uppercase text-[#F45F02] font-bold tracking-wider">
                          CENTRAL WAREHOUSE &amp; GODOWN
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-[#9A8470]">GST: {companyInfo.gstin}</span>
                    </div>
                    <p className="text-sm font-semibold text-[#2D241C] mb-1">
                      {companyInfo.address.line1}, {companyInfo.address.city}
                    </p>
                    <p className="text-xs text-[#5C4D3E] leading-relaxed mb-3">
                      Ready stock for HP Landmark fasteners, Fischer anchors, Sika grouts &amp; industrial supplies.
                    </p>
                    <div className="flex items-center space-x-2 text-[11px] font-bold text-[#F45F02] group-hover/card:translate-x-1 transition-transform">
                      <span>Click to enlarge map &amp; get directions</span>
                      <LuArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center space-x-3 absolute bottom-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-[rgba(30,22,21,0.1)] shadow-xl">
                    <div className="w-10 h-10 rounded-full bg-[#F45F02]/10 flex items-center justify-center text-[#F45F02]">
                      <LuShieldCheck className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-[#2D241C]">Direct Godown Dispatches</div>
                      <div className="text-[#9A8470]">Daily delivery across Odisha</div>
                    </div>
                  </div>
                </>
              )}

              {/* Expanded Mode: High-Tech Full HUD Dock at bottom */}
              {mapExpanded && (
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/98 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-[rgba(30,22,21,0.12)] p-5 sm:p-6 shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-6 duration-500 z-20">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                    {/* Warehouse Address & Coordinates */}
                    <div className="md:col-span-6 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F45F02]/10 text-[#F45F02] text-[10px] font-mono font-bold uppercase">
                          📍 Verified Warehouse Location
                        </span>
                        <span className="text-xs font-mono text-[#9A8470]">
                          Prop: <strong className="text-[#2D241C]">{companyInfo.proprietor}</strong>
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#2D241C] leading-snug">
                        {companyInfo.address.full}
                      </h4>
                      <p className="text-xs text-[#5C4D3E] flex items-center space-x-2">
                        <span className="font-mono text-[11px] bg-[#F5EDD8] px-2 py-0.5 rounded text-[#2D241C]">
                          GPS: {companyInfo.address.coordinates}
                        </span>
                        <span className="text-[#9A8470]">· Open Mon–Sat 9AM–8PM</span>
                      </p>
                    </div>

                    {/* Action Hub */}
                    <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-2.5 pt-2 md:pt-0 border-t md:border-t-0 border-[rgba(30,22,21,0.08)]">
                      {/* Copy Address Button */}
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="px-3.5 py-2.5 rounded-xl border border-[rgba(30,22,21,0.12)] bg-[#FFF7EC] hover:bg-[#F5EDD8] text-[#2D241C] text-xs font-medium flex items-center space-x-1.5 transition-colors shadow-sm"
                        title="Copy full address to clipboard"
                      >
                        {copiedAddress ? (
                          <>
                            <LuCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">Address Copied!</span>
                          </>
                        ) : (
                          <>
                            <LuCopy className="w-3.5 h-3.5 text-[#5C4D3E]" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>

                      {/* Google Maps Turn-by-Turn Navigation */}
                      <a
                        href={companyInfo.googleMapsDirectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cssbuttons-io text-xs shadow-md"
                      >
                        <span>
                          <LuNavigation className="w-3.5 h-3.5 mr-1" />
                          Start GPS Directions
                          <LuExternalLink className="w-3 h-3 ml-1 opacity-75" />
                        </span>
                      </a>

                      {/* Call Warehouse Button with Uiverse Bubbles */}
                      <a
                        href={`tel:${companyInfo.primaryPhone.replace(/\s+/g, '')}`}
                        className="btn-bubbles text-xs"
                      >
                        <span /><span /><span /><span /><span />
                        <span>
                          <LuPhone className="w-3.5 h-3.5" />
                          {companyInfo.primaryPhone}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. BRAND MARQUEE ────────────────────────────────────── */}
      <section ref={marqueeRef} className="py-10 border-y border-[rgba(30,22,21,0.08)] s-section-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
          <div className={`s-pill text-[10px] reveal d1 ${marqueeInView ? 'visible' : ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
            <span>AUTHORIZED &amp; PARTNER BRANDS</span>
          </div>
          <Link to="/brands" className={`text-xs font-mono text-[#F45F02] hover:underline flex items-center space-x-1 reveal d2 ${marqueeInView ? 'visible' : ''}`}>
            <span>View All Partner Brands</span>
            <LuArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track gap-5">
            {[...brands, ...brands].map((brand, idx) => (
              <Link 
                key={idx} 
                to="/brands"
                className="s-card px-6 py-4 min-w-[220px] sm:min-w-[260px] h-[115px] sm:h-[125px] flex items-center justify-center text-center shrink-0 group bg-white hover:border-[#F45F02] hover:shadow-[0_12px_32px_-8px_rgba(244,95,2,0.2)] transition-all"
                title={brand.name}
              >
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-h-14 sm:max-h-16 max-w-[180px] sm:max-w-[210px] object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <span 
                  className={`font-display font-black text-2xl text-[#2D241C] group-hover:text-[#F45F02] transition-colors uppercase tracking-tight ${brand.logo ? 'hidden' : 'block'}`}
                >
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT / STATS ────────────────────────────────────── */}
      <section className="py-28 s-section-cream border-b border-[rgba(30,22,21,0.07)]" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className={`s-pill reveal d1 ${aboutInView ? 'visible' : ''}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
                <span>ABOUT US</span>
              </div>
              <h2 className={`s-heading text-4xl sm:text-6xl text-[#2D241C] reveal d2 ${aboutInView ? 'visible' : ''}`}>
                LOCAL STOCK. DIRECT PRICING. FAST SITE DISPATCH.
              </h2>
              <p className={`text-base text-[#5C4D3E] leading-relaxed reveal d3 ${aboutInView ? 'visible' : ''}`}>
                Located in Rajendra Nagar, Madhupatna, Cuttack, <strong>Shree Krishna Traders</strong> supplies contractors, PEB fabricators, and manufacturing units across Odisha. We maintain active buffer stocks of high-tensile bolts, chemical anchors, HP Landmark self-drilling screws, and construction chemicals so your site work never halts waiting for supplies.
              </p>
              <p className={`text-sm text-[#5C4D3E] leading-relaxed reveal d4 ${aboutInView ? 'visible' : ''}`}>
                Every consignment comes with authentic Manufacturer Test Certificates (MTC), GST tax invoices, and clear wholesale contractor pricing. Whether you need urgent delivery of 20 boxes of SDHP screws or 500 custom M24 foundation bolts, our Cuttack team dispatches quickly to your job site.
              </p>
              <div className={`pt-2 flex flex-wrap items-center gap-4 text-xs font-mono reveal d5 ${aboutInView ? 'visible' : ''}`}>
                <div className="px-4 py-2.5 rounded-2xl bg-white border border-[rgba(30,22,21,0.1)] shadow-sm">
                  <span className="text-[#9A8470]">GSTIN: </span>
                  <span className="text-[#2D241C] font-bold">{companyInfo.gstin}</span>
                </div>
                <div className="px-4 py-2.5 rounded-2xl bg-white border border-[rgba(30,22,21,0.1)] shadow-sm">
                  <span className="text-[#9A8470]">UDYAM: </span>
                  <span className="text-[#2D241C] font-bold">{companyInfo.udyam}</span>
                </div>
              </div>
            </div>

            {/* Right: Stat counters */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { target: 6, suffix: '', label: 'Core Product Lines', sub: 'Anchors, Chemicals, Foundation, Tapes, Welding, Tools' },
                { target: 8, suffix: '+', label: 'Authorized Brands', sub: 'fischer, RAWLPLUG, Bosch, Sika, Landmark' },
                { target: 100, suffix: '%', label: 'Genuine Products', sub: 'Factory sealed with lab test certificates' },
                { target: 24, suffix: 'H', label: 'Rapid Site Dispatch', sub: 'Across Cuttack, BBSR & Odisha' },
              ].map((stat, i) => (
                <div key={i} className={`s-card p-6 sm:p-8 flex flex-col justify-between reveal-scale d${i + 1} ${aboutInView ? 'visible' : ''}`}>
                  <div className="font-display text-5xl sm:text-6xl text-[#F45F02]">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="mt-4">
                    <div className="font-bold text-[#2D241C] text-sm">{stat.label}</div>
                    <div className="text-xs text-[#9A8470] mt-0.5">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. FEATURES ─────────────────────────────────────────── */}
      <FeaturesSection />

      {/* ─── 5. PRODUCTS ─────────────────────────────────────────── */}
      <section className="py-24 s-section-white border-t border-[rgba(30,22,21,0.07)]" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={productsRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div className={`s-pill reveal d1 ${productsInView ? 'visible' : ''}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
                <span>CORE CATALOGUE</span>
              </div>
              <h2 className={`s-heading text-4xl sm:text-6xl text-[#2D241C] reveal d2 ${productsInView ? 'visible' : ''}`}>
                6 CORE PRODUCT DIVISIONS
              </h2>
              <p className={`text-sm sm:text-base text-[#9A8470] max-w-xl reveal d3 ${productsInView ? 'visible' : ''}`}>
                Comprehensive supplies for civil infrastructure, structural steel, PEB roofing, mechanical assemblies, and plant maintenance.
              </p>
            </div>
            <Link to="/products" className={`animated-button shrink-0 reveal d4 ${productsInView ? 'visible' : ''}`}>
              <span className="circle" />
              <span className="text">View All 6 Divisions</span>
              <svg className="arr-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className="arr-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, i) => (
              <div key={category.id} className={`reveal d${Math.min(i % 3 + 1, 6)} ${productsInView ? 'visible' : ''}`}>
                <CategoryCard category={category} onQuoteClick={(t) => onOpenQuote(t)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. INDUSTRIES ───────────────────────────────────────── */}
      <IndustriesSection />

      {/* ─── 8. PRODUCT SCROLLING GALLERY (RIGHT TO LEFT) ─────────── */}
      <ProductMarqueeGallery onOpenQuote={onOpenQuote} />

      {/* ─── 9. FAQ ──────────────────────────────────────────────── */}
      <FaqSection />

      {/* ─── 11. QUOTATION ───────────────────────────────────────── */}
      <section className="py-24 s-section-white border-t border-[rgba(30,22,21,0.07)]" id="quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={quoteRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left prompt */}
            <div className="lg:col-span-5 space-y-6">
              <div className={`s-pill reveal d1 ${quoteInView ? 'visible' : ''}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
                <span>PROJECT PROCUREMENT DESK</span>
              </div>
              <h2 className={`s-heading text-4xl sm:text-5xl text-[#2D241C] reveal d2 ${quoteInView ? 'visible' : ''}`}>
                HAVE AN INDUSTRIAL OR PROJECT REQUIREMENT?
              </h2>
              <p className={`text-base text-[#5C4D3E] leading-relaxed reveal d3 ${quoteInView ? 'visible' : ''}`}>
                Share your product requirements, quantities, and project details with Shree Krishna Traders.
                Our Cuttack technical desk will evaluate your specifications and provide a competitive, itemized quotation.
              </p>

              <div className={`space-y-3 pt-2 reveal d4 ${quoteInView ? 'visible' : ''}`}>
                <a href={`tel:${companyInfo.primaryPhone}`}
                  className="s-card p-5 flex items-center space-x-4 group block">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.08)] flex items-center justify-center text-[#F45F02] group-hover:scale-105 transition-transform shrink-0">
                    <LuPhone className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#9A8470]">Direct Call Support</div>
                    <div className="text-base font-bold text-[#2D241C] group-hover:text-[#F45F02] font-mono">{companyInfo.primaryPhone}</div>
                  </div>
                </a>

                <a href={companyInfo.whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="s-card p-5 flex items-center space-x-4 group block">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.08)] flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform shrink-0">
                    <LuMessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#9A8470]">WhatsApp Desk (Fastest)</div>
                    <div className="text-base font-bold text-[#2D241C] group-hover:text-emerald-500 font-mono">+91 9437564007</div>
                  </div>
                </a>

                <div className="s-card p-5 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#2D241C] font-semibold">
                      <LuMapPin className="w-3.5 h-3.5 text-[#F45F02] mr-1.5" />
                      <span>Office &amp; Warehouse (Cuttack):</span>
                    </div>
                    <a
                      href={companyInfo.googleMapsDirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-[#F45F02] hover:underline flex items-center gap-0.5"
                    >
                      <span>Directions</span>
                      <LuArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-[11px] text-[#5C4D3E] leading-relaxed">{companyInfo.address.full}</p>

                  {/* Compact Map Preview */}
                  <div className="relative w-full h-36 rounded-xl overflow-hidden border border-[rgba(30,22,21,0.08)] mt-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3738.3711554761926!2d85.8967780752409!3d20.449943481058515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDI2JzU5LjgiTiA4NcKwNTMnNTcuNyJF!5e0!3m2!1sen!2sin!4v1792602735098!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Shree Krishna Traders Cuttack Location"
                      className="w-full h-full pointer-events-auto"
                    />
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-[#9A8470] flex justify-between">
                    <span>GSTIN: {companyInfo.gstin}</span>
                    <span>UDYAM: {companyInfo.udyam}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className={`lg:col-span-7 reveal-right d3 ${quoteInView ? 'visible' : ''}`}>
              <QuotationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
