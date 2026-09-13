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
│   ├── [locale]/            EVERY page route — en and az (see §5)
│   │   ├── layout.js        Root layout: <html lang>, fonts, header, footer, JSON-LD
│   │   ├── page.js          Home
│   │   └── …                services · network · fleet · about · news · legal · …
│   ├── globals.css          The CSS entry point (import order = cascade contract)
│   ├── fonts.js             next/font/local — Mulish, called exactly once
│   ├── fonts/*.woff2        Self-hosted variable font (latin + latin-ext)
│   ├── styles/*.css         The stylesheet partials, colocated with globals.css:
│   │                        tokens · reset · base · layout · components ·
│   │                        header · footer · blocks · motion · utilities
│   ├── icon.svg             Favicon (SVG)
│   ├── favicon.ico          Favicon (legacy, multi-size)
│   ├── apple-icon.png       180×180
│   ├── sitemap.js           Both languages, with hreflang alternates
│   └── robots.js
│
├── proxy.js                 Serves English without the /en prefix (see §5)
│
├── components/
│   ├── primitives/          Button, LinkArrow, Card, Media, Badge, Stat, SpecList,
│   │                        DataTable, Field, Eyebrow, Icon, IconSprite, Logo
│   ├── layout/              Container, Section, SectionHead, Grid, RuleGrid, Split,
│   │                        Stack, Cluster, Prose
│   ├── navigation/          SiteHeader, MobileDrawer, SiteFooter, Breadcrumb, SkipLink,
│   │                        LanguageSwitcher
│   ├── motion/              RevealController, PageTransition, motionBootScript
│   └── blocks/              Page sections: Hero, QuickBar, Intro, ServicePillars,
│                            NetworkPreview, LaneTable, FleetGrid, Capabilities,
│                            SustainabilityBand, NewsGrid, CtaBand, PageHero, EnquiryForm
│
├── content/                 THE ONLY PLACE COPY LIVES — see §5
│   ├── index.js  lookup.js  site-shared.js  media-sources.js
│   ├── en/                  site · navigation · ui · home · services · network ·
│   └── az/                  fleet · company · sustainability · news · forms · legal · media
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
| Reword any heading or paragraph | the matching file in `src/content/en/` **and** `src/content/az/` |
| Add a service | one entry in each language's `services.js` + one link in each `navigation.js` |
| Add a port | one entry in `network.js` — the page, the sitemap and the nav follow |
| Publish a news article | one entry in `news.js` |
| Change the brand colour, type scale, spacing or radius | `src/app/styles/tokens.css` |
| Make the animations faster, slower, longer or shorter | the `--motion-*` tokens in `src/app/styles/tokens.css` |
| Turn all motion off | delete the three files listed in §8 |
| Make the whole site denser or airier | `--section-y` in `src/app/styles/tokens.css` |
| Add a nav item | `navigation.js` in both languages — header, drawer and footer all update |
| Change the site-wide title pattern | `title.template` in `app/[locale]/layout.js` |
| Add a third language | a `content/<code>/` folder with the same exports + one entry in `content/index.js` |
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

## 5. Two languages

The site ships in **English and Azerbaijani**. English has no URL prefix, Azerbaijani
lives under `/az` — `/services` and `/az/services` are the same page in two languages.
English keeps the URLs it already had, so nothing already indexed or already shared
changed address.

```
src/content/
├── index.js          locales, getContent(locale), localeHref(), the href prefixer
├── lookup.js         bySlug / byCategory / newestFirst / formatDate — data has no functions
├── site-shared.js    phone numbers, mailboxes, the domain — never translated
├── media-sources.js  which file fills which image slot — never translated
├── en/               the English dictionary  (index.js re-exports the modules)
└── az/               the Azerbaijani dictionary, same export names
```

Five rules hold it together:

**1. Both dictionaries export the same names.** A page asks for `home` and gets the
reader's `home`; it never learns that two exist. `src/content/en/index.js` and
`src/content/az/index.js` are the contract — a name in one and not the other fails the
build at the first page that reads it.

**2. Nothing that isn't language lives in a language folder.** The office number, the
domain and the photograph paths are in `site-shared.js` and `media-sources.js`, imported
into both. Two copies of a phone number is one phone number that will eventually be
wrong.

**3. The language files carry unprefixed hrefs.** `content/index.js` walks the
Azerbaijani dictionary once and puts `/az` in front of every internal `href`. Writing the
prefix by hand across a hundred links would mean getting one wrong, and one wrong link
drops the reader back into English mid-journey.

**4. Slugs are identical in both languages.** That is what lets the switcher land the
reader on the *same page* rather than the home page, with no lookup table between
translated URLs and nothing to maintain when a page is added.

**5. Every string a person can perceive is in the content layer.** `content/<locale>/ui.js`
holds the interface strings — table headers, "Read more", every `aria-label`. A
single-language site can leave those in JSX and nobody notices; a second language turns
each one into a visible bug.

| Piece | File |
|---|---|
| The URL scheme | `src/proxy.js` — rewrites `/x` to `/en/x`; `next.config.mjs` redirects `/en/x` back to `/x` |
| The language segment | `src/app/[locale]/` — every route, with `generateStaticParams` for both |
| The switcher | `src/components/navigation/LanguageSwitcher.jsx` |
| Dates | `formatDate(iso, locale)` in `content/lookup.js` — `az-Latn-AZ` / `en-GB` |
| 404 | reads the locale from `next/root-params`, since a not-found page gets no `params` |

The proxy rewrite does **not** make anything dynamic: the build still prerenders every
route in both languages (155 static outputs).

**Adding Russian** is a folder, a barrel with the same export names, and one entry in
`locales`. No component and no page changes.

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
  viewport widths, in both languages.
- `hreflang`: every page declares itself and its translation, plus `x-default` pointing at
  English, in the `<head>` **and** in the sitemap. Without that pair a bilingual site's two
  languages compete with each other and one gets suppressed as a duplicate.
- `<html lang>` is the reader's language; JSON-LD carries `inLanguage`. The organisation
  node deliberately has one `@id` across both languages — it is one company, not two.
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
> symbol. ~190 KB, build-time only, never sent to a browser.
>
> Those TTFs merge Mulish's **latin and latin-ext** subsets. The latin subset alone has no
> `ə`, `ğ` or `ş`, and Satori drops a missing glyph silently — the first Azerbaijani card
> read "Xidm tl r" instead of "Xidmətlər". If a third language is added, check its
> alphabet against these two files before trusting the card.

The English card is served at `/en/…/opengraph-image` and is the one path under `/en`
that `next.config.mjs` does **not** redirect to the unprefixed URL: `og:image` is fetched
by a scraper, not visited by a person, and some scrapers (WhatsApp) will not follow a
redirect for an image. `proxy.js` correspondingly leaves any already-prefixed path alone,
including `/en`, so the card is never prefixed twice.

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
