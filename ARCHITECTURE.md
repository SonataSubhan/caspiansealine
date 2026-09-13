# Caspian Sea Line — architecture

Next.js 16 (App Router) · React 19 · Tailwind v4 · JavaScript/JSX only, no TypeScript.
Fully static: every route is prerendered at build time.

```bash
pnpm install     # adds @fontsource-variable/mulish
pnpm dev
pnpm build       # confirm every route still shows ○ or ●
pnpm start
```

---

## 1. The three rules

**1. Content is data, not JSX.** No page component contains a sentence of copy. Everything
a person would want to reword lives in `src/content/en/`. Changing a headline, adding a
service, or correcting a transit time is a one-line edit in a data file — you never open a
component to change words.

**2. Design decisions live in one place.** Every colour, size, space, radius and duration
is a custom property in `src/app/styles/tokens.css`. Nothing below that file hard-codes a
value. Changing the section rhythm across every page is one token.

**3. Components own no outer spacing.** Gaps between things come from the parent
(`Stack`, `Cluster`, `Grid`, `Section`). This is the single rule that stops layout drift as
a site grows past a dozen pages.

---

## 2. Directory map

```
src/
├── app/                     Routes only — thin files that compose blocks
│   ├── layout.js            Root metadata, fonts, sprite, header, footer, Organization JSON-LD
│   ├── page.js              Home
│   ├── globals.css          The CSS entry point (import order = cascade contract)
│   ├── fonts.js             next/font/local — Mulish, called exactly once
│   ├── fonts/*.woff2        Self-hosted variable font (latin + latin-ext)
│   ├── styles/*.css         The stylesheet partials, colocated with globals.css:
│   │                        tokens · reset · base · layout · components ·
│   │                        header · footer · blocks · motion · utilities
│   ├── icon.svg             Favicon (SVG)
│   ├── favicon.ico          Favicon (legacy, multi-size)
│   ├── apple-icon.png       180×180
│   ├── opengraph-image.js   The default share card (one per segment below, too)
│   ├── sitemap.js           Generated from the content layer
│   ├── robots.js
│   ├── not-found.js
│   ├── services/            + [slug]  → 16 pages from one template
│   ├── network/             + /schedule, /agents, /ports/[slug]
│   ├── fleet/  about/  about/leadership/  sustainability/  hsseq/
│   ├── certifications/  careers/  news/ + [slug]
│   ├── quote/  contact/  track/
│   └── legal/[slug]         → 5 documents from one template
│
├── components/
│   ├── primitives/          Button, LinkArrow, Card, Media, Badge, Stat, SpecList,
│   │                        DataTable, Field, Eyebrow, Icon, IconSprite, Logo
│   ├── layout/              Container, Section, SectionHead, Grid, RuleGrid, Split,
│   │                        Stack, Cluster, Prose
│   ├── navigation/          SiteHeader, MobileDrawer, SiteFooter, Breadcrumb, SkipLink
│   ├── motion/              RevealController, PageTransition, motionBootScript
│   └── blocks/              Page sections: Hero, QuickBar, Intro, ServicePillars,
│                            NetworkPreview, LaneTable, FleetGrid, Capabilities,
│                            SustainabilityBand, NewsGrid, CtaBand, PageHero, EnquiryForm
│
├── content/en/              THE ONLY PLACE COPY LIVES
│   ├── site.js              Company facts, contact details, socials
│   ├── navigation.js        The site structure — header, drawer, footer and sitemap
│   ├── home.js  services.js  network.js  fleet.js  company.js
│   ├── sustainability.js  news.js  forms.js  legal.js
│
└── lib/
    ├── seo.js               buildMetadata() — one metadata builder for every page
    ├── schema.js            JSON-LD generators + the <JsonLd> component
    ├── og.jsx               ogCard() — the 1200×630 share card, one renderer
    ├── og-assets/           Logo + symbol PNGs and two static Mulish TTFs
    └── forms.js             The single form submission integration point
```

> The stylesheet partials sit inside `src/app/` rather than `src/styles/` for a
> concrete reason: Tailwind's CSS resolver cannot follow a `..` traversal in an
> `@import` on Windows, so every import in `globals.css` stays inside its own
> directory. Do not move them back.

---

## 3. How to make common changes

| You want to… | Edit |
|---|---|
| Reword any heading or paragraph | the matching file in `src/content/en/` |
| Add a service | one entry in `services.js` + one link in `navigation.js` — no new page file |
| Add a port | one entry in `network.js` — the page, the sitemap and the nav follow |
| Publish a news article | one entry in `news.js` |
| Change the brand colour, type scale, spacing or radius | `src/app/styles/tokens.css` |
| Make the animations faster, slower, longer or shorter | the `--motion-*` tokens in `src/app/styles/tokens.css` |
| Turn all motion off | delete the three files listed in §8 |
| Make the whole site denser or airier | `--section-y` in `src/app/styles/tokens.css` |
| Add a nav item | `content/en/navigation.js` — header, drawer and footer all update |
| Change the site-wide title pattern | `title.template` in `app/layout.js` |
| Wire the forms up | `NEXT_PUBLIC_FORM_ENDPOINT` — `lib/forms.js` needs no change |
| Drop in real photography | replace `<Media slot=… />` with `<Media src=… alt=… />` |

---

## 4. Rendering strategy

Every route is static (`○`) or statically generated from params (`●`). The build output is
the contract — if a route ever appears as `ƒ (Dynamic)`, something introduced a
request-time dependency and it must be fixed rather than accepted.

- `cacheComponents` is deliberately **off**. For a marketing site it buys nothing and costs
  the `dynamic` / `revalidate` segment configs.
- `dynamicParams = false` on every `[slug]` route: an unknown slug 404s instead of being
  rendered on demand.
- Only five components are client-side: `SiteHeader`, `MobileDrawer`, `EnquiryForm`,
  `RevealController` and `PageTransition`. The last two render nothing of their own —
  pages arrive as `children`, already rendered on the server — so no page is converted
  to client rendering by them.
- The CSP is header-based, not nonce-based, precisely because a nonce would force every
  page into dynamic rendering.

---

## 5. Internationalisation

The site ships English only, but nothing has to be refactored to add Azerbaijani or
Russian:

- All copy already sits in `content/en/`, keyed by page. Adding a locale means adding
  `content/az/` and moving the routes under `app/[locale]/`.
- The layout uses CSS logical properties throughout (`inline-size`, `padding-block`,
  `inset-inline`), so a different text direction needs no layout changes.
- The font already loads latin-ext, which carries the Azerbaijani diacritics.
- `site.plannedLocales` and the `hreflang` slot in `lib/seo.js` are in place.

---

## 6. SEO

- `buildMetadata()` gives every page a title, description, canonical, Open Graph block,
  Twitter card and robots directives from three inputs. A page cannot ship without a
  canonical because the builder always sets one.
- `metadataBase` is declared once in the root layout; every other URL is relative.
- **The origin comes from the environment**, resolved once in `content/en/site.js`:
  `NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` → the current production
  domain. It must match the domain the site is actually served from, because `og:image`
  is absolute: a card hosted on a domain that does not resolve is silently dropped by
  WhatsApp and every other scraper, leaving a link with a title and no picture. That is
  the failure that shipped when the origin was hard-coded to a domain not yet live.
  When the real domain goes live, set `NEXT_PUBLIC_SITE_URL` in Vercel — nothing else
  changes.
- Structured data: `Organization` + `WebSite` once in the layout, then `WebPage`,
  `BreadcrumbList`, `Service` and `NewsArticle` per page, all in one `@graph` and all
  referencing the organisation by `@id` rather than redeclaring it.
- `sitemap.xml` and `robots.txt` are generated from the content layer, so a new page is in
  the sitemap the moment it exists.
- One `h1` per page, no skipped heading levels — verified across all routes at six
  viewport widths.
- Descriptions are trimmed by `trimDescription()`, which cuts at the last full sentence
  that fits and otherwise at a word boundary, dropping a dangling conjunction. A hard
  `.slice(155)` stops mid-word, in the one piece of copy a searcher reads before clicking.

### Share cards (`og:image`)

Pasting a link into WhatsApp, Telegram, LinkedIn, Slack, X or iMessage shows whatever
`og:image` points at. **Every route generates its own 1200×630 card at build time** — the
logo on brand navy, the page's own title, the symbol used as a watermark, and the
cyan/red/green rule from the guidelines:

- `src/lib/og.jsx` holds the single `ogCard()` renderer. Nothing else draws a card.
- A route opts in with a six-line `opengraph-image.js` beside its `page.js`, reading the
  title from the same content file the page reads — the card cannot drift from the page.
  Dynamic segments (`services/[slug]`, `news/[slug]`, `network/ports/[slug]`,
  `legal/[slug]`) export their own `generateStaticParams`, so every service, article, port
  and document gets its own card.
- The root `app/opengraph-image.js` is the fallback for anything without one.
- `buildMetadata()` deliberately does **not** set `openGraph.images`. An explicit value
  overrides the file convention, which is exactly the bug that shipped before: it pointed
  at `/og/default.jpg`, a file that never existed, so every shared link showed a grey box.
  Pass `image` only to override one route with a real photograph.
- Next derives `og:image:width/height/type/alt` and the whole `twitter:image` set from the
  same file, so there is no second copy to keep in sync.

No photography is invented for these cards. They are built from approved brand artwork
only, which is why they are already correct and stay correct when real photography lands.

> Satori (the renderer behind `ImageResponse`) cannot read woff2 and cannot load `<Image>`,
> so `src/lib/og-assets/` holds two static Mulish TTF instances (400 and 800) generated
> from the same variable font the site ships, plus PNG renders of the white logo and
> symbol. ~130 KB, build-time only, never sent to a browser.

---

## 7. Performance

- Fully static HTML; no server work per request.
- Fonts self-hosted from npm, one variable file per subset, preloaded, `display: swap`,
  with a metric-adjusted fallback so there is no layout shift.
- No third-party scripts, no analytics, no external stylesheets, no icon library — the
  icon set is one inline SVG sprite.
- Client JavaScript is limited to the header, the drawer and the enquiry form.
- The brand's background texture is a CSS gradient, not an image: zero bytes.
- `next/image` with AVIF and WebP is wired up for the photography that has not arrived yet.

---

## 8. Motion

Three files, and nothing else on the site knows they exist:

| File | Job |
|---|---|
| `src/app/styles/motion.css` | every duration, distance and curve — *how* things move |
| `src/components/motion/RevealController.jsx` | two IntersectionObservers — *when* a reveal fires |
| `src/components/motion/PageTransition.jsx` | `<ViewTransition>` around `<main>` — the route cross-fade |

Delete all three and the site is identical, just static.

**Timed, not scrubbed.** The first version used CSS scroll-driven animations
(`animation-timeline: view()`). They are elegant and need no JavaScript, but
they *scrub*: progress is bound to scroll position rather than to time, so
`animation-duration` is ignored, the reveal is finished before the reader's eye
arrives, and it un-plays on the way back up. Firefox skipped them entirely. The
observers are about a kilobyte together, play each reveal at a controllable
speed, and behave the same in every engine.

**A reveal replays.** One observer adds `data-revealed` when an element reaches
the viewport, 10% short of the bottom edge so it animates where the eye is; a
second removes it again, but only once the element is *completely* off screen.
The 10% gap between the two margins is a dead zone, which is what stops an
element parked at the boundary from flickering. Re-hiding is instantaneous —
the CSS transition is declared on the revealed state, not on both, so it is
read only when entering that state — and it happens out of sight, so scrolling
back up never shows anything fading out. A container that holds reveal targets
is revealed once and then left alone entirely.

**The fallback is the finished state.** Nothing is hidden unless
`html[data-motion="on"]` is present, and only the inline boot script
(`motionBootScript.js`, run before first paint) sets it — and only when
`IntersectionObserver` exists and the reader has not asked for reduced motion.
No JavaScript, a blocked bundle, an old engine, a crawler: the attribute is
absent and the page renders finished. A 2.5s failsafe in that script removes it
again if React never mounts. Content cannot get stuck invisible, and
`opacity: 0` keeps an element in the DOM and the accessibility tree, so there is
no SEO or screen-reader cost either way.

What moves, and by how much:

| Where | What | Duration | Distance |
|---|---|---|---|
| Hero / page header | 4-step staggered fade-up on load | 860ms, 110ms apart | 16–26px |
| Hero photograph | opacity + 4.5% scale settle | 1200ms | — |
| Section children, split columns, cards | fade-up every time they arrive on screen | 720ms | 16–26px |
| Siblings in a row | the same, 90ms apart, capped at 6 | — | — |
| Route change | old page out, new page in with a lift | 180ms + 520ms | 14px |
| Card photograph on hover | 2.5% scale | 400ms | — |

The lift is `clamp(16px, 0.75rem + 1.2vw, 26px)` — one token, no media query, so
travel scales with the viewport like the type and space scales do. Easing for
reveals is expo-out (`--ease-reveal`): nearly all the distance is covered in the
first third and it glides to a stop, which is what lets a 720ms move read as
calm rather than slow. UI transitions keep the shorter quart curve and stay
under 320ms; reveals are content, not UI, and are deliberately exempt.

Two rules keep it from turning into noise. **`opacity` and `translate` only** —
the two properties the compositor animates without touching layout; and a
revealed element carries no `translate` at all rather than `translate: 0`, which
would leave a transform behind and quietly break `position: sticky` on the
sidebars. **Nothing animates twice**: the controller marks any container that
holds reveal targets as already revealed, so a grid stays put while its cards
cascade. Hairline grids (`.rule-grid`, the quick bar) arrive as one piece,
because they draw their rules with a background the cells cover — hiding the
cells individually leaves a grey plate that reads as a skeleton loader.

**Page transitions.** `<ViewTransition key={pathname} name="page">` wraps
`<main>` in the root layout. The key is what makes it a transition: a layout
persists across navigations, so without a changing key neither enter nor exit
would ever fire. Header, footer and page background sit outside it and swap
instantly — identical on both pages, so the swap is invisible and gives the
reader a fixed frame. `::view-transition { pointer-events: none }` keeps clicks
alive mid-transition, and the group animation is pinned off so the old page's
height is never animated into the new one's. React ships this in the App
Router's own React build; no config, no dependency. A browser without the View
Transitions API navigates normally with no animation and no error.

Reduced motion is respected twice over: the boot script never turns reveals on,
the hero entrance falls back to a cross-fade rather than a frozen page, and
every `::view-transition-*` duration collapses to zero. There is deliberately no
blanket `animation-duration: 1ms !important` in the reset — that sledgehammer
would also kill the considered reduced-motion path.

Deliberately absent: parallax, scroll hijacking, pinned sections, counting
number tickers, letter-by-letter text splitting, animated blur. Each is a
recognisable sign that motion was added for its own sake.

> `<html>` carries `suppressHydrationWarning`, and it is the only element on the
> site that does. The boot script writes `data-motion` onto it before React
> hydrates, so the server HTML and the client DOM legitimately differ by that
> one attribute. The flag is shallow — it covers `<html>`'s own attributes and
> nothing inside it — so it hides no other mismatch.

> The reveal target list appears in both `motion.css` and `RevealController.jsx`
> — the stylesheet hides them, the controller un-hides them. It is the one piece
> of duplication in the motion system; change one, change the other. It is
> written at the level of a section's top-level children rather than per block,
> so a new block on a new page animates without either file being touched.

---

## 9. Accessibility

Built in, not retrofitted: skip link, visible focus ring on every interactive element,
`aria-expanded` on every disclosure, a real focus trap and Escape handling in the drawer,
`inert` on closed panels, 46px controls, 24px minimum for every other target, semantic
heading order, data tables that reflow into labelled rows instead of scrolling sideways,
and `prefers-reduced-motion` respected throughout.

Verified programmatically across all 22 page templates × 6 widths (1920 / 1440 / 1024 /
768 / 390 / 360): no horizontal scroll, exactly one `h1`, no skipped heading levels, no
image without `alt`, no link or button without an accessible name, no duplicate `id`.

---

## 10. Known gaps

These are deliberate, not oversights:

1. **No photography.** Every image slot renders a labelled placeholder stating the exact
   asset size it expects. Nothing was generated to fill the hole.
2. **Forms have no back end.** `lib/forms.js` reports "not configured" rather than
   pretending a submission succeeded.
3. **Tracking is not implemented.** `/track` says so plainly and routes to the operations
   desk instead of showing a search box that returns nothing.
4. **Content marked `TODO`.** Every unverified figure, name and certification is marked in
   the source and listed in `prototype/CONTENT-TODO.md`.
