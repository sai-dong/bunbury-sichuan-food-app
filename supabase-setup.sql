create table if not exists public.shared_food_plans (
  sync_id uuid primary key,
  sync_secret text not null,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.shared_food_plans enable row level security;

revoke all on public.shared_food_plans from anon, authenticated;

create or replace function public.save_shared_plan(
  p_sync_id uuid,
  p_sync_secret text,
  p_data jsonb
)
returns table(updated_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.shared_food_plans(sync_id, sync_secret, data, updated_at)
  values (p_sync_id, p_sync_secret, p_data, now())
  on conflict (sync_id) do update
    set data = excluded.data,
        updated_at = now()
    where public.shared_food_plans.sync_secret = p_sync_secret;

  if not found then
    raise exception 'Invalid sync code';
  end if;

  return query
    select public.shared_food_plans.updated_at
    from public.shared_food_plans
    where public.shared_food_plans.sync_id = p_sync_id
      and public.shared_food_plans.sync_secret = p_sync_secret;
end;
$$;

create or replace function public.load_shared_plan(
  p_sync_id uuid,
  p_sync_secret text
)
returns table(data jsonb, updated_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
    select public.shared_food_plans.data, public.shared_food_plans.updated_at
    from public.shared_food_plans
    where public.shared_food_plans.sync_id = p_sync_id
      and public.shared_food_plans.sync_secret = p_sync_secret;

  if not found then
    raise exception 'Invalid sync code';
  end if;
end;
$$;

grant execute on function public.save_shared_plan(uuid, text, jsonb) to anon;
grant execute on function public.load_shared_plan(uuid, text) to anon;
