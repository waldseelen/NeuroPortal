# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project identity

NeuroPortal is a bilingual (Turkish / English) static educational website about ADHD (DEHB), OCD (OKB), Polymathy (Polimatlık), and evidence-based study techniques (Technics). It is a Next.js 16 App Router site with no backend, no database, and no auth — all content is authored in-repo as typed TypeScript data and JSON dictionaries and rendered by React Server Components with a few client islands for interactivity.

## Commands

```bash
npm install          # install dependencies
npm run dev          # start dev server at http://localhost:3000 (no bundler flag set; Next 16 default)
npm run build        # production build
npm start            # serve the production build
npm run lint         # eslint (eslint-config-next, flat config)
npm run analyze      # ANALYZE=true next build (env is set but not yet wired into next.config.ts)
```

Correctness gates before considering a change done: `npm run lint` and `npm run build` must both pass. There is no test suite.

## Architecture

### Content model
There is no CMS or database. Content lives in two places, both authored by hand:
- **JSON dictionaries** — `dictionaries/tr.json` and `dictionaries/en.json` (identical key shape; top-level keys: `navbar`, `common`, `onboarding`, `adhd`, `okb`, `polimatlik`, `footer`). Loaded by `lib/dictionary.ts` `getDictionary(locale)` via dynamic import; passed down as a `dict` prop. Used for UI chrome and for the fully server-rendered OCD and Polymathy pages.
- **Typed bilingual data** — `lib/adhd-data.ts` (study cards + 15 brain "hacks") and `lib/technics-data.ts` (study techniques, academic references, vision/mission). Every translatable field is shaped `{ tr, en }` (or `{ tr: string[]; en: string[] }`). Client dashboards select with `const isTr = locale === 'tr'`.

### Directory layout
```
app/[locale]/{adhd,okb,polimatlik,technics,about}/page.tsx   # 5 module pages
app/[locale]/layout.tsx        # <html>/<body>, Navbar, footer, per-locale metadata
app/globals.css                # Tailwind + CSS-variable light/dark themes
app/sitemap.ts                 # tr/en × 5 pages
middleware.ts                  # locale detection + redirects (no root app/page.tsx)
components/                     # Navbar, AdhdDashboard, TechnicsDashboard, TabGroup, HackCard, InfoBox, Badge, ...
lib/                           # dictionary.ts, adhd-data.ts, technics-data.ts
dictionaries/                  # tr.json, en.json
```
(No `src/` directory. No root `/` page — `middleware.ts` redirects `/` to `/{locale}/adhd`.)

### Key subsystems
- **i18n (no library).** Locales `tr` (default) and `en`. `middleware.ts` negotiates from `accept-language`, redirects `/` and bare `/tr`|`/en` to `/{locale}/adhd`, and prefixes unlocalized paths. `params` is a `Promise` in Next 16 — always `await` it. Route slugs stay Turkish (`okb`, `polimatlik`) in both languages; only content is translated. The `Navbar` language switch swaps segment `[1]` of the pathname and `router.push`es.
- **Module rendering.** ADHD (`AdhdDashboard`) and Technics (`TechnicsDashboard`) are `'use client'` dashboards; OCD, Polymathy, and About are server components rendering JSX from the dictionary / data files.
- **Interactive filters/tools.** `AdhdDashboard` has tabs + nested subtabs, an onboarding jump-to-card flow, and a brain-hacks filter panel (evidence `all|strong`, speed `all|aninda|orta-uzun`, plus active category). `TechnicsDashboard` has a single-open accordion + a static 2-week plan. `Navbar` handles the theme toggle (`localStorage['theme']` + `.dark` class). The OCD page and the 2-week plan are static content, not interactive tools — an "anxiety hierarchy" exists only as the text of one ERP card, not a separate feature despite the README billing it as one.
- **Styling.** Tailwind v3, `darkMode: 'class'`. Semantic colors are CSS variables defined in `app/globals.css` (`:root` light, `.dark` dark) and mapped in `tailwind.config.js`.

## Absolute rules — do not break these

1. **This is Next.js 16 — not the Next.js in your training data.** APIs, conventions, and file structure may differ; do not assume version-specific defaults from memory. Before writing framework code, consult the official Next 16 docs (and `node_modules/next/dist/docs/` if that directory is present in the install — it may not be) and heed deprecation notices. In particular, dynamic route `params` is a `Promise` and must be `await`ed (verified across every `page.tsx` and `layout.tsx`).
2. **Keep TR/EN in parity.** `dictionaries/tr.json` and `dictionaries/en.json` must have the exact same key shape. Every `{ tr, en }` object and `{ tr: [...], en: [...] }` array in `lib/*-data.ts` must have both branches filled. Never add a string to one language only.
3. **Content lives in `dictionaries/*.json` and `lib/*-data.ts` — not hard-coded in components.** Add or edit educational content there, not inline in JSX (aside from the existing server-rendered OCD/Polymathy pages that already read from `dict`).
4. **Keep the module set in sync across all four places:** `app/[locale]/<module>/`, `app/sitemap.ts` (`pages` array), the `Navbar` nav items, and the footer links. The middleware defaults point at `adhd`.
5. **Do not fabricate scientific claims, effect sizes, or citations.** Statistics (e.g. Cohen's `d`, OR, SMD) and the references in `lib/technics-data.ts` / the About page are load-bearing educational content. Do not invent, alter, or "round" numbers or add citations that don't exist.
6. **Preserve the CSS-variable theming.** Use the semantic Tailwind tokens (`bg-primary`, `text-info`, `border-tertiary`, ...) and edit colors in `app/globals.css`; do not hard-code hex values in components.

## Doc trust note

Verified against the code on 2026-07-24. `README.md` is user-facing content/setup (accurate); `ARCHITECTURE.md` is the technical companion. If code and docs disagree, trust the code and update these files.
