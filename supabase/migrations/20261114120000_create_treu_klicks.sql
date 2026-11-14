-- Counts clicks on the phone, WhatsApp and email links of treu-haustechnik.de, for the monthly report.
-- Stores only the kind of link and the page path: no IP, no cookie, no visitor id.
create table if not exists public.treu_klicks (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  kind text not null check (kind in ('phone', 'whatsapp', 'email')),
  path text
);

alter table public.treu_klicks enable row level security;

create index if not exists treu_klicks_created_at_idx
  on public.treu_klicks (created_at desc);
