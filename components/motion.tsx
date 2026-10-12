'use client';
/* Scroll reveals: anything carrying `data-reveal` fades up once as it enters the viewport.
   Groups stagger their children through `--i` (lib/ui.ts, idx). Runs again after each navigation. */
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { prefersReducedMotion } from '@/lib/ui';

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('is-ready');
    const pending = () => document.querySelectorAll('[data-reveal]:not(.is-in)');
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      pending().forEach((item) => item.classList.add('is-in'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    const watch = () => pending().forEach((item) => observer.observe(item));
    watch();
    // items that are rendered anew later (the dev language switch re-keys translated lists) would stay hidden otherwise
    const added = new MutationObserver(watch);
    added.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      added.disconnect();
    };
  }, [pathname]);

  return null;
}
