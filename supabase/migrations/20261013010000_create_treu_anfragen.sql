create table if not exists public.treu_anfragen (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  reason text not null,
  name text not null,
  phone text not null,
  email text not null,
  street text not null,
  zip text not null,
  town text not null,
  description text,
  photo_count integer not null default 0,
  language text,
  page_url text,
  user_agent text,
  consented_at timestamptz not null default now(),
  status text not null default 'received',
  email_sent_at timestamptz,
  resend_email_id text,
  email_error text
);

alter table public.treu_anfragen enable row level security;

create index if not exists treu_anfragen_created_at_idx
  on public.treu_anfragen (created_at desc);

create index if not exists treu_anfragen_status_idx
  on public.treu_anfragen (status);

create index if not exists treu_anfragen_email_idx
  on public.treu_anfragen (email);
