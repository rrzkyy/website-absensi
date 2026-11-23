-- Jalankan melalui Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  role text not null default 'employee' check (role in ('admin', 'employee')),
  created_at timestamptz not null default now()
);

create table if not exists public.attendance (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  work_date date not null default (now() at time zone 'Asia/Jakarta')::date,
  check_in timestamptz,
  check_out timestamptz,
  status text not null default 'hadir' check (status in ('hadir', 'terlambat', 'izin', 'sakit', 'tidak_hadir')),
  latitude double precision,
  longitude double precision,
  photo_url text,
  notes text,
  created_at timestamptz not null default now(),
  unique (user_id, work_date)
);

alter table public.profiles enable row level security;
alter table public.attendance enable row level security;

create policy "Read own profile or admin" on public.profiles
for select to authenticated using (id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

create policy "Read own attendance or admin" on public.attendance
for select to authenticated using (user_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

create policy "Employees create own attendance" on public.attendance
for insert to authenticated with check (user_id = auth.uid());

create policy "Employees update own attendance" on public.attendance
for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
