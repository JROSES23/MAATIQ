# MAATIQ

Plataforma edtech de analítica predictiva multi-rol (Director, Profesor, Estudiante) construida con Next.js 14 + TypeScript + Tailwind CSS.

## Instalación rápida

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000`.

## Estructura del proyecto

- `app/`: rutas App Router por rol.
- `components/`: UI reutilizable, layouts, gráficos y módulos por rol.
- `lib/`: tipos estrictos, mock-data, utils y auth mock context.
- `public/logo.svg`: branding base.

## Demo funcional

1. Entrar en `/login`.
2. Seleccionar rol (Director / Profesor / Estudiante).
3. Navegar dashboards y páginas por rol con datos mock realistas.

## Cómo agregar Supabase (siguiente fase)

1. Crear proyecto Supabase y obtener URL + anon key.
2. Reemplazar `lib/auth-context.tsx` por auth real (email/password o SSO).
3. Migrar `lib/mock-data.ts` a consultas SQL/edge functions.
4. Agregar RLS por tenant y rol.
5. Crear API routes o server actions para ingestión y predicción.

## Deploy en Vercel

1. Subir repo a GitHub.
2. Importar proyecto en Vercel.
3. Framework preset: Next.js.
4. Build command: `next build`.
5. Variables de entorno (cuando exista backend): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## Esquema SQL sugerido

```sql
create table tenants (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  created_at timestamptz default now()
);

create table users (
  id uuid primary key,
  tenant_id uuid references tenants(id),
  nombre text not null,
  rol text check (rol in ('director','profesor','estudiante')),
  created_at timestamptz default now()
);

create table courses (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id),
  nombre text not null,
  nivel text,
  materia text,
  profesor_id uuid references users(id)
);

create table students_metrics (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references users(id),
  course_id uuid references courses(id),
  promedio numeric(3,1),
  asistencia numeric(5,2),
  dias_sin_login int,
  risk_score int,
  risk_category text check (risk_category in ('bajo','medio','alto')),
  captured_at timestamptz default now()
);

create table tutoring_sessions (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references courses(id),
  tutor_id uuid references users(id),
  tutorado_id uuid references users(id),
  status text check (status in ('activa','completada')),
  fecha date
);
```

## Notas

- Proyecto 100% mock para correr out-of-the-box sin `.env`.
- Server Components por defecto; `use client` solo en UI interactiva/gráficos.
- Listo para extender con modelo ML real y Supabase.
