import React from 'react';
import { LuPhone, LuMail, LuMapPin, LuClock, LuMessageSquare, LuArrowUpRight } from 'react-icons/lu';
import { companyInfo } from '../data/companyData';
import QuotationForm from '../components/QuotationForm';
import { useInView } from '../hooks/useInView';

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.08 });
  const [mapRef, mapInView] = useInView({ threshold: 0.1 });

  return (
    <div className="s-section-cream min-h-screen">
      {/* Hero */}
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 s-section-cream">
        <div className="max-w-6xl mx-auto" ref={heroRef}>
          <div className={`s-pill mb-6 reveal d1 ${heroInView ? 'visible' : ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className={`s-heading text-5xl sm:text-7xl lg:text-8xl text-[#1A1208] mb-6 reveal d2 ${heroInView ? 'visible' : ''}`}>
            CONTACT US.
          </h1>
          <p className={`text-base sm:text-lg text-[#9A8470] max-w-2xl reveal d3 ${heroInView ? 'visible' : ''}`}>
            Reach out for product enquiries, quotation requests, project supply coordination, or general information about our industrial supply services.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-16 s-section-white border-t border-[rgba(30,22,21,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={formRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className={`s-heading text-3xl sm:text-5xl text-[#1A1208] mb-6 reveal d1 ${formInView ? 'visible' : ''}`}>
                REACH US DIRECTLY.
              </h2>

              <a href={companyInfo.whatsappLink} target="_blank" rel="noopener noreferrer"
                className={`s-card p-6 flex items-center gap-4 group block reveal d2 ${formInView ? 'visible' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                  <LuMessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#9A8470] uppercase tracking-widest mb-0.5">WhatsApp (Fastest Response)</div>
                  <div className="font-bold text-[#1A1208] group-hover:text-emerald-500 font-mono transition-colors">+91 9437564007</div>
                </div>
                <LuArrowUpRight className="w-4 h-4 text-[#9A8470] ml-auto group-hover:text-emerald-500 transition-colors" />
              </a>

              {companyInfo.phones.map((p, i) => (
                <a key={p.number} href={`tel:${p.clean}`}
                  className={`s-card p-6 flex items-center gap-4 group block reveal d${i + 3} ${formInView ? 'visible' : ''}`}>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.08)] flex items-center justify-center text-[#F45F02] group-hover:bg-[#F45F02] group-hover:text-white transition-all shrink-0">
                    <LuPhone className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#9A8470] uppercase tracking-widest mb-0.5">{p.label}</div>
                    <div className="font-bold text-[#1A1208] group-hover:text-[#F45F02] font-mono transition-colors">{p.number}</div>
                  </div>
                </a>
              ))}

              <a href={`mailto:${companyInfo.email}`}
                className={`s-card p-6 flex items-center gap-4 group block reveal d5 ${formInView ? 'visible' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.08)] flex items-center justify-center text-[#F45F02] group-hover:bg-[#F45F02] group-hover:text-white transition-all shrink-0">
                  <LuMail className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-[#9A8470] uppercase tracking-widest mb-0.5">Email</div>
                  <div className="font-bold text-[#1A1208] group-hover:text-[#F45F02] font-mono transition-colors text-sm break-all">{companyInfo.email}</div>
                </div>
              </a>

              <div className={`s-card p-6 reveal d6 ${formInView ? 'visible' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.08)] flex items-center justify-center text-[#F45F02] shrink-0">
                    <LuMapPin className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#9A8470] uppercase tracking-widest mb-1">Office &amp; Warehouse</div>
                    <p className="text-sm text-[#1A1208] leading-relaxed">{companyInfo.address.full}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <LuClock className="w-3.5 h-3.5 text-[#9A8470]" />
                      <p className="text-[11px] text-[#9A8470]">{companyInfo.timings}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration */}
              <div className={`s-card p-5 reveal d6 ${formInView ? 'visible' : ''}`}>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <div className="text-[9px] text-[#9A8470] uppercase mb-0.5">GSTIN</div>
                    <div className="font-bold text-[#1A1208]">{companyInfo.gstin}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-[#9A8470] uppercase mb-0.5">UDYAM</div>
                    <div className="font-bold text-[#1A1208] text-[10px]">{companyInfo.udyam}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quotation Form */}
            <div className={`lg:col-span-7 reveal-right d2 ${formInView ? 'visible' : ''}`}>
              <QuotationForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOOGLE MAPS SECTION ───────────────────────────────── */}
      <section className="py-20 s-section-cream border-t border-[rgba(30,22,21,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={mapRef}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className={`s-pill mb-4 reveal d1 ${mapInView ? 'visible' : ''}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02] animate-pulse" />
                <span>WAREHOUSE &amp; DISPATCH LOCATION</span>
              </div>
              <h2 className={`s-heading text-3xl sm:text-5xl lg:text-6xl text-[#1A1208] reveal d2 ${mapInView ? 'visible' : ''}`}>
                VISIT OUR CUTTACK GODOWN.
              </h2>
              <p className={`text-sm sm:text-base text-[#52432E] mt-2 max-w-xl reveal d3 ${mapInView ? 'visible' : ''}`}>
                Conveniently situated in Rajendra Nagar, Madhupatna — Cuttack's central industrial distribution corridor, enabling rapid dispatches across Odisha.
              </p>
            </div>

            <div className={`flex flex-wrap gap-3 shrink-0 reveal d3 ${mapInView ? 'visible' : ''}`}>
              <a
                href={companyInfo.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cssbuttons-io btn-sm text-xs"
              >
                <span>
                  <LuMapPin className="w-4 h-4 mr-1.5 stroke-[2]" />
                  Open in Google Maps
                  <LuArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </a>
              <a
                href={`tel:${companyInfo.primaryPhone}`}
                className="btn-bubbles btn-sm text-xs"
              >
                <span /><span /><span /><span /><span />
                <span>
                  <LuPhone className="w-4 h-4 text-[#F45F02]" />
                  Call for Directions
                </span>
              </a>
            </div>
          </div>

          {/* Map Frame Card */}
          <div className={`s-card p-3 sm:p-4 overflow-hidden reveal d4 ${mapInView ? 'visible' : ''}`}>
            {/* Top Bar inside card */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2.5 mb-2 rounded-2xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.06)] text-xs font-mono text-[#52432E]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold text-[#1A1208]">SHREE KRISHNA TRADERS</span>
                <span className="hidden sm:inline text-[#9A8470]">· Rajendra Nagar, Madhupatna, Cuttack - 753010</span>
              </div>
              <div className="text-[11px] text-[#9A8470]">
                GPS: <span className="font-bold text-[#1A1208]">20°26'59.8"N 85°53'57.7"E</span>
              </div>
            </div>

            {/* Google Maps iFrame */}
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden bg-[#F5EADB] border border-[rgba(30,22,21,0.08)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3738.3711554761926!2d85.8967780752409!3d20.449943481058515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDI2JzU5LjgiTiA4NcKwNTMnNTcuNyJF!5e0!3m2!1sen!2sin!4v1792602735098!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Shree Krishna Traders Office & Warehouse Location, Cuttack"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
