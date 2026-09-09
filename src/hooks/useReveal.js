import { useEffect, useRef } from "react";

/**
 * Custom hook for scroll-reveal animations using IntersectionObserver.
 * Adds the "visible" class when the element enters the viewport.
 *
 * @param {number} [threshold=0.15] - Intersection threshold (0–1).
 * @returns {React.RefObject} - Ref to attach to the element.
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
