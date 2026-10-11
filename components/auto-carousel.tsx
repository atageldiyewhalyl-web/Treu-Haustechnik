'use client';
/* A row that moves on by itself wherever it is too wide for the screen: the hero's service cards on
   phones. Every few seconds it scrolls one card further and starts over at the end. It waits while the
   row is being touched (and a little after), while it is out of view, and it never runs for visitors
   who prefer reduced motion. On wider screens, where the row fits, it does nothing. */
import { useEffect, useRef, type ReactNode } from 'react';
import { prefersReducedMotion } from '@/lib/ui';

export function AutoCarousel({ className, interval = 3200, children }: { className?: string; interval?: number; children: ReactNode }) {
  const row = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = row.current;
    if (!el || prefersReducedMotion()) return;

    let visible = false;
    let quietUntil = 0;   // no automatic step before this time: the visitor is handling the row
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.25 });
    observer.observe(el);
    const hold = () => { quietUntil = Infinity; };
    const release = () => { quietUntil = Date.now() + 4000; };
    el.addEventListener('pointerdown', hold);
    el.addEventListener('touchstart', hold, { passive: true });
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);
    el.addEventListener('touchend', release);
    el.addEventListener('focusin', hold);
    el.addEventListener('focusout', release);

    const timer = setInterval(() => {
      const item = el.firstElementChild as HTMLElement | null;
      const end = el.scrollWidth - el.clientWidth;
      // only where the row really scrolls sideways (on wide screens the cards fan out and nothing moves)
      if (!item || !visible || document.hidden || Date.now() < quietUntil || end < 2 || getComputedStyle(el).overflowX === 'visible') return;
      const step = item.offsetWidth + (parseFloat(getComputedStyle(el).columnGap) || 0);
      el.scrollTo({ left: el.scrollLeft >= end - 4 ? 0 : Math.min(el.scrollLeft + step, end), behavior: 'smooth' });
    }, interval);

    return () => {
      clearInterval(timer);
      observer.disconnect();
      el.removeEventListener('pointerdown', hold);
      el.removeEventListener('touchstart', hold);
      el.removeEventListener('pointerup', release);
      el.removeEventListener('pointercancel', release);
      el.removeEventListener('touchend', release);
      el.removeEventListener('focusin', hold);
      el.removeEventListener('focusout', release);
    };
  }, [interval]);

  return <ul ref={row} data-lenis-prevent-horizontal className={className}>{children}</ul>;
}
