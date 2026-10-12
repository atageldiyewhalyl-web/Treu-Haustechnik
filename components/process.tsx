/* A simple aligned process sequence. Every stage stays visible without panels or decorative effects. */
import Image from 'next/image';
import type { ReactNode } from 'react';
import { idx } from '@/lib/ui';

export interface ProcessStep {
  label: string;
  title: string;
  text: string;
  image: string;
  /** Part of the photo to keep in view when it is cropped (CSS object-position) */
  focus?: string;
}

export function ProcessSteps({ steps, note, children }: { steps: ProcessStep[]; note: string; children?: ReactNode }) {
  return (
    <div className="process-flow" data-reveal>
      <ol className="process-grid">
        {steps.map(({ label, title, text, image, focus }, i) => (
          <li key={title} className="process-step" style={idx(i)}>
            <div className="process-step__media">
              <Image src={image} alt="" fill sizes="(max-width: 640px) 120px, (max-width: 960px) 50vw, 310px" style={{ objectPosition: focus }} />
            </div>
            <div className="process-step__copy">
              <p className="process-step__index">{label}</p>
              <h3>{title}</h3>
              <p className="process-step__text">{text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="process-flow__footer">
        <p>{note}</p>
        {children}
      </div>
    </div>
  );
}
