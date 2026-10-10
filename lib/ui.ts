import type { CSSProperties } from 'react';

export const cx = (...parts: (string | false | null | undefined)[]) => parts.filter(Boolean).join(' ') || undefined;

/** Position in a staggered group: sets `--i` for the reveal delay. */
export const idx = (i: number) => ({ '--i': i }) as CSSProperties;

export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
