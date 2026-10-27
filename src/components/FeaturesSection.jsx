import React from 'react';
import { 
  LuShieldCheck, 
  LuTag, 
  LuClock, 
  LuWrench, 
  LuZap, 
  LuCircleCheck, 
  LuArrowUpRight 
} from 'react-icons/lu';
import { useInView } from '../hooks/useInView';

const stackFeatures = [
  {
    number: '01',
    eyebrow: 'GENUINE PRODUCTS',
    title: '100% ORIGINAL FACTORY-SEALED STOCK',
    subtitle: 'AUTHORIZED BRANDS WITH MANUFACTURER TEST CERTIFICATES (MTC)',
    desc: 'We supply direct from verified manufacturers — HP Landmark, SDHP, Bosch, fischer, Sika, and Hilti. No local counterfeits or unbranded lots. Every box arrives factory-sealed with authentic Manufacturer Test Certificates (MTC) required for civil and structural client approvals.',
    specs: ['Factory MTC Available', 'Direct Brand Distributorship', 'Original Manufacturer Seals'],
    icon: LuShieldCheck,
    accent: '#F45F02',
  },
  {
    number: '02',
    eyebrow: 'WHOLESALE RATES',
    title: 'COMPETITIVE CONTRACTOR PRICING',
    subtitle: 'TRANSPARENT GST BILLING ON FULL-BOX & BULK BOQ ORDERS',
    desc: 'Direct trade tie-ups allow us to offer transparent wholesale prices for contractors, PEB fabricators, and plant maintenance teams. You receive itemized GST tax invoices (GSTIN: 21BAWPD4179C1ZT) with volume pricing on your full bill of quantities (BOQ).',
    specs: ['Direct Wholesale Rates', 'Itemized GST Invoices', 'BOQ Buffer Reservations'],
    icon: LuTag,
    accent: '#F45F02',
  },
  {
    number: '03',
    eyebrow: 'LOCAL INVENTORY',
    title: 'FAST DISPATCH FROM CUTTACK GODOWN',
    subtitle: 'READY BUFFER STOCKS FOR 24-HOUR SITE DELIVERY ACROSS ODISHA',
    desc: 'Idle machines and waiting labor cost project money. Our central godown at Rajendra Nagar, Madhupatna, Cuttack maintains ready buffer inventory of critical fasteners, epoxy anchors, and grouts, enabling same-day and 24-hour dispatches to Bhubaneswar, Paradeep, Angul, Jajpur, and Rourkela.',
    specs: ['Madhupatna Cuttack Hub', 'Buffer Stock Maintained', 'Same-Day / 24H Delivery'],
    icon: LuClock,
    accent: '#F45F02',
  },
  {
    number: '04',
    eyebrow: 'ENGINEERING SUPPORT',
    title: 'PRACTICAL SITE & TECHNICAL SUPPORT',
    subtitle: 'ANCHOR SIZING, DRILL DIAMETERS & CHEMICAL DOSAGE GUIDANCE',
    desc: 'Not sure about anchor embedment depth or grout quantity? Our Cuttack desk works directly with site supervisors and engineers to calculate drill hole diameters, embedment depths, pull-out loads, and concrete admixture batch dosage.',
    specs: ['Embedment Depth Sizing', 'Pull-Out Ratings Guidance', 'Chemical Dosage Support'],
    icon: LuWrench,
    accent: '#F45F02',
  },
  {
    number: '05',
    eyebrow: 'HIGH-TENSILE & SEISMIC',
    title: 'TESTED STRUCTURAL & HEAVY-DUTY GRADES',
    subtitle: 'GRADE 8.8 / 10.9 BOLTS & PURE EPOXY CHEMICAL MORTARS',
    desc: 'Supplying heavy civil and mechanical infrastructure. We stock Grade 8.8, 10.9, and 12.9 high-tensile hex bolts, custom M12 to M72 foundation bolts, and pure epoxy injection mortars approved for cracked concrete, heavy vibration, and seismic loads.',
    specs: ['Grade 8.8 / 10.9 / 12.9 Bolts', 'Custom M12–M72 Foundation Bolts', 'Cracked Concrete Approved'],
    icon: LuZap,
    accent: '#F45F02',
  },
  {
    number: '06',
    eyebrow: 'COMPLIANCE & SAFETY',
    title: 'VERIFIED GST & SAFETY STANDARDS',
    subtitle: 'IS-CERTIFIED PPE & PROFESSIONAL GARWARE BIRD NET RIGGING',
    desc: 'Complete business transparency with verified GSTIN (21BAWPD4179C1ZT) and UDYAM registration (UDYAM-OD-07-0126876). All site PPE complies with IS standards, and our Garware bird safety netting installations are carried out by height-trained rigging technicians.',
    specs: ['GSTIN: 21BAWPD4179C1ZT', 'UDYAM-OD-07-0126876', 'Certified Height Rigging'],
    icon: LuShieldCheck,
    accent: '#F45F02',
  },
];

export default function FeaturesSection() {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 sm:py-32 s-section-sand border-t border-[rgba(30,22,21,0.08)] relative">
      {/* Decorative background grid subtle overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#1A1208 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className={`s-pill mb-4 inline-flex reveal d1 ${headerInView ? 'visible' : ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02] animate-pulse" />
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className={`s-heading text-4xl sm:text-6xl lg:text-7xl text-[#2D241C] tracking-tight reveal d2 ${headerInView ? 'visible' : ''}`}>
            THE SHREE KRISHNA TRADERS <span className="text-[#F45F02]">ADVANTAGE.</span>
          </h2>

          <p className={`mt-5 text-sm sm:text-base text-[#5C4D3E] leading-relaxed max-w-2xl mx-auto reveal d3 ${headerInView ? 'visible' : ''}`}>
            Built to eliminate project downtime. Six reasons infrastructure developers, fabrication workshops, 
            and civil contractors rely on us across Odisha.
          </p>

          {/* Industrial rigging visual cue from Structa reference */}
          <div className="mt-8 flex items-center justify-center gap-4 text-[10px] font-mono text-[#9A8470] uppercase tracking-widest">
            <span className="inline-block w-8 h-[1px] bg-[rgba(30,22,21,0.2)]" />
            <span>SCROLL TO EXPLORE THE STACK</span>
            <span className="inline-block w-8 h-[1px] bg-[rgba(30,22,21,0.2)]" />
          </div>
        </div>

        {/* ─── STICKY STACKING CARDS DECK ──────────────────────────── */}
        <div className="max-w-3xl mx-auto relative pb-24 sm:pb-36">
          {stackFeatures.map((feat, index) => {
            // Progressive sticky top offset: each card stops slightly lower than the previous one
            // so the previous cards' top edges remain visible as a physical stacked deck
            const topOffset = `calc(84px + ${index * 18}px)`;
            const zIndex = index + 10;
            const isLast = index === stackFeatures.length - 1;

            return (
              <div
                key={feat.number}
                className={`sticky ${isLast ? 'mb-0' : 'mb-16 sm:mb-24'}`}
                style={{
                  top: topOffset,
                  zIndex: zIndex,
                }}
              >
                {/* The Physical Card Body */}
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-[#FFFDF9] border border-[rgba(30,22,21,0.14)] p-6 sm:p-10 lg:p-12 shadow-[0_-8px_30px_rgba(30,22,21,0.08),0_24px_55px_-12px_rgba(30,22,21,0.18)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">

                  {/* Top Bar: Pill + Corner Technical Square (matching Structa reference) */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="s-pill-orange text-[10px] font-mono">
                      <span>ADVANTAGE {feat.number}</span>
                      <span className="opacity-40">/</span>
                      <span className="font-bold">{feat.eyebrow}</span>
                    </div>

                    {/* Industrial Corner Square Registration Marker (from user screenshot) */}
                    <div className="w-3.5 h-3.5 bg-[#2D241C] rounded-[2px] shadow-sm flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#FFFDF9] rounded-[0.5px]" />
                    </div>
                  </div>

                  {/* Giant Anton Number Header — exact visual from user reference image */}
                  <div className="relative select-none pointer-events-none mb-1">
                    <div className="s-heading text-7xl sm:text-9xl md:text-[130px] text-[#2D241C]/15 leading-none tracking-tight">
                      {feat.number}
                    </div>
                  </div>

                  {/* Bold Headline */}
                  <div className="relative -mt-6 sm:-mt-10 mb-4">
                    <h3 className="s-heading text-2xl sm:text-4xl lg:text-5xl text-[#2D241C] tracking-tight uppercase leading-[0.95]">
                      {feat.title}
                    </h3>
                    <div className="text-[11px] font-mono font-bold uppercase text-[#F45F02] tracking-wider mt-2">
                      {feat.subtitle}
                    </div>
                  </div>

                  {/* Supporting Copy */}
                  <p className="text-xs sm:text-sm text-[#5C4D3E] leading-relaxed mb-6 max-w-2xl">
                    {feat.desc}
                  </p>

                  {/* Specification Badges Footer */}
                  <div className="pt-4 border-t border-[rgba(30,22,21,0.08)] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {feat.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EDD8] text-[10px] font-mono font-bold text-[#5C4D3E]"
                        >
                          <LuCircleCheck className="w-3 h-3 text-[#F45F02]" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono font-bold text-[#F45F02]">
                      <span>0{index + 1} of 06</span>
                      <LuArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
