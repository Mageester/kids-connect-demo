import { useEffect } from 'react';

export default function useReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal--visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ref]);
}
