import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isVisible].
 * Apply ref to any element; isVisible becomes true when it enters viewport.
 */
export function useInView(options = {}) {
  const ref  = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        if (options.once !== false) ob.unobserve(el);
      } else if (options.once === false) {
        setVisible(false);
      }
    }, {
      threshold: options.threshold ?? 0.12,
      rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
    });
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return [ref, visible];
}
