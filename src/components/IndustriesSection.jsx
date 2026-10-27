import React from 'react';
import { industriesServed } from '../data/companyData';
import { useInView } from '../hooks/useInView';

export default function IndustriesSection() {
  const [ref, inView] = useInView({ threshold: 0.08 });
  return (
    <section className="py-24 s-section-white border-t border-[rgba(30,22,21,0.07)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="mb-16 max-w-3xl">
          <div className={`s-pill mb-4 reveal d1 ${inView ? 'visible' : ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
            <span>INDUSTRIES WE SERVE</span>
          </div>
          <h2 className={`s-heading text-4xl sm:text-6xl text-[#2D241C] reveal d2 ${inView ? 'visible' : ''}`}>
            ACROSS EVERY INDUSTRIAL SECTOR.
          </h2>
          <p className={`mt-4 text-base text-[#9A8470] reveal d3 ${inView ? 'visible' : ''}`}>
            Shree Krishna Traders supplies industrial consumables and materials across a diverse range of sectors in Odisha and Eastern India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industriesServed.map((industry, i) => (
            <div
              key={i}
              className={`s-card p-5 group reveal d${Math.min((i % 4) + 1, 6)} ${inView ? 'visible' : ''}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono font-black text-[#F45F02] mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-sm text-[#4D4035] uppercase tracking-wide mb-1.5 group-hover:text-[#F45F02] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-[11px] text-[#8F7D6D] leading-relaxed">{industry.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
