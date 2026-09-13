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
│   │                        header · footer · blocks · utilities
│   ├── icon.svg             Favicon (SVG)
│   ├── favicon.ico          Favicon (legacy, multi-size)
│   ├── apple-icon.png       180×180
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
- Only three components are client-side: `SiteHeader`, `MobileDrawer` and `EnquiryForm`.
  Everything else is a Server Component and ships no JavaScript.
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
- Structured data: `Organization` + `WebSite` once in the layout, then `WebPage`,
  `BreadcrumbList`, `Service` and `NewsArticle` per page, all in one `@graph` and all
  referencing the organisation by `@id` rather than redeclaring it.
- `sitemap.xml` and `robots.txt` are generated from the content layer, so a new page is in
  the sitemap the moment it exists.
- One `h1` per page, no skipped heading levels — verified across all routes at six
  viewport widths.

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

## 8. Accessibility

Built in, not retrofitted: skip link, visible focus ring on every interactive element,
`aria-expanded` on every disclosure, a real focus trap and Escape handling in the drawer,
`inert` on closed panels, 46px controls, 24px minimum for every other target, semantic
heading order, data tables that reflow into labelled rows instead of scrolling sideways,
and `prefers-reduced-motion` respected throughout.

Verified programmatically across all 22 page templates × 6 widths (1920 / 1440 / 1024 /
768 / 390 / 360): no horizontal scroll, exactly one `h1`, no skipped heading levels, no
image without `alt`, no link or button without an accessible name, no duplicate `id`.

---

## 9. Known gaps

These are deliberate, not oversights:

1. **No photography.** Every image slot renders a labelled placeholder stating the exact
   asset size it expects. Nothing was generated to fill the hole.
2. **Forms have no back end.** `lib/forms.js` reports "not configured" rather than
   pretending a submission succeeded.
3. **Tracking is not implemented.** `/track` says so plainly and routes to the operations
   desk instead of showing a search box that returns nothing.
4. **Content marked `TODO`.** Every unverified figure, name and certification is marked in
   the source and listed in `prototype/CONTENT-TODO.md`.
