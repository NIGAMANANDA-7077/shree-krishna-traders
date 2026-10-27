import React from 'react';
import { Link } from 'react-router-dom';
import { LuArrowUpRight, LuMessageSquare } from 'react-icons/lu';
import { useInView } from '../hooks/useInView';

export default function CategoryCard({ category, onQuoteClick }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <div ref={ref} className={`s-card overflow-hidden flex flex-col h-full group reveal-scale ${inView ? 'visible' : ''}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#F5EDD8] rounded-t-[1.5rem]">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/products/Industrial fastener 1.jpeg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(30,22,21,0.12)] shadow-[0_4px_14px_rgba(0,0,0,0.16)]">
            <span className="text-[#F45F02] font-mono font-black text-xs">{category.categoryNumber}</span>
            <span className="w-1 h-1 rounded-full bg-[#1A1208]/30" />
            <span className="font-mono font-extrabold text-[10px] uppercase tracking-wider text-[#1A1208]">{category.badge}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base sm:text-[17px] font-bold text-[#1A1208] group-hover:text-[#F45F02] transition-colors mb-2 leading-snug">
          {category.title}
        </h3>
        <p className="text-xs text-[#3E342B] font-medium leading-relaxed flex-1 mb-4">
          {category.shortDesc}
        </p>

        {/* Brands */}
        {category.brandsAssociated?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {category.brandsAssociated.map(b => (
              <span key={b} className="text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-[#F5EDD8] text-[#1A1208] border border-[rgba(30,22,21,0.1)]">
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto">
          <Link
            to={`/products/${category.id}`}
            className="animated-button-ghost btn-sm flex-1 justify-center"
          >
            <span className="circle" />
            <span className="text">Explore</span>
            <svg className="arr-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg className="arr-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <button
            onClick={() => onQuoteClick(category.title)}
            className="cssbuttons-io btn-sm flex-1 justify-center"
          >
            <span>
              <LuMessageSquare className="w-3.5 h-3.5 mr-1" />
              Enquire
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
