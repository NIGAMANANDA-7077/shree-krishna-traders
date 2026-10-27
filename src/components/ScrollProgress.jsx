import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const h = () => {
      const s = document.documentElement.scrollTop || document.body.scrollTop;
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setPct(total > 0 ? (s / total) * 100 : 0);
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[90] pointer-events-none bg-[#E8D8C4]">
      <div
        className="h-full bg-[#F45F02] shadow-[0_0_8px_#F45F02] transition-[width] duration-75 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
