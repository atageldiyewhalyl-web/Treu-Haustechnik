/* The button kit: one pill with the icon in front of the label. `Cta` is the filled or outlined
   button, `TextLink` the bare icon-and-label one beside it (see "Buttons" in globals.css). */
import NextLink from 'next/link';
import type { ReactNode } from 'react';
import { Icon, type IconName } from '@/components/icons';
import { INQUIRY_ANCHOR } from '@/lib/site';
import { cx } from '@/lib/ui';

type Variant = 'accent' | 'dark' | 'light' | 'soft' | 'outline' | 'ghost';

/** Routes go through the router; anchors, phone numbers and outside addresses are plain links. */
export function Link({ href, ...props }: { href: string; className?: string; children: ReactNode; 'aria-label'?: string; onClick?: () => void }) {
  if (href.startsWith('/') && !href.startsWith('/#')) return <NextLink href={href} {...props} />;
  const outside = /^https?:/.test(href);
  return <a href={href} {...(outside && { target: '_blank', rel: 'noopener' })} {...props} />;
}

/** The icon a button gets when none is named: a phone for calls, a paper plane for the inquiry form, an arrow otherwise. */
const iconFor = (href: string): IconName => (href.startsWith('tel:') ? 'phone' : href.endsWith(INQUIRY_ANCHOR) ? 'send' : 'arrow');

export function Cta({ href, children, variant = 'accent', icon = iconFor(href), className }: { href: string; children: ReactNode; variant?: Variant; icon?: IconName; className?: string }) {
  return (
    <Link href={href} className={cx('btn', `btn--${variant}`, className)}>
      <span className="btn__icon"><Icon name={icon} /></span>
      <span>{children}</span>
    </Link>
  );
}

export function TextLink({ href, children, icon }: { href: string; children: ReactNode; icon?: IconName }) {
  return <Cta href={href} variant="ghost" icon={icon}>{children}</Cta>;
}
