import React, { useState, useEffect } from 'react';
import { LuArrowUpRight, LuMessageSquare, LuPackageCheck } from 'react-icons/lu';
import { useInView } from '../hooks/useInView';
import { companyInfo } from '../data/companyData';
import { getDynamicGalleryItems } from '../lib/supabase';

const productMarqueeItems = [
  // Group 1: Anchoring Systems (1, 2, 3)
  {
    id: 'anchor-1',
    title: 'Mechanical & Chemical Anchoring Systems',
    group: 'Anchoring Systems',
    number: '01',
    image: '/images/products/Mechanical and chemical anchors Anchoring systems 1.jpeg',
    badge: 'Heavy Structural'
  },
  {
    id: 'anchor-2',
    title: 'Chemical Injection Mortars & Rebar Anchors',
    group: 'Anchoring Systems',
    number: '02',
    image: '/images/products/Mechanical and chemical anchors Anchoring systems 2.jpeg',
    badge: 'Pure Epoxy'
  },
  {
    id: 'anchor-3',
    title: 'High-Tensile Through Bolts & Studs',
    group: 'Anchoring Systems',
    number: '03',
    image: '/images/products/Mechanical and chemical anchors Anchoring systems 3.jpeg',
    badge: 'Seismic Grade'
  },

  // Group 2: Construction Chemicals (1, 2, 3, 4)
  {
    id: 'chem-1',
    title: 'Non-Shrink Structural Precision Grouts',
    group: 'Construction Chemicals',
    number: '01',
    image: '/images/products/Construction Chemicals 1.jpeg',
    badge: 'High Strength'
  },
  {
    id: 'chem-2',
    title: 'Concrete Admixtures & Bonding Agents',
    group: 'Construction Chemicals',
    number: '02',
    image: '/images/products/Construction Chemicals 2.jpeg',
    badge: 'Polymer Modified'
  },
  {
    id: 'chem-3',
    title: 'Micro-Concrete & Structural Repair Mortars',
    group: 'Construction Chemicals',
    number: '03',
    image: '/images/products/Construction Chemicals3.jpeg',
    badge: 'Civil Repair'
  },
  {
    id: 'chem-4',
    title: 'Specialized Concrete Curing & Sealants',
    group: 'Construction Chemicals',
    number: '04',
    image: '/images/products/Construction Chemicals 4.jpeg',
    badge: 'Surface Tech'
  },

  // Group 3: Waterproofing Solutions (1, 2, 3)
  {
    id: 'waterproof-1',
    title: 'Elastomeric Waterproofing Membranes',
    group: 'Waterproofing Solutions',
    number: '01',
    image: '/images/products/Waterproofing Solutions 1.jpeg',
    badge: 'Water Shield'
  },
  {
    id: 'waterproof-2',
    title: 'Crystalline Slurry Foundation Protection',
    group: 'Waterproofing Solutions',
    number: '02',
    image: '/images/products/Waterproofing Solutions 2.jpeg',
    badge: 'Basement & Raft'
  },
  {
    id: 'waterproof-3',
    title: 'Joint Sealants & Expansion Bar Tape',
    group: 'Waterproofing Solutions',
    number: '03',
    image: '/images/products/Waterproofing Solutions 3.jpeg',
    badge: 'Expansion Joint'
  },

  // Group 4: Industrial Fasteners (1, 2)
  {
    id: 'fastener-1',
    title: 'Grade 8.8 / 10.9 High-Tensile Fasteners',
    group: 'Industrial Fasteners',
    number: '01',
    image: '/images/products/Industrial fastener 1.jpeg',
    badge: 'Tested MTC'
  },
  {
    id: 'fastener-2',
    title: 'Custom Foundation & J-Bolts Assemblies',
    group: 'Industrial Fasteners',
    number: '02',
    image: '/images/products/Industrial fastener 2.jpeg',
    badge: 'Heavy Fabrication'
  },

  // Group 5: Welding & Cutting (1, 2, 3) + Painting & Blasting (1)
  {
    id: 'welding-1',
    title: 'MIG/TIG Welding Wires & Electrodes',
    group: 'Welding & Cutting',
    number: '01',
    image: '/images/products/Welding & Cutting 1.jpeg',
    badge: 'Industrial Grade'
  },
  {
    id: 'welding-2',
    title: 'Cutting Nozzles & Gas Regulators',
    group: 'Welding & Cutting',
    number: '02',
    image: '/images/products/Welding & Cutting 2.jpeg',
    badge: 'Heavy Duty'
  },
  {
    id: 'welding-3',
    title: 'Shielded Arc Welding Consumables',
    group: 'Welding & Cutting',
    number: '03',
    image: '/images/products/Welding & Cutting 3.jpeg',
    badge: 'Approved IS'
  },
  {
    id: 'painting-1',
    title: 'Industrial Painting & Surface Blasting Media',
    group: 'Surface Finishing',
    number: '01',
    image: '/images/products/Painting & Blasting 1.jpeg',
    badge: 'Anti-Corrosion'
  },

  // Group 6: Power Tools (1, 3, 4, 6, 7, 8, 9)
  {
    id: 'powertool-1',
    title: 'Heavy Rotary Hammer Drills & Breakers',
    group: 'Power Tools',
    number: '01',
    image: '/images/products/Power tools 1.jpeg',
    badge: 'Heavy Duty'
  },
  {
    id: 'powertool-3',
    title: 'High-Torque Impact Drivers & Wrenches',
    group: 'Power Tools',
    number: '03',
    image: '/images/products/Power tools 3.jpeg',
    badge: 'Site Ready'
  },
  {
    id: 'powertool-4',
    title: 'Industrial Angle Grinders & Cut-off Machines',
    group: 'Power Tools',
    number: '04',
    image: '/images/products/Power tools 4.jpeg',
    badge: 'Continuous Duty'
  },
  {
    id: 'powertool-6',
    title: 'Heavy Cutting Blades & Grinding Wheels',
    group: 'Power Tools',
    number: '06',
    image: '/images/products/Power tools 6.jpeg',
    badge: 'Reinforced'
  },
  {
    id: 'powertool-7',
    title: 'Professional Tool Storage & Power Kits',
    group: 'Power Tools',
    number: '07',
    image: '/images/products/Power tools 7.jpeg',
    badge: 'Workshop Grade'
  },
  {
    id: 'powertool-8',
    title: 'Demolition & Core Drilling Machinery',
    group: 'Power Tools',
    number: '08',
    image: '/images/products/Power tools 8.jpeg',
    badge: 'Heavy Plant'
  },
  {
    id: 'powertool-9',
    title: 'Precision Sockets & Torque Accessories',
    group: 'Power Tools',
    number: '09',
    image: '/images/products/Power tools 9.jpeg',
    badge: 'Industrial Standard'
  },

  // Group 7: Hand Tools (1, 2)
  {
    id: 'handtool-1',
    title: 'Drop-Forged Spanners & Mechanical Wrenches',
    group: 'Hand Tools',
    number: '01',
    image: '/images/products/Hand Tools 1.jpeg',
    badge: 'Chrome Vanadium'
  },
  {
    id: 'handtool-2',
    title: 'Heavy Pipe Wrenches & Clamping Tools',
    group: 'Hand Tools',
    number: '02',
    image: '/images/products/Hand Tools 2.jpeg',
    badge: 'Hardened Steel'
  },

  // Group 8: Safety Products (1, 2, 3, 4, 5, 6)
  {
    id: 'safety-1',
    title: 'IS-Certified Safety Helmets & Visors',
    group: 'Safety Products',
    number: '01',
    image: '/images/products/Safety Products 1.jpeg',
    badge: 'Personal Protection'
  },
  {
    id: 'safety-2',
    title: 'Full Body Safety Harnesses & Lanyards',
    group: 'Safety Products',
    number: '02',
    image: '/images/products/Safety Products 2.jpeg',
    badge: 'Height Rigging'
  },
  {
    id: 'safety-3',
    title: 'Industrial Safety Shoes & Chemical Boots',
    group: 'Safety Products',
    number: '03',
    image: '/images/products/Safety Products 3.jpeg',
    badge: 'Steel Toe Cap'
  },
  {
    id: 'safety-4',
    title: 'Heavy Cut-Resistant Hand Gloves',
    group: 'Safety Products',
    number: '04',
    image: '/images/products/Safety Products 4.jpeg',
    badge: 'Certified PPE'
  },
  {
    id: 'safety-5',
    title: 'Industrial Ear Defenders & Respirator Masks',
    group: 'Safety Products',
    number: '05',
    image: '/images/products/Safety Products 5.jpeg',
    badge: 'Respiratory & Hearing'
  },
  {
    id: 'safety-6',
    title: 'High-Visibility Reflective Jackets & Tape',
    group: 'Safety Products',
    number: '06',
    image: '/images/products/Safety Products 6.jpeg',
    badge: 'Site Visible'
  },

  // Group 9: Project Material Supply (1, 2, 3, 4, 5)
  {
    id: 'project-1',
    title: 'Direct Project Consignments & Pallet Loads',
    group: 'Project Supply',
    number: '01',
    image: '/images/products/Project Material Supply 1.jpeg',
    badge: 'Bulk BOQ'
  },
  {
    id: 'project-2',
    title: 'Central Godown Ready Buffer Stock',
    group: 'Project Supply',
    number: '02',
    image: '/images/products/Project Material Supply 2.jpeg',
    badge: 'Madhupatna Hub'
  },
  {
    id: 'project-3',
    title: 'Infrastructure & EPC Milestone Dispatch',
    group: 'Project Supply',
    number: '03',
    image: '/images/products/Project Material Supply 3.jpeg',
    badge: '24-Hour Odisha'
  },
  {
    id: 'project-4',
    title: 'Factory Sealed Certified Consignments',
    group: 'Project Supply',
    number: '04',
    image: '/images/products/Project Material Supply 4.jpeg',
    badge: 'MTC Attached'
  },
  {
    id: 'project-5',
    title: 'Pre-Engineered Building (PEB) Consumables',
    group: 'Project Supply',
    number: '05',
    image: '/images/products/Project Material Supply 5.jpeg',
    badge: 'Wholesale Billing'
  }
];

export default function ProductMarqueeGallery({ onOpenQuote }) {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const [itemsList, setItemsList] = useState(productMarqueeItems);

  useEffect(() => {
    // Fetch live uploaded items from storage / Supabase and include in continuous marquee
    getDynamicGalleryItems().then((customItems) => {
      if (customItems && customItems.length > 0) {
        const formatted = customItems.map((c, i) => ({
          id: c.id || `custom-${i}`,
          title: c.title,
          group: c.category,
          number: String(i + 1).padStart(2, '0'),
          image: c.image,
          badge: 'Latest Stock'
        }));
        setItemsList([...formatted, ...productMarqueeItems]);
      }
    });
  }, []);

  const duplicatedItems = [...itemsList, ...itemsList];

  return (
    <section className="py-24 s-section-sand border-t border-[rgba(30,22,21,0.08)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className={`s-pill reveal d1 ${inView ? 'visible' : ''}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02] animate-pulse" />
              <span>PRODUCT SPOTLIGHT · CONTINUOUS RIGHT-TO-LEFT SHOWCASE</span>
            </div>
            <h2 className={`s-heading text-4xl sm:text-6xl text-[#2D241C] reveal d2 ${inView ? 'visible' : ''}`}>
              MATERIALS &amp; HARDWARE GALLERY
            </h2>
            <p className={`text-sm sm:text-base text-[#5C4D3E] max-w-2xl reveal d3 ${inView ? 'visible' : ''}`}>
              Organized inventory groups dispatched direct from our Madhupatna Cuttack godown — mechanical &amp; chemical anchors, construction chemicals, fasteners, power tools, safety gear and project supplies.
            </p>
          </div>

          <div className={`flex items-center gap-3 reveal d4 ${inView ? 'visible' : ''}`}>
            <span className="hidden lg:inline-flex items-center gap-2 text-xs font-mono text-[#9A8470]">
              <LuPackageCheck className="w-4 h-4 text-[#F45F02]" />
              <span>Hover card to inspect</span>
            </span>
            <button
              onClick={() => onOpenQuote?.()}
              className="cssbuttons-io btn-sm shrink-0"
            >
              <span>
                Request Price List
                <LuArrowUpRight className="w-3.5 h-3.5 ml-1.5 stroke-[2.5]" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ─── Infinite Right-to-Left Scrolling Track ──────────────── */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Subtle gradient side fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F5EDD8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F5EDD8] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-gallery gap-5 py-4 px-2">
          {duplicatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => onOpenQuote?.(item.title)}
              className="s-card bg-white border border-[rgba(30,22,21,0.12)] rounded-2xl overflow-hidden hover:shadow-[0_16px_40px_-12px_rgba(244,95,2,0.22)] hover:border-[#F45F02]/50 transition-all duration-300 w-[290px] sm:w-[320px] shrink-0 flex flex-col justify-between group cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-52 w-full bg-[#FFFDF9] border-b border-[rgba(30,22,21,0.06)] overflow-hidden flex items-center justify-center p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/products/anchoring-products.jpg';
                  }}
                />

                {/* Top Floating Badges: High Contrast Solid White Pills - No Collisions */}
                <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[rgba(30,22,21,0.14)] shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
                    <span className="text-[#F45F02] font-mono font-black text-xs">#{item.number}</span>
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white border border-[rgba(30,22,21,0.14)] shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                    <span className="font-mono font-black text-[10px] uppercase tracking-wider text-[#1A1208]">
                      {item.badge}
                    </span>
                  </span>
                </div>
              </div>

              {/* Text / Info Footer */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-[#FFF7EC] text-[#F45F02] font-mono font-black text-[10px] tracking-wider border border-[rgba(244,95,2,0.25)] shrink-0">
                      GROUP {item.number}
                    </span>
                    <span className="text-xs font-mono font-black uppercase tracking-wider text-[#2D241C] truncate">
                      {item.group}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-[15px] text-[#1A1208] group-hover:text-[#F45F02] transition-colors leading-snug line-clamp-2 min-h-[2.5rem]">
                    {item.title}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-[rgba(30,22,21,0.08)] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#F45F02] font-black flex items-center gap-1.5 group-hover:underline">
                    <span>Enquire Now</span>
                    <LuArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(`Hello Shree Krishna Traders, I would like to enquire about ${item.title} (${item.group} #${item.number}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all shadow-sm hover:scale-110"
                    title="Instant WhatsApp Enquiry"
                  >
                    <LuMessageSquare className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
