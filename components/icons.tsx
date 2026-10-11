/* Line icons, drawn inline so they take the text colour. Service icons animate on hover and while
   their card is in view (see `.ani` in globals.css); these stand in for the Flaticon animated icons
   until the team's files are dropped in. */
import type { ReactNode, SVGProps } from 'react';

const ICONS = {
  // Interface
  arrow: <><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>,
  right: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  left: <><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></>,
  down: <><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  shield: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m17 8-5-5-5 5" /><path d="M12 3v12" /></>,
  camera: <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  award: <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></>,
  dots: <><circle cx="5" cy="12" r="1.4" /><circle cx="12" cy="12" r="1.4" /><circle cx="19" cy="12" r="1.4" /></>,
  instagram: <><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></>,
  // WhatsApp's own glyph (the brand mark, filled), not a line drawing
  whatsapp: <path fill="currentColor" stroke="none" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />,
  // Services
  flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
  fan: <><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" /><path d="M12 12v.01" /></>,
  radiator: <><rect width="16" height="11" x="4" y="6" rx="1.5" /><path d="M8 6v11" /><path d="M12 6v11" /><path d="M16 6v11" /><path d="M6 17v2.5" /><path d="M18 17v2.5" /><path d="M9 3c.6.5.6 1 0 1.5" /><path d="M15 3c.6.5.6 1 0 1.5" /></>,
  fuel: <><path d="M3 22h12" /><path d="M4 9h10" /><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" /><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0V9.83a2 2 0 0 0-.59-1.42L18 5" /></>,
  bath: <><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /><path d="M2 12h20" /><path d="M7 19v2" /><path d="M17 19v2" /><path d="m10 5-2 2" /></>,
  sparkles: <><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /></>,
  accessibility: <><circle cx="16" cy="4" r="1" /><path d="m18 19 1-7-6 1" /><path d="m5 8 3-3 5.5 3-2.36 3.5" /><path d="M4.24 14.5a5 5 0 0 0 6.88 6" /><path d="M13.76 17.5a5 5 0 0 0-6.88-6" /></>,
  glass: <><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" /><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" /></>,
  waves: <><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></>,
  filter: <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />,
  snowflake: <><path d="M2 12h20" /><path d="M12 2v20" /><path d="m20 16-4-4 4-4" /><path d="m4 8 4 4-4 4" /><path d="m16 4-4 4-4-4" /><path d="m8 20 4-4 4 4" /></>,
  airvent: <><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 8h12" /><path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" /><path d="M6.6 15.6A2 2 0 1 0 10 17v-5" /></>,
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  alert: <><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></>,
  thermometer: <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />,
  droplet: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />,
  droplets: <><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" /><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" /></>,
} as const satisfies Record<string, ReactNode>;

export type IconName = keyof typeof ICONS;

/** How a service icon moves; icons without an entry stay still. */
const MOTION: Partial<Record<IconName, string>> = {
  flame: 'flicker', fan: 'spin', snowflake: 'spin', droplet: 'drip', droplets: 'drip', waves: 'sway', wrench: 'wiggle',
  alert: 'pulse', sparkles: 'pulse', radiator: 'rise', thermometer: 'pulse', bath: 'sway', airvent: 'sway',
  glass: 'sway', filter: 'drip', fuel: 'wiggle', accessibility: 'sway', dots: 'pulse',
};

/* Two-tone drawings for the hero's fan cards, the trust facts and the sub-service cards: `.i2` strokes and `.i2f` fills
   take the accent colour (--icon-2), and the `.mv-*` parts move on their own (see `.duo` in globals.css).
   `motion` moves the whole icon on top of that. */
const DUO: Partial<Record<IconName, { art: ReactNode; motion?: string }>> = {
  flame: {
    art: <>
      <path className="mv-flame" d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      <path className="i2f mv-ember" d="M13 20a2.5 2.5 0 0 0 2.5-2.5c0-.8-.4-1.45-1.1-2.05-.55-.5-1.05-1.1-1.4-1.95-.35.85-.85 1.45-1.4 1.95-.7.6-1.1 1.25-1.1 2.05A2.5 2.5 0 0 0 13 20z" />
    </>,
  },
  bath: {
    art: <>
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /><path d="M2 12h20" /><path d="M7 19v2" /><path d="M17 19v2" /><path d="m10 5-2 2" />
      <circle className="i2f mv-bubble" cx="13.2" cy="8.4" r="1.2" /><circle className="i2f mv-bubble" cx="17.2" cy="5.6" r="1.7" /><circle className="i2f mv-bubble" cx="16.6" cy="9.4" r=".9" />
    </>,
  },
  snowflake: {
    motion: 'spin',
    art: <>
      <path d="M2 12h20" /><path d="M12 2v20" />
      <g className="i2 mv-breathe"><path d="m20 16-4-4 4-4" /><path d="m4 8 4 4-4 4" /><path d="m16 4-4 4-4-4" /><path d="m8 20 4-4 4 4" /></g>
    </>,
  },
  // Sub-services (service pages): the dark part is the thing itself, the accent is what it does
  radiator: {
    art: <>
      <rect width="16" height="11" x="4" y="7" rx="1.5" /><path d="M8 7v11" /><path d="M12 7v11" /><path d="M16 7v11" /><path d="M6 18v2.5" /><path d="M18 18v2.5" />
      <g className="i2"><path className="mv-rise" d="M8 2.5c.7.6.7 1.2 0 1.8" /><path className="mv-rise" d="M12 2.5c.7.6.7 1.2 0 1.8" /><path className="mv-rise" d="M16 2.5c.7.6.7 1.2 0 1.8" /></g>
    </>,
  },
  fan: {
    art: <>
      <path className="mv-spin" d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
      <circle className="i2f" cx="12" cy="12" r="1.7" />
    </>,
  },
  fuel: {
    art: <>
      <path d="M3 22h12" /><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path className="i2" d="M4 9h10" />
      <path className="i2 mv-bob" d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </>,
  },
  sparkles: {
    art: <>
      <path className="mv-breathe" d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <g className="i2 mv-blink"><path d="M20 3v4" /><path d="M22 5h-4" /></g>
      <g className="i2 mv-blink mv-late"><path d="M4 17v3" /><path d="M5.5 18.5h-3" /></g>
    </>,
  },
  accessibility: {
    art: <>
      <circle cx="16" cy="4" r="1" /><path d="m18 19 1-7-6 1" /><path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <g className="i2 mv-wheel"><path d="M4.24 14.5a5 5 0 0 0 6.88 6" /><path d="M13.76 17.5a5 5 0 0 0-6.88-6" /></g>
    </>,
  },
  glass: {
    art: <>
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path className="i2 mv-wave" d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </>,
  },
  waves: {
    art: <>
      <path className="mv-wave" d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path className="i2 mv-wave mv-late" d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path className="mv-wave" d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </>,
  },
  filter: {
    art: <>
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
      <path className="i2" d="M7 6.5h10" />
      <circle className="i2f mv-drop" cx="12" cy="13.5" r="1.1" />
    </>,
  },
  airvent: {
    art: <>
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 8h12" />
      <path className="i2 mv-flow" d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
      <path className="i2 mv-flow mv-late" d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
    </>,
  },
  thermometer: {
    art: <>
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
      <circle className="i2f" cx="12" cy="18" r="1.9" />
      <path className="i2 mv-level" d="M12 16.5V7" />
    </>,
  },
  droplets: {
    art: <>
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
      <path className="i2 mv-bob" d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    </>,
  },
  droplet: {
    motion: 'drip',
    art: <>
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      <path className="i2" d="M8.4 15.2a3.6 3.6 0 0 0 3.6 3.6" />
    </>,
  },
  // Trust facts: the medal's ribbon swings, the clock's hands turn, the pin hops, the two people bob in turn
  award: {
    art: <>
      <circle cx="12" cy="8" r="6" />
      <path className="i2 mv-swing" d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </>,
  },
  clock: {
    art: <>
      <circle cx="12" cy="12" r="10" />
      <path className="i2 mv-hand" d="M12 12V6" />
      <path className="i2 mv-hand mv-hand--slow" d="m12 12 4 2" />
    </>,
  },
  pin: {
    art: <g className="mv-hop">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle className="i2" cx="12" cy="10" r="3" />
    </g>,
  },
  users: {
    art: <>
      <g className="mv-bob"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></g>
      <g className="i2 mv-bob mv-bob--late"><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></g>
    </>,
  },
  alert: {
    motion: 'ring',
    art: <>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <g className="i2 mv-blink" strokeWidth="2.1"><path d="M12 9v4" /><path d="M12 17h.01" /></g>
    </>,
  },
};

export function Icon({ name, animated, duo, className, ...props }: { name: IconName; animated?: boolean; duo?: boolean } & SVGProps<SVGSVGElement>) {
  const two = duo ? DUO[name] : undefined;
  const motion = animated ? (two ? two.motion : MOTION[name]) : undefined;
  return (
    <svg
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false"
      className={[className, two && 'duo', motion && `ani ani--${motion}`].filter(Boolean).join(' ') || undefined}
      {...props}
    >
      {two ? two.art : ICONS[name]}
    </svg>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

/** Five stars; `value` of them filled. */
export function Stars({ value = 5, label }: { value?: number; label?: string }) {
  return (
    <span className="stars" role="img" aria-label={label ?? `${value} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((n) => <Star key={n} className={n <= value ? undefined : 'is-off'} />)}
    </span>
  );
}

export function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
