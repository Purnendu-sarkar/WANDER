# WANDER — Go Beyond Places

> A single-page, cinematic marketing site for a fictional boutique travel
> brand. Slow travel, rare access, and places that change you — told through
> scroll-driven storytelling, editorial typography, and layered animation.

![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?logo=framer&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)

---

## Overview

WANDER is a fictional travel brand that sells experiences rather than
tickets. This repository is its marketing site: a **single, long-scrolling
page** built with Next.js 13 (App Router) that walks a visitor from an
immersive hero, through destinations and expeditions, and down into stories,
seasonal guidance, field manuals, and — finally — a call to action.

The project is **100% frontend**. There is no backend, no database, no
authentication, and no environment variables. Every interaction (newsletter
"subscription", soundscape toggle, booking "request") is a client-side
simulation that demonstrates the UI.

## Key Features

| Area | What it does |
| --- | --- |
| Cinematic hero | Staggered entrance after the brand loader; giant outline "WANDER" wordmark, drifting coordinates, SCROLL indicator |
| Sticky-scroll destination journey | Scrolling drives an in-place crossfade between 4 destinations with a progress rail (`DestinationJourney`) |
| Editorial destination index | Hover a destination name and its photo follows the cursor (`DestinationList`) |
| Interactive experiences | Active-card accordion + full expedition guide modal, soundscape UI simulation |
| Story journal | Category filters, featured story, bookmarking + share simulation, reader modal with gallery & pull quotes |
| Traveler voices | Auto-rotating (7s) testimonial spotlight with pause-on-hover and clickable progress rails |
| Field manual | Interactive 16-item packing checklist with a live "preparedness" progress panel |
| FAQ & concierge | Accessible Radix accordion + sticky lime CTA card |
| Global atmosphere | Lenis smooth scroll, custom cursor, grain overlay, scroll-reveal/parallax wrappers |

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js **13.5.1** (App Router), React 18.2 |
| Language | TypeScript **5.2** (`strict` mode) |
| Styling | Tailwind CSS **3.3** + `tailwindcss-animate` |
| Animation | framer-motion **13**, Lenis (smooth scroll) |
| UI kit | shadcn/ui over Radix UI primitives |
| Icons | lucide-react |
| Build / deploy | `@netlify/plugin-nextjs`, `next build` |

Other installed-but-unused dependencies (`@supabase/supabase-js`,
`recharts`, `next-themes`, `react-hook-form`, `zod`, `vaul`, …) are part of
the standard shadcn/boilerplate install and are **not wired up**. Do not
assume they are in use.

## Page Flow & Architecture

`app/page.tsx` composes every section inside a `SmoothScroll` (Lenis)
wrapper. Each section is a dedicated `<section id>` component:

| Order | Section | Component |
| --- | --- | --- |
| 1 | Hero | `components/hero/Hero.tsx` |
| 2 | The Wander Way (manifesto) | `components/sections/Philosophy.tsx` |
| 3 | Destination Journey (sticky) | `components/destinations/DestinationJourney.tsx` |
| 4 | Destination List (hover preview) | `components/destinations/DestinationList.tsx` |
| 5 | When To Wander (seasons) | `components/sections/WhenToWander.tsx` |
| 6 | Experiences (accordion + modal) | `components/sections/Experiences.tsx` |
| 7 | Expedition Leaders | `components/sections/ExpeditionLeaders.tsx` |
| 8 | Travel Journal (stories) | `components/sections/TravelJournal.tsx` |
| 9 | Traveler Voices (testimonials) | `components/sections/TravelerVoices.tsx` |
| 10 | The Wanderer's Kit (checklist) | `components/sections/TheWanderersKit.tsx` |
| 11 | Before You Wander (FAQ) | `components/sections/BeforeYouWander.tsx` |
| 12 | Statistics (count-up) | `components/sections/Statistics.tsx` |
| 13 | Final CTA | `components/sections/FinalCTA.tsx` |
| 14 | Footer | `components/sections/Footer.tsx` |

### Content is data-driven

All copy, numbers, and image URLs live in **`data/destinations.ts`** —
`destinations[]`, `experiences[]`, `journalStories[]`, `stats`, plus the
newer `principles[]`, `seasons[]`, `leaders[]`, `testimonials[]`,
`packingKit[]`, and `faqs[]`. **Edit content there, never inside components.**

## Project Structure

```
.
├── app/                      # App Router root
│   ├── globals.css           # Tailwind + global effects (grain, outline, cursor)
│   ├── layout.tsx            # Root layout, Inter font, <html>/<body>
│   └── page.tsx              # Composes all 14 sections in order
├── components/
│   ├── animations/           # Reusable FadeIn, TextReveal, ImageReveal, Parallax
│   ├── destinations/         # DestinationJourney, DestinationList
│   ├── hero/                 # Hero.tsx
│   ├── navbar/               # Navbar.tsx (desktop + mobile menu)
│   ├── sections/             # Experiences, TravelJournal, Statistics, FinalCTA,
│   │                         # Footer + the 6 newer sections
│   ├── ui/                   # shadcn/ui kit + hand-written CustomCursor, MagneticButton
│   ├── PageLoader.tsx        # Brand loading screen
│   └── SmoothScroll.tsx      # Lenis smooth-scroll provider
├── data/
│   └── destinations.ts       # Single source of truth for all content
├── hooks/                    # use-toast (shadcn boilerplate)
├── lib/
│   └── utils.ts              # cn() helper (clsx + tailwind-merge)
├── public/                   # Local destination photos (<uuid>.jpg)
├── components.json           # shadcn/ui config
├── next.config.js            # eslint.ignoreDuringBuilds + images.unoptimized
├── netlify.toml              # Netlify build/deploy config
├── tailwind.config.ts        # Brand palette + fonts + keyframes
└── package.json
```

## Interactive Animations & Hero Experience

The page opens with a **brand loader** (`PageLoader`), then the hero reveals
in a choreographed sequence: the background image slowly settles, the giant
outline `WANDER` wordmark fades in, the headline and metadata slide up, and
the navbar drops in from the top — all with custom easing
`[0.22, 1, 0.36, 1]`.

- **Lenis smooth scroll** wraps the whole page (`SmoothScroll.tsx`). Scrollable
  modals opt out with `data-lenis-prevent`.
- **Custom cursor** replaces the native cursor on desktop
  (`.cursor-none`), enlarging over interactive elements (`CustomCursor`).
- **Grain overlay** — a fixed SVG-noise film across the entire viewport
  (`.grain-overlay`).
- **Reusable animation wrappers** in `components/animations/`: `FadeIn`,
  `TextReveal` (masked line reveal), `ImageReveal` (wipe + scale), and
  `Parallax`. **Reuse these instead of writing new `whileInView` code.**
- **MagneticButton** gives CTAs a subtle cursor-following pull.

## Installation & Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> No environment variables are required. No backend, no API keys.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server (hot reload) |
| `npm run build` | Production build. ⚠️ **Skips ESLint** (see note) |
| `npm run start` | Serve the production build |
| `npm run lint` | `next lint` — ESLint (extends `next/core-web-vitals`) |
| `npm run typecheck` | `tsc --noEmit` — TypeScript type check |

There is **no test suite**.

### Verification order (important)

Because `next.config.js` sets `eslint.ignoreDuringBuilds: true`, a passing
`npm run build` says nothing about lint. **Always run:**

```bash
npm run lint
npm run typecheck
```

…then `npm run build` to confirm the production bundle.

## Image & Data Management

- `next.config.js` sets **`images.unoptimized: true`**, so remote images
  (Pexels / Stockcake URLs) load without any `remotePatterns` config, and
  local photos in `public/` are referenced as `/filename.jpg`.
- **Local** destination photos are UUID-named files in `public/`
  (e.g. `6d133e20-a92c-4446-9e08-d84367a3db4c.jpg`) referenced from
  `data/destinations.ts`.
- **Remote** images power the hero, experiences, journal, leaders, and
  testimonials via `images.pexels.com` / `images.stockcake.com` URLs.
- Recent commits migrated `<img>` tags to `next/image`; **follow that
  convention for new work** (a couple of `components/destinations/` spots
  still use raw `<img>`).
- To change any copy, image, or statistic, edit `data/destinations.ts` only.

## Design System & Styling

Brand palette (`tailwind.config.ts`):

| Token | Hex | Usage |
| --- | --- | --- |
| `ink` | `#0B0B0B` | Page background |
| `cream` | `#F4F1EA` | Primary text |
| `lime` / `acid` | `#D9FF5A` | Accent (CTAs, highlights, progress) |
| `ember` | `#FF7A45` | Secondary accent |

**Typography.** Inter is loaded via `next/font/google`; Manrope via a Google
CSS import in `globals.css` (`font-display`). ⚠️ `font-syne` and
`font-serif-editorial` classes are widely used in the UI but the Syne /
Cormorant fonts are **not actually loaded** — they silently fall back to the
system font. Don't assume they render.

**Global effects** (`app/globals.css`): `.grain-overlay` (SVG noise film),
`.wander-outline` / `.outline-type` (stroke-only text), reduced-motion
overrides, custom scrollbar, and lime selection color.

**Accessibility & motion:** `prefers-reduced-motion` is respected globally,
and the custom cursor disables itself on touch devices.

## Development & Production Build

```bash
# Development
npm run dev

# Lint + types before trusting a build
npm run lint && npm run typecheck

# Production build
npm run build
npm run start   # serve locally at http://localhost:3000
```

Notes:

- `@next/swc-wasm-nodejs` is pinned in `package.json` so `next build` works
  on non-native hosts (e.g. Windows).
- The output is a static single page generated at build time (all content is
  client-rendered from the data file).

## Deployment

The repo is configured for **Netlify** (`netlify.toml`):

```toml
[build]
command = "npx next build"
publish = ".next"

[[plugins]]
package = "@netlify/plugin-nextjs"
```

The `@netlify/plugin-nextjs` plugin handles the Next.js build, route
pre-rendering, and serving of `.next`. Push to `main` and link the repo in
the Netlify dashboard (or connect via the Netlify CLI) to deploy.

> ⚠️ **Note on Vercel:** `app/layout.tsx` still contains stale
> `wander-umber.vercel.app` URLs in its Open Graph / Twitter metadata. These
> are leftover placeholders from an earlier setup — **Vercel is not the
> deploy target** for this project. Don't treat Vercel as canonical, and
> consider updating or removing those URLs.

## Important Implementation Notes

- Almost every component is `'use client'` — the page is essentially
  client-rendered. Server components are only `app/layout.tsx` (and the
  not-found route).
- **Build skips ESLint** (`eslint.ignoreDuringBuilds`), so verify with
  `npm run lint` + `npm run typecheck`.
- Imports: the `@/*` alias maps to the repo root, but most components use
  relative imports (`../../data/destinations`). Match whatever the file uses.
- Scrollable modals add `data-lenis-prevent` so they can scroll under Lenis
  (see `Experiences.tsx`, `TravelJournal.tsx`), and typically set
  `document.body.style.overflow = 'hidden'` while open.
- Don't remove the `.cursor-none` rule or `CustomCursor` — the site's cursor
  experience depends on them.
- Keep content edits in `data/destinations.ts`; keep new animation logic in
  `components/animations/`.

## Credits & Acknowledgements

- Built with **[Next.js](https://nextjs.org)** by Vercel, React, and
  TypeScript.
- UI primitives: **[shadcn/ui](https://ui.shadcn.com)** + **[Radix UI](https://www.radix-ui.com)** (MIT).
- Animations: **[framer-motion](https://www.framer.com/motion/)** and **[Lenis](https://lenis.darkroom.engineering/)**.
- Icons: **[lucide-react](https://lucide.dev/)**.
- Photography: remote imagery via **[Pexels](https://www.pexels.com)** and
  **[Stockcake](https://stockcake.com)**; local destination photos are stored
  in `public/`.
- Fonts: Inter and Manrope (Google Fonts).
- Deployed with **[Netlify](https://www.netlify.com)** and the Netlify Next.js
  plugin.

---

*WANDER is a fictional travel brand created for design/demonstration
purposes. All place names, people, quotes, and statistics are invented.*
