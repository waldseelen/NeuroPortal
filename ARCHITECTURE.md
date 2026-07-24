# NeuroPortal — Architecture

Technical companion to `README.md`. The README explains the *content* (the ADHD/OCD/polymathy/study science and how to run the site); this document explains *how the code is built*. Everything here is verified against the source in this repository.

## 1. Technical purpose

NeuroPortal is a **bilingual (Turkish / English) static-content educational website**. It has no database, no backend services, no authentication, and no user-generated data. All educational content is authored in-repo as typed TypeScript data and JSON dictionaries, then rendered by React Server Components with a few `'use client'` islands for interactivity (tabs, filters, theme toggle, language switch).

- Framework: **Next.js 16.2.6** (App Router), **React 19.2.4**.
- Styling: **Tailwind CSS v3** (class-based dark mode) + CSS variables.
- Runtime deps are intentionally minimal: `next`, `react`, `react-dom`, `@vercel/speed-insights`. There is no i18n library, no CMS, no state manager, no data-fetching library.
- The `package.json` `name` field is `"adhd"` (internal package id); the product name is **NeuroPortal**.

## 2. Directory layout (real)

```
NeuroPortal/
├── app/
│   ├── [locale]/                # dynamic locale segment (tr | en)
│   │   ├── layout.tsx           # per-locale <html>/<body>, Navbar, footer, metadata
│   │   ├── adhd/page.tsx        # renders <AdhdDashboard> (client)
│   │   ├── okb/page.tsx         # OCD module — server-rendered JSX from dictionary
│   │   ├── polimatlik/page.tsx  # Polymathy module — server-rendered JSX from dictionary
│   │   ├── technics/page.tsx    # renders <TechnicsDashboard> (client)
│   │   └── about/page.tsx       # vision/mission + academic references
│   ├── globals.css              # Tailwind directives, CSS variables, light/dark themes
│   ├── sitemap.ts               # static sitemap for tr/en × 5 pages
│   ├── icon.png / favicon
│   └── (no root app/page.tsx — the root "/" is handled by middleware redirect)
├── components/
│   ├── Navbar.tsx               # 'use client' — nav, theme toggle, language switch
│   ├── AdhdDashboard.tsx        # 'use client' — tabs, subtabs, hack filters, onboarding
│   ├── TechnicsDashboard.tsx    # 'use client' — technique accordions, 2-week plan
│   ├── TabGroup.tsx / SubTabGroup.tsx
│   ├── HackCard.tsx / InfoBox.tsx / Badge.tsx
├── lib/
│   ├── dictionary.ts            # async dictionary loader (dynamic import of JSON)
│   ├── adhd-data.ts             # ADHD study cards + 15 brain "hacks" (typed, bilingual)
│   └── technics-data.ts         # study techniques, references, vision/mission (typed, bilingual)
├── dictionaries/
│   ├── tr.json                  # Turkish UI + page strings
│   └── en.json                  # English UI + page strings (same key shape)
├── middleware.ts                # locale detection + redirects
├── next.config.ts               # effectively empty (defaults)
├── tailwind.config.js           # darkMode: 'class', CSS-variable color tokens
├── postcss.config.mjs
├── eslint.config.mjs            # eslint-config-next (flat config)
├── dehb_eksiksiz_rehber.html    # standalone legacy static HTML guide (not routed by Next)
└── public/                      # svg assets, robots.txt, icon
```

Notable: there is **no `src/` directory** and **no `app/page.tsx` root page** — the root path is resolved entirely by `middleware.ts`.

## 3. Routing & i18n

### Locale routing
- All pages live under the dynamic segment `app/[locale]/`. Supported locales: `tr` (default) and `en`.
- `middleware.ts` performs all locale resolution:
  - Skips static files (`pathname.includes('.')`), `/_next`, and `favicon.ico`.
  - `/` → language-negotiated redirect to `/{locale}/adhd` (reads `accept-language`, first tag, falls back to `tr`).
  - `/tr` or `/en` → redirect to `/{locale}/adhd` (the default module).
  - Any unprefixed path (e.g. `/okb`) → redirect to `/{locale}/okb`.
  - The matcher excludes `api`, `_next/static`, `_next/image`, `favicon.ico`, and any `*.html` file (so `dehb_eksiksiz_rehber.html` is served as-is).
- The `[locale]` routes are **not** statically pre-generated — there is no `generateStaticParams`; `locale` is read at request time from `params` (a `Promise` in Next 16, always `await`ed).

### Translation mechanism (no i18n library)
Two parallel translation systems coexist by design:

1. **JSON dictionaries** (`dictionaries/tr.json`, `dictionaries/en.json`) — top-level keys: `navbar`, `common`, `onboarding`, `adhd`, `okb`, `polimatlik`, `footer`. Loaded via `lib/dictionary.ts` `getDictionary(locale)`, which dynamically imports the matching JSON (defaults to `tr` for any unknown locale). Server components pass the resulting `dict` object down as props. Used for UI chrome and for the fully server-rendered OCD/Polymathy pages.

2. **Inline bilingual data objects** in `lib/adhd-data.ts` and `lib/technics-data.ts` — every translatable field is shaped `{ tr: ..., en: ... }` (e.g. `title: { tr, en }`, `points: { tr: string[]; en: string[] }`). Client dashboards pick the branch with `const isTr = locale === 'tr'` and read `field.tr`/`field.en`.

Language switching at runtime (`Navbar.tsx`) swaps segment `[1]` of the current pathname (`/tr/okb` → `/en/okb`) and calls `router.push` — no reload, no cookie.

## 4. Content model (how each module is rendered)

| Module | Route | Rendering | Content source |
|--------|-------|-----------|----------------|
| ADHD (DEHB) | `/[locale]/adhd` | Client dashboard | `lib/adhd-data.ts` (cards + hacks) + `dict.adhd`/`dict.onboarding` |
| OCD (OKB) | `/[locale]/okb` | Server component (static JSX) | `dict.okb` |
| Polymathy (Polimatlık) | `/[locale]/polimatlik` | Server component (static JSX) | `dict.polimatlik` |
| Technics | `/[locale]/technics` | Client dashboard | `lib/technics-data.ts` |
| About | `/[locale]/about` | Server component | `academicVision` + `academicReferences` from `lib/technics-data.ts` |

- Each `page.tsx` exports an async `generateMetadata` producing localized `<title>`/`<description>`, OpenGraph, canonical URL, and `alternates.languages` (hreflang) pointing at `https://mind.bugraakin.com`.
- `app/[locale]/layout.tsx` renders `<html lang={locale}>`, the `Navbar`, a centered `<main>` (max-width 1000px), and a footer with cross-links. It also emits localized site-level metadata.

### Interactivity (verified client components)
- **ADHD dashboard** (`AdhdDashboard.tsx`, `'use client'`): 3 main tabs (differences table / study techniques / brain hacks), nested subtabs, an **onboarding grid** that jumps+highlights a target study card by id, a **"quick glance" grid**, and a **filter panel** for the 15 brain hacks by *evidence level* (`all` | `strong`) and *speed of effect* (`all` | `aninda` | `orta-uzun`), combined with the active category subtab. Highlight state auto-clears after 3s via `useEffect` timeout; scrolling uses `scrollIntoView`.
- **Technics dashboard** (`TechnicsDashboard.tsx`, `'use client'`): 2 tabs (techniques / 2-week action plan) with a single-open accordion (`expandedTechId`) over `academicTechniques`.
- **Navbar** (`'use client'`): theme toggle (persists to `localStorage['theme']`, toggles `.dark` on `documentElement`, falls back to `prefers-color-scheme`) and the TR/EN language switch.

There is **no** interactive anxiety-hierarchy tool or spaced-repetition *planner* app. The OCD page (`okb/page.tsx`) is a plain server component rendering only the title, the ADHD cross-link, the 4-box obsession→relief loop, and a 3-card ERP panel — "building an anxiety hierarchy" appears merely as the static text of ERP card 1 (`dict.okb.erpCard1Title`), not as a distinct section or tool. Likewise the Technics "2-week plan" is static content. (The README advertises a "Kaygı Hiyerarşisi / Anxiety Hierarchy" as if it were its own feature; in code it is only that one ERP card.)

## 5. Styling

- Tailwind CSS v3 with `darkMode: 'class'` (`tailwind.config.js`). Content globs cover `app/**` and `components/**`.
- Color tokens are **CSS variables** defined in `app/globals.css` under `:root` (light) and `.dark` (dark), surfaced to Tailwind as semantic names (`bg-primary`, `text-info`, `border-tertiary`, etc.). Change a color once in `globals.css` and it propagates everywhere.
- Fonts: Inter loaded via a Google Fonts `@import` in `globals.css`. A `fadeIn` keyframe, custom scrollbars, and a 125%-scaling `zoom` media query are defined there too.

## 6. Build, tooling, deployment

- Scripts (`package.json`): `dev` (`next dev`), `build` (`next build`), `start` (`next start`), `lint` (`eslint`), `analyze` (`cross-env ANALYZE=true next build`). No test runner is configured.
- The scripts pass **no bundler flag**, so whatever bundler Next 16 selects by default applies (not overridden in this repo). The README's "Turbopack" claim was not verifiable from the source tree — `node_modules/next/dist/docs/` does not exist in this install — so treat the bundler identity as "Next 16 default" rather than an asserted fact.
- `next.config.ts` is effectively empty (all defaults). Note the `@next/bundle-analyzer` is a dependency but is **not** wired into `next.config.ts`; the `analyze` script sets `ANALYZE=true` but nothing currently reads it.
- Deployment target is Vercel (`@vercel/speed-insights` dependency; canonical/sitemap base `https://mind.bugraakin.com`).

## 7. Consistency invariants

- **TR/EN parity.** `dictionaries/tr.json` and `dictionaries/en.json` must share the exact same key shape. Every `{ tr, en }` object and every `{ tr: [...], en: [...] }` array in `lib/*-data.ts` must have both branches populated.
- **Route ↔ sitemap ↔ nav parity.** The page set `['adhd', 'okb', 'polimatlik', 'technics', 'about']` is hard-coded in `app/sitemap.ts`, in the `Navbar` nav items, and in the footer links. Adding or renaming a module means updating all of them (and the middleware defaults, which point at `adhd`).
- **The Turkish route slugs are canonical** (`okb`, `polimatlik`) even in English — only the segment content is translated, not the URL.
