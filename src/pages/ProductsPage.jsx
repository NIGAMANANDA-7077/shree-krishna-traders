import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuSearch, LuArrowUpRight } from 'react-icons/lu';
import { productCategories } from '../data/companyData';
import CategoryCard from '../components/CategoryCard';
import { useInView } from '../hooks/useInView';

export default function ProductsPage({ onOpenQuote }) {
  const [search, setSearch] = useState('');
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  const filtered = productCategories.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.shortDesc.toLowerCase().includes(search.toLowerCase()) ||
    c.items.some(item => item.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="s-section-cream min-h-screen">
      {/* Hero */}
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 s-section-cream">
        <div className="max-w-6xl mx-auto" ref={heroRef}>
          <div className={`s-pill mb-6 reveal d1 ${heroInView ? 'visible' : ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
            <span>CORE CATALOGUE</span>
          </div>
          <h1 className={`s-heading text-5xl sm:text-7xl lg:text-8xl text-[#1A1208] mb-6 reveal d2 ${heroInView ? 'visible' : ''}`}>
            OUR PRODUCTS.
          </h1>
          <p className={`text-base sm:text-lg text-[#9A8470] max-w-2xl mb-10 reveal d3 ${heroInView ? 'visible' : ''}`}>
            6 comprehensive product divisions. All genuine, manufacturer-backed, and available for direct site supply across Odisha.
          </p>

          {/* Search */}
          <div className={`relative max-w-xl reveal d4 ${heroInView ? 'visible' : ''}`}>
            <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A8470]" />
            <input
              type="text"
              placeholder="Search products, categories, brands..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-[rgba(30,22,21,0.12)] text-[#1A1208] text-sm placeholder-[#C4B49A] focus:outline-none focus:border-[#F45F02] transition-colors shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 s-section-white border-t border-[rgba(30,22,21,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display font-black text-2xl text-[#1A1208] uppercase mb-2">No Results Found</h3>
              <p className="text-sm text-[#9A8470]">Try a different search term.</p>
              <button onClick={() => setSearch('')} className="mt-6 animated-button-ghost btn-sm">
                <span className="circle" />
                <span className="text">Clear Search</span>
                <svg className="arr-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <svg className="arr-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(category => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onQuoteClick={t => onOpenQuote(t)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
