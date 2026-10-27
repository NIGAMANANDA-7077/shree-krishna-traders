import React, { useState } from 'react';
import { LuPlus, LuMinus } from 'react-icons/lu';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    q: 'What types of businesses do you supply?',
    a: 'We supply EPC contractors, infrastructure developers, PEB builders, steel fabricators, cement plants, power plants, warehousing companies, and industrial maintenance teams across Odisha and Eastern India.',
  },
  {
    q: 'Do you supply genuine branded products?',
    a: 'Yes. We supply 100% genuine products from leading brands including HP Landmark, SDHP, Bosch, fischer, Hilti, Fosroc, Sika, and ESAB. All products come in original factory packaging with Manufacturer Test Certificates (MTC) on request.',
  },
  {
    q: 'Can you deliver directly to construction sites?',
    a: 'Absolutely. We specialize in direct project site delivery across Cuttack, Bhubaneswar, Paradeep, Angul, Jajpur, Jharsuguda, and Rourkela. Emergency dispatches are also handled on call.',
  },
  {
    q: 'How do I request a quotation?',
    a: 'You can WhatsApp us on +91 9437564007, call our order desk, or fill in the Request a Quotation form on this website. Share product names, quantities, grade specifications, and your delivery location.',
  },
  {
    q: 'Do you provide GST-compliant invoices?',
    a: 'Yes. All transactions are issued with fully GST-compliant tax invoices. Our GSTIN is 21BAWPD4179C1ZT. We also hold UDYAM registration: UDYAM-OD-07-0126876.',
  },
  {
    q: 'Can you handle bulk orders for ongoing infrastructure projects?',
    a: 'Yes. We maintain buffer inventories and provide dedicated project-based supply coordination, milestone-aligned delivery schedules, and centralized billing for ongoing infrastructure and EPC contracts.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.08 });
  return (
    <section className="py-24 s-section-cream border-t border-[rgba(30,22,21,0.07)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="mb-14 text-center">
          <div className={`s-pill mb-4 inline-flex reveal d1 ${inView ? 'visible' : ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
            <span>FREQUENTLY ASKED</span>
          </div>
          <h2 className={`s-heading text-4xl sm:text-6xl text-[#2D241C] reveal d2 ${inView ? 'visible' : ''}`}>
            COMMON QUESTIONS.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`s-card overflow-hidden reveal d${Math.min(i + 1, 6)} ${inView ? 'visible' : ''}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left gap-4"
              >
                <span className="font-bold text-sm text-[#2D241C]">{faq.q}</span>
                <span className="w-7 h-7 rounded-full bg-[#F5EDD8] flex items-center justify-center text-[#F45F02] shrink-0">
                  {open === i ? <LuMinus className="w-4 h-4 stroke-[2.5]" /> : <LuPlus className="w-4 h-4 stroke-[2.5]" />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-sm text-[#5C4D3E] leading-relaxed border-t border-[rgba(30,22,21,0.07)] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
