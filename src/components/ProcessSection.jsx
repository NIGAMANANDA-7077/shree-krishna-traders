import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    number: '01',
    title: 'Share Your Requirement',
    desc: 'Contact us via WhatsApp, phone, or our quotation form with your product specifications, quantities, and project site location.',
  },
  {
    number: '02',
    title: 'Technical Review & Quotation',
    desc: 'Our Cuttack desk reviews your bill of quantities, checks brand stock availability, and prepares a competitive itemized quotation.',
  },
  {
    number: '03',
    title: 'Order Confirmation',
    desc: 'Once you confirm the quotation, we raise a GST-compliant invoice and schedule the stock reservation or dispatch timeline.',
  },
  {
    number: '04',
    title: 'Direct Site Delivery',
    desc: 'We dispatch verified goods with original manufacturer packaging directly to your project site, warehouse, or delivery address across Odisha.',
  },
];

export default function ProcessSection({ onOpenQuote }) {
  const [ref, inView] = useInView({ threshold: 0.08 });
  return (
    <section className="py-24 s-section-sand border-t border-[rgba(30,22,21,0.07)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className={`s-pill mb-4 reveal d1 ${inView ? 'visible' : ''}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
              <span>HOW IT WORKS</span>
            </div>
            <h2 className={`s-heading text-4xl sm:text-6xl text-[#2D241C] reveal d2 ${inView ? 'visible' : ''}`}>
              SIMPLE. FAST. RELIABLE.
            </h2>
            <p className={`mt-4 text-base text-[#9A8470] reveal d3 ${inView ? 'visible' : ''}`}>
              Our streamlined supply process ensures you receive the right products at the right time — every time.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className={`animated-button shrink-0 reveal d4 ${inView ? 'visible' : ''}`}
          >
            <span className="circle" />
            <span className="text">Start a Quotation</span>
            <svg className="arr-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <svg className="arr-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className={`s-card p-7 flex flex-col gap-4 reveal d${i + 1} ${inView ? 'visible' : ''}`}>
              <span className="s-heading text-6xl text-[#F45F02]/20 leading-none">{step.number}</span>
              <div>
                <h3 className="font-display font-black text-sm text-[#2D241C] uppercase tracking-tight mb-2">{step.title}</h3>
                <p className="text-xs text-[#9A8470] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
