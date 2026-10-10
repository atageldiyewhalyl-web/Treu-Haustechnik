/* Questions that open to their answers. Native <details>: works without script, and browsers
   that support it slide the answer open (see `.faq` in globals.css). */
import { Icon } from '@/components/icons';
import { idx } from '@/lib/ui';

export interface FaqItem { q: string; a: string }

export function Faq({ items, open = 0 }: { items: FaqItem[]; open?: number }) {
  return (
    <div className="faq">
      {items.map(({ q, a }, i) => (
        <details key={q} className="faq__item" open={i === open} data-reveal style={idx(i)}>
          <summary><span>{q}</span><span className="faq__toggle" aria-hidden="true"><Icon name="chevron" /></span></summary>
          <div className="faq__a"><p>{a}</p></div>
        </details>
      ))}
    </div>
  );
}
