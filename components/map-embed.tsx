'use client';
/* Google Maps. The frame loads only with the visitor's consent, given in the consent banner or with the
   button here (components/consent.tsx); until then no data goes to Google. */
import Link from 'next/link';
import { useConsent } from '@/components/consent';
import { useCopy } from '@/components/i18n';
import { Icon } from '@/components/icons';
import { fill } from '@/lib/i18n';
import { SITE } from '@/lib/site';

export function MapEmbed() {
  const { map } = useCopy();
  const { maps, allowMaps } = useConsent();

  if (maps) {
    return (
      <div className="map">
        <iframe src={SITE.mapsEmbed} title={fill(map.title, { address: `${SITE.street}, ${SITE.zip} ${SITE.city}` })} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
    );
  }

  return (
    <div className="map map--idle">
      <Icon name="pin" />
      <p><strong>{SITE.street}</strong><br />{SITE.zip} {SITE.district}</p>
      <div className="map__actions">
        <button className="btn btn--dark" type="button" onClick={allowMaps}><span className="btn__icon"><Icon name="pin" /></span><span>{map.load}</span></button>
        <a className="btn btn--soft" href={SITE.mapsUrl} target="_blank" rel="noopener"><span className="btn__icon"><Icon name="arrow" /></span><span>{map.route}</span></a>
      </div>
      <p className="map__note">{map.note} <Link href="/datenschutz">{map.privacy}</Link>.</p>
    </div>
  );
}
