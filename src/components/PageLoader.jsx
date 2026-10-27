import React, { useEffect, useState } from 'react';

export default function PageLoader() {
  const [phase, setPhase] = useState('initial'); // 'initial' | 'entering' | 'pulsing' | 'exit' | 'gone'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stage 1: Logo awakens & pops in with spin
    const tEnter = setTimeout(() => {
      setPhase('entering');
    }, 60);

    // Stage 2: Progress ticker starts
    const t0 = performance.now();
    const duration = 1500;

    const tick = (now) => {
      const elapsed = Math.min((now - t0) / duration, 1);
      // Custom smooth easing: starts gentle, accelerates, then finishes
      const eased = Math.floor((1 - Math.pow(1 - elapsed, 2.8)) * 100);
      setProgress(eased);

      if (elapsed < 1) {
        requestAnimationFrame(tick);
      } else {
        setProgress(100);
        // Stage 3: Logo reaches full charge, brief pause to appreciate the completed circle
        setTimeout(() => {
          setPhase('exit');
          // Stage 4: Completely remove component from DOM after gentle, slower zoom transition
          setTimeout(() => {
            setPhase('gone');
          }, 1450);
        }, 280);
      }
    };

    const animFrame = requestAnimationFrame(tick);

    return () => {
      clearTimeout(tEnter);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (phase === 'gone') return null;

  const isExiting = phase === 'exit';

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #FFFDF9 0%, #FFF7EC 60%, #F5EADB 100%)'
      }}
    >
      {/* Dynamic Background Energy Rings emanating from the logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Ring 1 */}
        <div
          className={`absolute rounded-full border border-[#F45F02]/20 transition-all duration-1200 ${
            phase !== 'initial' ? 'w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] opacity-100 scale-100' : 'w-10 h-10 opacity-0 scale-50'
          } ${isExiting ? 'scale-[3.2] opacity-0 duration-1200' : ''}`}
        />
        {/* Ring 2 (Dashed industrial outer orbit) */}
        <div
          className={`absolute rounded-full border border-dashed border-[#F45F02]/30 animate-spin transition-all duration-1200 ${
            phase !== 'initial' ? 'w-[440px] h-[440px] sm:w-[580px] sm:h-[580px] opacity-80' : 'w-10 h-10 opacity-0'
          } ${isExiting ? 'scale-[3.8] opacity-0 duration-1200' : ''}`}
          style={{ animationDuration: '24s' }}
        />
        {/* Ring 3 (Soft Glow Aura) */}
        <div
          className={`absolute rounded-full bg-gradient-to-tr from-[#F45F02]/15 via-amber-300/20 to-transparent blur-3xl transition-all duration-1200 ${
            phase !== 'initial' ? 'w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] opacity-100' : 'w-0 h-0 opacity-0'
          } ${isExiting ? 'scale-[4.5] opacity-0 duration-1200' : ''}`}
        />
      </div>

      {/* Main Centerpiece: The Animated Emblem */}
      <div className="relative flex flex-col items-center justify-center z-10 px-4 text-center">
        
        {/* Logo Container with Smooth Opening Bloom & Gentle Slower Exit Zoom */}
        <div
          className={`relative transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            phase === 'initial'
              ? 'scale-0 rotate-[-180deg] opacity-0'
              : isExiting
              ? 'scale-[2.4] rotate-[180deg] opacity-0 filter blur-[1px] duration-1200'
              : 'scale-100 rotate-0 opacity-100'
          }`}
        >
          {/* Glowing Backing Disc */}
          <div className="absolute inset-0 rounded-full bg-white shadow-[0_12px_45px_rgba(244,95,2,0.3)] filter blur-[2px]" />

          {/* SVG Orbiting Border Line */}
          <svg
            className="w-32 h-32 sm:w-40 sm:h-40 -rotate-90 relative z-10"
            viewBox="0 0 120 120"
          >
            {/* Background Track */}
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="#F5EDD8"
              strokeWidth="3.5"
              fill="transparent"
            />
            {/* Animated Brand Progress Arc */}
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="#F45F02"
              strokeWidth="4"
              strokeDasharray={339.29}
              strokeDashoffset={339.29 - (339.29 * progress) / 100}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-150 ease-out"
            />
          </svg>

          {/* The SKT Emblem - Centered precisely inside the animated ring */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <img
              src="/images/logo/skt-emblem.png"
              alt="Shree Krishna Traders Emblem"
              className={`w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-500 ${
                progress === 100 ? 'scale-110 drop-shadow-[0_8px_25px_rgba(244,95,2,0.5)]' : 'scale-100 drop-shadow-[0_4px_16px_rgba(244,95,2,0.25)]'
              }`}
            />
          </div>
        </div>

        {/* Brand Name Typography Reveal */}
        <div
          className={`mt-8 space-y-2 transition-all duration-700 delay-100 ${
            phase === 'initial'
              ? 'opacity-0 translate-y-6'
              : isExiting
              ? 'opacity-0 -translate-y-6 duration-500'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[rgba(30,22,21,0.1)] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02] animate-ping" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#5C4D3E] uppercase">
              INDUSTRIAL SUPPLY &amp; FASTENERS · CUTTACK
            </span>
          </div>

          <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#1A1208] uppercase leading-none">
            SHREE KRISHNA <span className="text-[#F45F02]">TRADERS</span>
          </h1>

          {/* Percentage & Loading Microtext */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="font-mono text-xs text-[#9A8470] tracking-wider uppercase">
              {progress < 40
                ? 'Initializing Catalogue'
                : progress < 85
                ? 'Loading Industrial Inventory'
                : 'Ready for Dispatch'}
            </span>
            <span className="font-mono font-black text-xs text-[#F45F02] bg-[#FFF7EC] px-2 py-0.5 rounded border border-[#F45F02]/20">
              {progress}%
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Industrial Accent Coordinates */}
      <div
        className={`absolute bottom-6 inset-x-0 px-8 flex items-center justify-between font-mono text-[10px] text-[#9A8470] uppercase tracking-widest transition-opacity duration-500 ${
          phase === 'initial' || isExiting ? 'opacity-0' : 'opacity-80'
        }`}
      >
        <span>MADHUPATNA, CUTTACK — 753010</span>
        <span className="hidden sm:inline">ORIGINAL MANUFACTURER STOCKS</span>
        <span>GST: 21BAWPD4179C1ZT</span>
      </div>
    </div>
  );
}
