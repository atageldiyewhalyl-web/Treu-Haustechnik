'use client';
/* Carousels: native scroll + snap; the arrow buttons page by the number of fully visible cards. */
import { createContext, use, useCallback, useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from 'react';
import { useCopy } from '@/components/i18n';
import { Icon } from '@/components/icons';
import { fill } from '@/lib/i18n';
import { cx, prefersReducedMotion } from '@/lib/ui';

interface CarouselApi {
  scroller: RefObject<HTMLUListElement | null>;
  canPrev: boolean;
  canNext: boolean;
  go(dir: 1 | -1): void;
}

const CarouselContext = createContext<CarouselApi | null>(null);

function useCarousel() {
  const api = use(CarouselContext);
  if (!api) throw new Error('Carousel is missing');
  return api;
}

export function Carousel({ children }: { children: ReactNode }) {
  const scroller = useRef<HTMLUListElement>(null);
  const [nav, setNav] = useState({ canPrev: false, canNext: true });

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      const canPrev = el.scrollLeft > 2;
      const canNext = el.scrollLeft < el.scrollWidth - el.clientWidth - 2;
      setNav((prev) => (prev.canPrev === canPrev && prev.canNext === canNext ? prev : { canPrev, canNext }));
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    return () => { el.removeEventListener('scroll', update); removeEventListener('resize', update); };
  }, []);

  const go = useCallback((dir: 1 | -1) => {
    const el = scroller.current;
    const item = el?.firstElementChild as HTMLElement | null;
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const perPage = Math.max(1, Math.floor((el.clientWidth + gap) / (item.offsetWidth + gap)) - 1);
    el.scrollBy({ left: dir * perPage * (item.offsetWidth + gap), behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, []);

  const api = useMemo(() => ({ scroller, go, ...nav }), [go, nav]);
  return <CarouselContext value={api}>{children}</CarouselContext>;
}

export function CarouselButtons({ label }: { label: string }) {
  const { canPrev, canNext, go } = useCarousel();
  const { carousel } = useCopy();
  return (
    <div className="carousel-nav">
      <button className="round-btn" type="button" aria-label={fill(carousel.prev, { label })} disabled={!canPrev} onClick={() => go(-1)}><Icon name="left" /></button>
      <button className="round-btn round-btn--dark" type="button" aria-label={fill(carousel.next, { label })} disabled={!canNext} onClick={() => go(1)}><Icon name="right" /></button>
    </div>
  );
}

export function CarouselTrack({ className, children }: { className?: string; children: ReactNode }) {
  const { scroller } = useCarousel();
  return <ul ref={scroller} data-lenis-prevent-horizontal className={cx('track', className)}>{children}</ul>;
}
