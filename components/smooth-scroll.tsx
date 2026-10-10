'use client';
/* Smooth, eased wheel scrolling (Lenis). The page still scrolls natively underneath, so the fixed header,
   the IntersectionObservers and anchor links keep working. Touch keeps the device's own momentum, and
   visitors who ask for reduced motion get plain scrolling (Lenis honours the setting).
   Carousels carry `data-lenis-prevent-horizontal`, so sideways swipes still move them. */
import Lenis from 'lenis';
import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: { offset: -84 },   // clear the fixed header
      stopInertiaOnNavigate: true,
      // The description field scrolls on its own
      prevent: (node) => node.nodeName === 'TEXTAREA',
    });

    // The open mobile menu locks the page (html.is-locked): pause until it closes
    const html = document.documentElement;
    let locked = false;
    const observer = new MutationObserver(() => {
      const now = html.classList.contains('is-locked');
      if (now === locked) return;
      locked = now;
      if (now) lenis.stop();
      else lenis.start();
    });
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}
