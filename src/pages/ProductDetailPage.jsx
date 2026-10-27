import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  LuArrowUpRight, 
  LuArrowLeft, 
  LuCircleCheck, 
  LuMessageSquare, 
  LuShieldCheck, 
  LuFileText, 
  LuLayers, 
  LuSettings2 
} from 'react-icons/lu';
import { productCategories, companyInfo } from '../data/companyData';
import { useInView } from '../hooks/useInView';

export default function ProductDetailPage({ onOpenQuote }) {
  const params = useParams();
  const categoryId = params.id || params.categoryId;
  const category = productCategories.find(c => c.id === categoryId);

  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [detailRef, detailInView] = useInView({ threshold: 0.1 });

  if (!category) {
    return (
      <div className="min-h-screen s-section-cream flex items-center justify-center p-6">
        <div className="text-center s-card p-12 max-w-md">
          <h1 className="s-heading text-4xl text-[#1A1208] mb-4">CATEGORY NOT FOUND</h1>
          <p className="text-sm text-[#9A8470] mb-6">The requested product division could not be located.</p>
          <Link to="/products" className="animated-button">
            <span className="circle" />
            <span className="text">Back to All Products</span>
            <svg className="arr-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <svg className="arr-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="s-section-cream min-h-screen">
      
      {/* ─── 1. HERO SECTION ─────────────────────────────────────── */}
      <section className="pt-36 sm:pt-44 pb-16 px-4 sm:px-6 lg:px-8 s-section-cream">
        <div className="max-w-6xl mx-auto" ref={heroRef}>
          <Link 
            to="/products" 
            className={`inline-flex items-center gap-2 text-xs font-mono text-[#9A8470] hover:text-[#F45F02] transition-colors mb-8 reveal d1 ${heroInView ? 'visible' : ''}`}
          >
            <LuArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Core Catalogue</span>
          </Link>

          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center reveal d2 ${heroInView ? 'visible' : ''}`}>
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="s-pill">
                  <span className="text-[#F45F02] font-black">{category.categoryNumber}</span>
                  <span>DIVISION</span>
                </span>
                <span className="s-pill-orange text-[10px]">
                  {category.badge}
                </span>
              </div>

              <h1 className="s-heading text-4xl sm:text-6xl lg:text-7xl text-[#1A1208] leading-[0.95] tracking-tight">
                {category.title.toUpperCase()}
              </h1>

              <p className="text-base sm:text-lg text-[#52432E] leading-relaxed font-normal">
                {category.fullDesc}
              </p>

              {/* Brands */}
              {category.brandsAssociated?.length > 0 && (
                <div className="pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#9A8470] mb-2">
                    Authorized Manufacturers &amp; Partners:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.brandsAssociated.map(b => (
                      <span key={b} className="s-pill text-xs font-bold font-mono bg-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
                        <span>{b}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button 
                  onClick={() => onOpenQuote(category.title)} 
                  className="cssbuttons-io"
                >
                  <span>
                    <LuMessageSquare className="w-4 h-4 mr-1.5" />
                    Enquire For Quotation
                  </span>
                </button>
                <a 
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Shree%20Krishna%20Traders,%20I%20have%20an%20enquiry%20regarding%20${encodeURIComponent(category.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-button-ghost"
                >
                  <span className="circle" />
                  <span className="text">WhatsApp Desk</span>
                  <svg className="arr-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <svg className="arr-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>

            {/* Right High-Resolution Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2rem] overflow-hidden border border-[rgba(30,22,21,0.12)] shadow-[0_20px_60px_-15px_rgba(30,22,21,0.15)] bg-[#F5EDD8] group">
                <div className="h-[340px] sm:h-[420px] w-full relative">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFF7EC]/70 via-transparent to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[rgba(30,22,21,0.1)] shadow-sm">
                    <div className="text-[10px] font-mono text-[#F45F02] font-bold uppercase tracking-wider">
                      DIRECT SITE DISPATCH
                    </div>
                    <div className="text-xs text-[#52432E] mt-0.5">
                      Supplied to exact project BOQ specifications across Odisha.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. TECHNICAL SPECIFICATIONS & PRODUCT LINES ───────────── */}
      <section className="py-24 s-section-white border-t border-[rgba(30,22,21,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={detailRef}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Products & Specifications Included */}
            <div className={`lg:col-span-7 space-y-8 reveal-left d1 ${detailInView ? 'visible' : ''}`}>
              <div>
                <div className="s-pill mb-3">
                  <LuLayers className="w-3.5 h-3.5 text-[#F45F02]" />
                  <span>DIVISION SPECIFICATIONS</span>
                </div>
                <h2 className="s-heading text-3xl sm:text-5xl text-[#1A1208] leading-tight">
                  ITEMS &amp; PRODUCTS INCLUDED.
                </h2>
                <p className="mt-3 text-sm text-[#52432E] leading-relaxed">
                  All products can be ordered according to required dimensions, configurations, grades, and project bills of quantities (BOQ).
                </p>
              </div>

              {/* Items List as Rich Industrial Cards */}
              <div className="space-y-3">
                {category.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="s-card p-5 flex items-start gap-4 group hover:border-[#F45F02]/40 transition-all"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.1)] flex items-center justify-center text-[#F45F02] shrink-0 font-mono text-xs font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-[#1A1208] group-hover:text-[#F45F02] transition-colors">
                        {item}
                      </div>
                      <div className="text-xs text-[#9A8470] mt-1">
                        Supplied according to project application requirements with test certificates.
                      </div>
                    </div>
                    <LuCircleCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-1 stroke-[2]" />
                  </div>
                ))}
              </div>

              {/* Technical Compliance Note */}
              <div className="p-6 rounded-2xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.1)] flex items-start gap-4">
                <LuShieldCheck className="w-6 h-6 text-[#F45F02] shrink-0 mt-0.5" />
                <div className="text-xs text-[#52432E] space-y-1">
                  <div className="font-bold text-[#1A1208]">Manufacturer Test Certificates (MTC) Available</div>
                  <p>
                    Where applicable, factory test reports, chemical test certificates, and technical datasheets (TDS) are provided with dispatches for civil &amp; structural audits.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Parameters & Applications Box */}
            <div className={`lg:col-span-5 space-y-6 reveal-right d2 ${detailInView ? 'visible' : ''}`}>
              
              {/* Engineering Scope Card */}
              <div className="s-card p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <LuSettings2 className="w-4 h-4 text-[#F45F02]" />
                  <h3 className="font-display font-black text-sm text-[#1A1208] uppercase tracking-wider">
                    Application Scope
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#52432E] leading-relaxed">
                  {category.applications}
                </p>
              </div>

              {/* Custom Specification Parameters Card */}
              <div className="s-card p-8 space-y-4 bg-[#FFFDF9]">
                <div className="flex items-center gap-2">
                  <LuFileText className="w-4 h-4 text-[#F45F02]" />
                  <h3 className="font-display font-black text-sm text-[#1A1208] uppercase tracking-wider">
                    Specification Parameters
                  </h3>
                </div>
                <p className="text-xs text-[#9A8470]">
                  When ordering, specify the following details to receive an itemized quote:
                </p>

                <ul className="space-y-2 text-xs font-mono text-[#52432E]">
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#FFF7EC]">
                    <span>Dimension / Size:</span>
                    <span className="font-bold text-[#1A1208]">Standard &amp; Custom Sizing</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#FFF7EC]">
                    <span>Material Grade:</span>
                    <span className="font-bold text-[#1A1208]">MS / EN8 / High-Tensile / SS</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#FFF7EC]">
                    <span>Quantity Required:</span>
                    <span className="font-bold text-[#1A1208]">Batch &amp; Bulk Supply</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#FFF7EC]">
                    <span>Delivery Location:</span>
                    <span className="font-bold text-[#1A1208]">Direct Site Drop Across Odisha</span>
                  </li>
                </ul>
              </div>

              {/* Instant Quote Action Card */}
              <div className="s-card p-8 bg-[#1A1208] text-[#FFF7EC] space-y-4">
                <div className="text-[10px] font-mono uppercase text-[#F45F02] tracking-widest font-bold">
                  PROJECT PROCUREMENT
                </div>
                <h4 className="font-display font-black text-xl text-white uppercase">
                  Need a Quote for {category.title}?
                </h4>
                <p className="text-xs text-[#C4B49A] leading-relaxed">
                  Share your required sizes, grades, and quantities. We will respond with competitive wholesale rates and immediate stock availability.
                </p>
                <button 
                  onClick={() => onOpenQuote(category.title)} 
                  className="w-full btn-bubbles py-4 text-xs font-bold justify-center"
                >
                  <span /><span /><span /><span /><span />
                  <span>
                    Request Instant Quotation
                    <LuArrowUpRight className="w-4 h-4 ml-1 stroke-[2.5]" />
                  </span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. OTHER CORE DIVISIONS ─────────────────────────────── */}
      <section className="py-20 s-section-sand border-t border-[rgba(30,22,21,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="s-pill mb-2">EXPLORE MORE</div>
              <h2 className="s-heading text-2xl sm:text-4xl text-[#1A1208]">
                OTHER PRODUCT DIVISIONS.
              </h2>
            </div>
            <Link to="/products" className="text-xs font-mono font-bold text-[#F45F02] hover:underline flex items-center gap-1">
              <span>View All 6 Divisions</span>
              <LuArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {productCategories.filter(c => c.id !== category.id).map(c => (
              <Link 
                key={c.id} 
                to={`/products/${c.id}`}
                className="s-card p-5 group flex flex-col justify-between hover:border-[#F45F02] transition-all bg-white"
              >
                <div>
                  <div className="text-[10px] font-mono font-black text-[#F45F02] mb-1">
                    {c.categoryNumber}
                  </div>
                  <div className="text-xs font-bold text-[#1A1208] group-hover:text-[#F45F02] transition-colors uppercase tracking-tight line-clamp-2">
                    {c.title}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-[#9A8470]">
                  <span>Explore</span>
                  <LuArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
