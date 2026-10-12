'use client';
/* Carousels: native scroll + snap; the arrow buttons page by the number of fully visible cards.
   An `auto` carousel also moves on by itself, slowly and without an end. Its cards are rendered twice in
   a row (the second set carries `data-clone`), and each time the row has moved on by one whole set it
   jumps back by that width, which nobody sees. It waits under the pointer, while it is touched or holds
   the keyboard focus, after an arrow click and while it is out of view. Visitors who prefer reduced
   motion get the plain carousel with one set. */
import { createContext, use, useCallback, useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from 'react';
import { useCopy } from '@/components/i18n';
import { Icon } from '@/components/icons';
import { fill } from '@/lib/i18n';
import { cx, prefersReducedMotion } from '@/lib/ui';

/** The automatic drift in pixels per second: slow enough to read a card while it passes. */
const DRIFT = 28;

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

export function Carousel({ auto, children }: { auto?: boolean; children: ReactNode }) {
  const scroller = useRef<HTMLUListElement>(null);
  const [nav, setNav] = useState({ canPrev: false, canNext: true });
  // An endless row: the width of one set of cards (0 = the row has an end), and until when the drift waits
  const loop = useRef({ span: 0, quietUntil: 0 });

  useEffect(() => {
    const el = scroller.current;
    const first = el?.firstElementChild as HTMLElement | null | undefined;
    const copy = el?.querySelector<HTMLElement>('[data-clone]');
    if (!el || !first || !copy || !auto || prefersReducedMotion()) return;

    const state = loop.current;
    el.classList.add('is-auto');   // shows the second set and lets the row rest anywhere (no snapping)
    const measure = () => { state.span = copy.offsetLeft - first.offsetLeft; };
    measure();

    let visible = false;
    let hovered = false;
    let pos = -1;   // where the drift stands, to a fraction of a pixel; -1 while it waits
    let last = 0;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(el);

    const wait = (ms: number) => { state.quietUntil = performance.now() + ms; };
    const hold = () => wait(Infinity);
    const onEnter = (event: PointerEvent) => { if (event.pointerType === 'mouse') hovered = true; };
    const onLeave = () => { hovered = false; };
    const onRelease = () => wait(3500);   // a swipe coasts on for a moment
    const onWheel = () => wait(2500);
    const onBlur = () => wait(1500);

    let frame = requestAnimationFrame(function tick(now) {
      frame = requestAnimationFrame(tick);
      const elapsed = Math.min(now - last, 64);
      last = now;
      if (!visible || hovered || document.hidden || now < state.quietUntil) {
        if (pos >= 0) { pos = -1; el.style.translate = ''; }
        return;
      }
      if (pos < 0) pos = el.scrollLeft;
      pos += (DRIFT * elapsed) / 1000;
      if (pos >= state.span) pos -= state.span;
      // Some browsers scroll in whole pixels only; a shift of less than a pixel makes up the rest, so the slow movement stays even
      const whole = Math.floor(pos);
      el.scrollLeft = whole;
      el.style.translate = `${whole - pos}px`;
    });

    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);
    el.addEventListener('touchstart', hold, { passive: true });
    el.addEventListener('touchend', onRelease);
    el.addEventListener('touchcancel', onRelease);
    el.addEventListener('wheel', onWheel, { passive: true });
    el.addEventListener('focusin', hold);
    el.addEventListener('focusout', onBlur);
    addEventListener('resize', measure);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
      el.removeEventListener('touchstart', hold);
      el.removeEventListener('touchend', onRelease);
      el.removeEventListener('touchcancel', onRelease);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('focusin', hold);
      el.removeEventListener('focusout', onBlur);
      removeEventListener('resize', measure);
      el.classList.remove('is-auto');
      el.style.translate = '';
      state.span = 0;
    };
  }, [auto]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      const endless = loop.current.span > 0;
      const canPrev = endless || el.scrollLeft > 2;
      const canNext = endless || el.scrollLeft < el.scrollWidth - el.clientWidth - 2;
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
    const step = item.offsetWidth + gap;
    const perPage = Math.max(1, Math.floor((el.clientWidth + gap) / step) - 1);
    // Cards start at whole steps: land on one, wherever the row was resting
    let target = (Math.round(el.scrollLeft / step) + dir * perPage) * step;
    const { span } = loop.current;
    if (span) {
      // An endless row never runs out: before it would, it jumps by one set, where it looks the same
      if (target < 0) { el.scrollLeft += span; target += span; }
      else if (target > el.scrollWidth - el.clientWidth) { el.scrollLeft -= span; target -= span; }
      loop.current.quietUntil = performance.now() + 5000;
    }
    el.scrollTo({ left: target, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
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
