import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 1500 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const end = parseInt(target, 10) || 0;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4); // ease-out quartic
          setCount(Math.floor(eased * end));
          if (p < 1) requestAnimationFrame(tick);
          else setCount(end);
        };
        requestAnimationFrame(tick);
        ob.disconnect();
      }
    }, { threshold: 0.4 });
    ob.observe(el);
    return () => ob.disconnect();
  }, [target, duration]);

  return <span ref={ref} className="tabular-nums">{prefix}{count}{suffix}</span>;
}
