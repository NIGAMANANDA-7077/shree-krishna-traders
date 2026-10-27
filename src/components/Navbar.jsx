import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuArrowUpRight, LuMenu, LuX, LuPhone } from 'react-icons/lu';
import { companyInfo } from '../data/companyData';

export default function Navbar({ onOpenQuote }) {
  const [open,    setOpen]    = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  useEffect(() => setOpen(false), [loc.pathname]);

  const links = [
    { name: 'Home',     path: '/' },
    { name: 'About',    path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Brands',   path: '/brands' },
    { name: 'Gallery',  path: '/gallery' },
    { name: 'Contact',  path: '/contact' },
  ];
  const isActive = p => p === '/' ? loc.pathname === '/' : loc.pathname.startsWith(p);

  return (
    <header className="fixed top-4 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none max-w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">

        {/* Floating pill nav */}
        <div className={`w-full max-w-full flex items-center justify-between floating-nav px-3.5 sm:px-6 py-2.5 sm:py-3
          transition-all duration-300 ${scrolled ? 'shadow-[0_4px_24px_-6px_rgba(30,22,21,0.15)]' : ''}`}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group min-w-0">
            <img
              src="/images/logo/skt-emblem.png"
              alt="Shree Krishna Traders Official Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-[0_2px_8px_rgba(234,179,8,0.25)] group-hover:rotate-12 transition-transform duration-300 shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-display tracking-tight text-sm sm:text-base md:text-[17px] text-[#2D241C] group-hover:text-[#F45F02] transition-colors leading-none uppercase truncate">
                SHREE KRISHNA TRADERS
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#9A8470] uppercase hidden sm:block truncate">
                Madhupatna, Cuttack
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map(l => (
              <Link key={l.name} to={l.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive(l.path)
                    ? 'bg-[#F45F02] text-white font-bold'
                    : 'text-[#5C4D3E] hover:text-[#2D241C] hover:bg-black/5'
                }`}>
                {l.name}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button onClick={onOpenQuote}
              className="hidden lg:inline-flex cssbuttons-io btn-sm shrink-0">
              <span>
                Get Started
                <LuArrowUpRight className="w-3.5 h-3.5 ml-1 stroke-[2.5]"/>
              </span>
            </button>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#2D241C] shrink-0" aria-label="menu">
              {open ? <LuX className="w-5 h-5"/> : <LuMenu className="w-5 h-5"/>}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden pointer-events-auto absolute top-full left-0 right-0 mt-2 mx-3
            bg-[#FFF7EC]/95 backdrop-blur-xl border border-[rgba(30,22,21,0.12)]
            rounded-3xl p-6 shadow-[0_20px_60px_-15px_rgba(30,22,21,0.2)] space-y-3">
            {links.map(l => (
              <Link key={l.name} to={l.path}
                className={`block px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  isActive(l.path)
                    ? 'bg-[#F45F02] text-white'
                    : 'text-[#2D241C] hover:bg-black/5'
                }`}>
                {l.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-[rgba(30,22,21,0.08)] space-y-2">
              <button onClick={() => { setOpen(false); onOpenQuote(); }}
                className="w-full cssbuttons-io btn-sm py-2.5 justify-center text-xs">
                <span>
                  Request a Quotation
                  <LuArrowUpRight className="w-4 h-4 ml-1 stroke-[2.5]"/>
                </span>
              </button>
              <a href={`tel:${companyInfo.primaryPhone}`}
                className="w-full animated-button-ghost btn-sm py-2.5 justify-center text-xs">
                <span className="circle" />
                <span className="text flex items-center gap-1.5"><LuPhone className="w-3.5 h-3.5 text-[#F45F02]"/> {companyInfo.primaryPhone}</span>
                <svg className="arr-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <svg className="arr-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
