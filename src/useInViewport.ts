import { useEffect, useRef, useState } from 'react';

/** Replacement for the old `react-in-viewport` HOC. */
export function useInViewport<T extends Element>(rootMargin = '0px') {
  const ref = useRef<T>(null);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInViewport(entry.isIntersecting), {
      rootMargin,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inViewport };
}
