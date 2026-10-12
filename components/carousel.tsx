'use client';
/* Carousels: native horizontal scrolling with arrow controls. An `auto` carousel moves slowly on its own
   and pauses under the pointer, while touched or focused, after an arrow click and while out of view.
   A single-set carousel stays endless by moving a passed card to the other end of the row without
   changing the visible position. Older duplicated tracks are still supported. Visitors who prefer
   reduced motion get a plain, finite strip. */
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
  // Endless-row measurements, plus the time until automatic movement may resume.
  const loop = useRef({ span: 0, step: 0, circular: false, quietUntil: 0 });

  useEffect(() => {
    const el = scroller.current;
    const first = el?.firstElementChild as HTMLElement | null | undefined;
    const copy = el?.querySelector<HTMLElement>('[data-clone]');
    if (!el || !first || !auto || prefersReducedMotion()) return;

    const state = loop.current;
    const original = Array.from(el.children);
    state.circular = !copy && original.length > 1;
    el.classList.add('is-auto');
    const measure = () => {
      if (copy) state.span = copy.offsetLeft - first.offsetLeft;
      if (state.circular) {
        const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
        state.step = first.offsetWidth + gap;
      }
    };
    measure();

    // Keep one card before the visible start. It gives visitors room to move backwards as well as forwards.
    if (state.circular) {
      el.prepend(original[original.length - 1]);
      el.scrollLeft = state.step;
    }

    let visible = false;
    let hovered = false;
    let pos = -1;   // where the drift stands, to a fraction of a pixel; -1 while it waits
    let last = 0;
    let adjustingScroll = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(el);

    const wait = (ms: number) => { state.quietUntil = performance.now() + ms; };
    const hold = () => wait(Infinity);
    const onEnter = (event: PointerEvent) => { if (event.pointerType === 'mouse') hovered = true; };
    const onLeave = () => { hovered = false; };
    const onRelease = () => wait(3500);   // a swipe coasts on for a moment
    const onWheel = () => wait(2500);
    const onBlur = () => wait(1500);
    const onScroll = () => {
      if (!state.circular || !state.step || adjustingScroll) return;
      let next = el.scrollLeft;
      let changed = false;
      let moves = 0;
      while (next >= state.step * 2 && moves++ < original.length) {
        const passed = el.firstElementChild;
        if (!passed) break;
        el.append(passed);
        next -= state.step;
        changed = true;
      }
      while (next <= 0 && moves++ < original.length) {
        const previous = el.lastElementChild;
        if (!previous) break;
        el.prepend(previous);
        next += state.step;
        changed = true;
      }
      if (!changed) return;
      adjustingScroll = true;
      el.scrollLeft = next;
      pos = next;
      requestAnimationFrame(() => { adjustingScroll = false; });
    };

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
      if (state.circular && state.step) {
        // The first card has passed completely. Put it at the end and subtract exactly the space it used,
        // leaving the pixels in the viewport unchanged while the strip gains more road ahead.
        while (pos >= state.step * 2) {
          const passed = el.firstElementChild;
          if (!passed) break;
          el.append(passed);
          pos -= state.step;
        }
        // Rebuild the one-card buffer after a visitor has scrolled all the way to the left.
        while (pos < state.step) {
          const previous = el.lastElementChild;
          if (!previous) break;
          el.prepend(previous);
          pos += state.step;
        }
      } else if (state.span && pos >= state.span) {
        pos -= state.span;
      }
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
    el.addEventListener('scroll', onScroll, { passive: true });
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
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('focusin', hold);
      el.removeEventListener('focusout', onBlur);
      removeEventListener('resize', measure);
      el.classList.remove('is-auto');
      el.style.translate = '';
      original.forEach((item) => el.append(item));
      el.scrollLeft = 0;
      state.span = 0;
      state.step = 0;
      state.circular = false;
    };
  }, [auto]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      const endless = loop.current.circular || loop.current.span > 0;
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
    const state = loop.current;
    if (state.circular && state.step) {
      let current = el.scrollLeft;
      while (current >= state.step * 2) {
        const passed = el.firstElementChild;
        if (!passed) break;
        el.append(passed);
        current -= state.step;
      }
      while (current < state.step) {
        const previous = el.lastElementChild;
        if (!previous) break;
        el.prepend(previous);
        current += state.step;
      }
      el.scrollLeft = current;
      state.quietUntil = performance.now() + 5000;
      el.scrollTo({ left: current + dir * state.step, behavior: 'smooth' });
      return;
    }
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = item.offsetWidth + gap;
    const perPage = Math.max(1, Math.floor((el.clientWidth + gap) / step) - 1);
    // Cards start at whole steps: land on one, wherever the row was resting
    let target = (Math.round(el.scrollLeft / step) + dir * perPage) * step;
    const { span } = state;
    if (span) {
      // An endless row never runs out: before it would, it jumps by one set, where it looks the same
      if (target < 0) { el.scrollLeft += span; target += span; }
      else if (target > el.scrollWidth - el.clientWidth) { el.scrollLeft -= span; target -= span; }
      state.quietUntil = performance.now() + 5000;
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
