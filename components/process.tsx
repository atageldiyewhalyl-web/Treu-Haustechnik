'use client';
/* "So arbeiten wir": the steps, driven by the page's own scroll.
   Desktop: a rail of steps beside one photo frame that shows the active step's picture. The block stays
   pinned while the page scrolls on, and that scroll distance walks through the steps and fills the rail.
   Phones: the frame is gone and the steps are cards in a row, photo above text. The row is pinned the same
   way and the scroll pulls the cards through from right to left.
   Where nothing is pinned (low windows, phones lying flat) the page just scrolls past: the desktop rail then
   follows the reading line and the cards are swiped by hand. The CSS is under `.steps` in globals.css.
   All steps are always readable: the frame is decoration. */
import Image from 'next/image';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { cx, idx } from '@/lib/ui';

export interface ProcessStep {
  label: string;
  title: string;
  text: string;
  image: string;
  /** Part of the photo to keep in view when it is cropped (CSS object-position) */
  focus?: string;
}

/** How long the last step stays up before the block lets go, as a share of one step's scroll distance */
const LAST_HOLD = 0.6;

/** `extra` joins the frame on the last step; `children` follow the list. */
export function ProcessSteps({ steps, extra, children }: { steps: ProcessStep[]; extra?: ReactNode; children?: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  // the pinned scroll distance, counted in steps
  const stretch = steps.length - 1 + LAST_HOLD;

  useEffect(() => {
    const el = track.current, block = pin.current, rail = list.current;
    if (!el || !block || !rail) return;
    let frame = 0;
    let height = 0;
    const update = () => {
      frame = 0;
      const items = Array.from(rail.children);
      const travel = el.offsetHeight - block.offsetHeight;
      // where the page stands on the rail: 1.5 is halfway from the second step to the third
      let at = 0;
      if (travel > 1) {
        // pinned: how far the block has moved down its track
        const moved = (block.getBoundingClientRect().top - el.getBoundingClientRect().top) / travel;
        at = Math.min(Math.max(moved, 0), 1) * stretch;
      } else {
        // the last step whose top has passed the reading line, a little below the middle of the screen
        const line = innerHeight * 0.6;
        items.forEach((item, i) => { if (item.getBoundingClientRect().top < line) at = i; });
      }
      // the block is centred below the header by its own height
      if (block.offsetHeight !== height) el.style.setProperty('--pin-h', `${(height = block.offsetHeight)}px`);
      el.style.setProperty('--at', at.toFixed(3));
      setActive(Math.min(items.length - 1, Math.floor(at)));
    };
    const onScroll = () => { frame ||= requestAnimationFrame(update); };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    const sized = new ResizeObserver(onScroll);
    sized.observe(block);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      sized.disconnect();
    };
  }, [stretch]);

  return (
    <div ref={track} className="steps" style={{ '--n': steps.length, '--stretch': stretch } as CSSProperties}>
      <div ref={pin} className="steps__pin">
        <div className="steps__stage" aria-hidden="true" data-reveal>
          {steps.map(({ image, focus }, i) => (
            <Image key={image} className={cx('steps__photo', i === active && 'is-on')} src={image} alt="" fill sizes="(max-width: 860px) 100vw, 620px" style={{ objectPosition: focus }} />
          ))}
          <p key={active} className="steps__caption"><small>{steps[active].label}</small><b>{steps[active].title}</b></p>
          {extra && <div className={cx('steps__extra', active === steps.length - 1 && 'is-on')}>{extra}</div>}
        </div>

        <div className="steps__body">
          <ol ref={list} className="steps__list">
            {steps.map(({ title, text, image, focus }, i) => (
              // `--i` places the item on the rail, and staggers the reveal of the row inside it
              <li key={title} className={cx('steps__item', i === active && 'is-on', i < active && 'is-done')} style={idx(i)}>
                {/* the reveal sits on an inner element whose classes never change: React rewrites the item's own when the active step moves on */}
                <div className="steps__row" data-reveal>
                  <span className="steps__node">
                    <Image className="steps__thumb" src={image} alt="" width={640} height={480} sizes="(max-width: 860px) 84vw, 64px" style={{ objectPosition: focus }} />
                    <b>{String(i + 1).padStart(2, '0')}</b>
                  </span>
                  <div className="steps__text">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          {children}
        </div>
      </div>
    </div>
  );
}
