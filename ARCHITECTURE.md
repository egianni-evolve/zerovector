# Architecture

**Last Updated:** 2026-03-11

This file is the technical specification. Layers, stack, conventions, structure, and import rules are defined here.

For the philosophy behind these decisions — the Core Relationship, the Seven Principles, and design constraints — see VECTOR.md.

---

## Six Layers

| Layer | Location | Rule |
|-------|----------|------|
| **UI** | `src/pages/`, `src/components/`, `src/layouts/` | Renders content. Imports from Content, State, and Services layers. Does not own text, business logic, or external communication. |
| **Content** | `src/content/` | All site text as exported JS objects. Pure data — no React, no side effects, no imports from other layers. |
| **State** | `src/contexts/`, `src/hooks/` | React Context providers (User, Progress, Theme) and custom hooks (useSEO, useInView, useMousePosition). Manages application state and reusable behavior. |
| **Services** | `src/lib/`, `netlify/functions/` | External communication. Supabase client, AI chat, quiz, email signup, rate limiting. All secrets stay here. |
| **Styles** | `src/styles/site.css` | Single CSS file with design tokens in `:root` and domain-scoped prefixes. The visual foundation for the entire site. |
| **Static** | `public/` | Images, OG cards, fonts, favicon. No processing — served as-is by Netlify. |

Every file belongs to exactly one layer. If you are unsure, check the layer table above.

### How to Add a Feature

Follow this order every time:

1. **Content** — Add text/copy to `src/content/` as a JS export. If it's a new page, create a new content file.
2. **Component** — If needed, build the UI component in `src/components/`. One component per file.
3. **Page** — Create the page component in `src/pages/`, importing content and components.
4. **Route** — Add the route in `App.jsx`. Decide: inside `SiteLayout` (manifesto), inside `LearnLayout` (learn), or standalone (sub-brands).
5. **Styles** — Add scoped CSS to `src/styles/site.css` with the appropriate domain prefix (`zv-`, `ovl-`, `inv-`, `arr-`).
6. **SEO** — Add `useSEO()` call with title, description, path, and OG image.

### What Not to Do

- **Text in JSX** — Use `src/content/`. Components render, they do not contain copy.
- **Hardcoded colors or spacing** — Use `var(--token-name)` from `:root` in `site.css`.
- **API keys in client-side code** — Secrets live in Netlify environment variables, accessed only by `netlify/functions/`.
- **New CSS files** — Add styles to `src/styles/site.css` in the appropriate domain-prefix section.
- **Data fetching in components** — Use `netlify/functions/` for AI calls, `src/lib/` for Supabase.
- **CSS frameworks** — No Tailwind, no CSS-in-JS. Plain CSS with variables.
- **Files over 200 lines** — Split them. (Exception: `site.css` is intentionally monolithic and scoped by prefix.)

### Import Direction

Layers import in one direction only:

```
UI (pages/components/layouts)  → imports from → Content, State, Services, Styles
State (contexts/hooks)         → imports from → Services (lib/)
Services (lib/)                → imports from → external packages only
Content (content/)             → imports from → nothing (pure data)
Styles (site.css)              → imported by all via CSS classes (no JS imports except site.css in main.jsx)
Serverless (netlify/functions/) → imports from → own lib/, external packages
```

Violations: Content importing from UI or State. Components importing directly from `netlify/functions/`. State importing from UI. Serverless functions importing from `src/`.

---

## Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | React 19.2 + Vite 7.3 | Fast builds, hot reload, ES modules native |
| **Routing** | React Router DOM 7 | SPA routing with layout nesting and redirects |
| **State** | React Context (3 providers) | No dependency. UserContext (auth), ProgressContext (lesson tracking), ThemeContext (learn themes) |
| **Styling** | CSS custom properties (single file) | No build step. Domain-scoped prefixes. Framework-agnostic. |
| **AI** | Anthropic Claude SDK | Powers Ask page, Learn Chat companion, and Quiz assessment — all via serverless functions |
| **Auth** | Supabase (Google OAuth) | Handles sign-in and session. Progress data stored in Supabase. |
| **Search** | Fuse.js | Client-side fuzzy search for curriculum content |
| **Backend** | Netlify Functions (esbuild) | Serverless — no persistent server. AI calls, email signup, rate limiting. |
| **Image** | Sharp (devDep) | Build-time OG image generation |
| **Deployment** | Netlify | Auto-deploy on push. SPA redirects. Environment variables for secrets. |

---

## Routing Architecture

Three distinct routing patterns coexist in `App.jsx`:

### 1. Manifesto (SiteLayout)

Wrapped in `<SiteLayout>`. Shared Nav, Footer, body styles. 15 routes.

```
/, /philosophy, /approach, /for-builders, /for-leaders, /for-enterprise,
/media, /origin, /start, /ask, /quiz, /name, /join, /privacy, /terms
```

### 2. Open Vector Learn (LearnLayout)

Wrapped in `<LearnLayout>` under `/open/learn/*`. Own sidebar, nav, theme system. 13 routes.

```
/open/learn, /open/learn/curriculum, /open/learn/curriculum/:levelSlug,
/open/learn/curriculum/:levelSlug/:lessonSlug, /open/learn/approach,
/open/learn/approach/:guideSlug, /open/learn/resources, /open/learn/chat,
/open/learn/contribute, /open/learn/about, /open/learn/faq,
/open/learn/changelog, /open/learn/progress, /open/learn/glossary,
/open/learn/enterprise
```

### 3. Standalone (no layout wrapper)

No shared layout. Each page manages its own body styles, nav, background, and cleanup on unmount. Used for sub-brands with distinct visual identities.

```
/open (OpenVectorPage), /investiture (InvestiturePage), /arroyo (ArroyoPage)
```

**When adding a new page:** Decide which pattern it follows before building. Manifesto pages go inside `SiteLayout`. Learn pages go inside `LearnLayout`. Sub-brands with their own visual identity go standalone.

---

## Project Structure

```
zerovector/
├── VECTOR.md                    # Project doctrine (read first)
├── CLAUDE.md                    # Contributor onboarding (read second)
├── ARCHITECTURE.md              # This file (read third)
├── src/
│   ├── main.jsx                 # Entry point (BrowserRouter + providers)
│   ├── App.jsx                  # Routes (3 routing patterns)
│   ├── content/                 # CONTENT LAYER — all text as JS exports
│   │   ├── en.js                # Main site content (combined export)
│   │   ├── home.js              # Homepage content
│   │   ├── philosophy.js        # Philosophy page
│   │   ├── investiture.js       # Investiture page
│   │   ├── arroyo.js            # Arroyo page
│   │   ├── builders.js          # For Builders page
│   │   ├── leaders.js           # For Leaders page
│   │   ├── enterprise.js        # Enterprise page
│   │   ├── origin.js            # Origin page
│   │   ├── media.js             # Media/Reading page
│   │   ├── quiz.js              # Quiz content
│   │   ├── open.js              # Open Vector landing
│   │   ├── join.js              # Join page
│   │   ├── name.js              # Name page
│   │   ├── start.js             # Start page
│   │   ├── approach.js          # Approach/Pipeline page
│   │   ├── recommended-reading.js
│   │   └── learn/               # Open Vector curriculum
│   │       ├── index.js         # Curriculum structure
│   │       ├── themes.js        # Learn theme definitions
│   │       ├── resources.js     # Curated external resources
│   │       ├── glossary.js      # Glossary terms
│   │       ├── changelog.js     # Platform changelog
│   │       ├── _template.js     # Lesson template for contributors
│   │       ├── 00-orientation/  # Level 00 (7 lessons)
│   │       ├── 01-foundation/   # Level 01 (7 lessons)
│   │       ├── 02-the-medium/   # Level 02 (7 lessons)
│   │       ├── 03-the-pipeline/ # Level 03 (9 lessons)
│   │       ├── 04-orchestration/# Level 04 (7 lessons)
│   │       ├── 05-auteur/       # Level 05 (6 lessons)
│   │       └── approach/        # Step-by-step guides (11 guides)
│   ├── pages/                   # UI LAYER — page components
│   │   ├── ManifestoPage.jsx    # Homepage
│   │   ├── PhilosophyPage.jsx
│   │   ├── PipelinePage.jsx
│   │   ├── BuildersPage.jsx
│   │   ├── LeadersPage.jsx
│   │   ├── EnterprisePage.jsx
│   │   ├── ReadingPage.jsx
│   │   ├── OriginPage.jsx
│   │   ├── AskPage.jsx
│   │   ├── QuizPage.jsx
│   │   ├── StartPage.jsx
│   │   ├── NamePage.jsx
│   │   ├── JoinPage.jsx
│   │   ├── OpenVectorPage.jsx   # Standalone
│   │   ├── InvestiturePage.jsx  # Standalone
│   │   ├── ArroyoPage.jsx       # Standalone
│   │   ├── PrivacyPage.jsx
│   │   ├── TermsPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── learn/               # Learn sub-app pages
│   │       ├── LearnHubPage.jsx
│   │       ├── LearnIndexPage.jsx
│   │       ├── LevelPage.jsx
│   │       ├── LessonPage.jsx
│   │       ├── LearnResourcesPage.jsx
│   │       ├── LearnChatPage.jsx
│   │       ├── LearnContributePage.jsx
│   │       ├── LearnAboutPage.jsx
│   │       ├── LearnFAQPage.jsx
│   │       ├── LearnChangelogPage.jsx
│   │       ├── LearnProgressPage.jsx
│   │       ├── LearnGlossaryPage.jsx
│   │       ├── LearnEnterprisePage.jsx
│   │       ├── ApproachIndexPage.jsx
│   │       └── GuidePage.jsx
│   ├── components/              # UI LAYER — shared components
│   │   ├── Animate.jsx          # Scroll-triggered fade-in
│   │   ├── Nav.jsx              # Main site navigation
│   │   ├── Footer.jsx           # Site footer
│   │   ├── PageHero.jsx         # Reusable hero section
│   │   ├── SectionHeader.jsx    # Section heading pattern
│   │   ├── NotifyForm.jsx       # Email signup (Buttondown via Kestris)
│   │   ├── BootSequence.jsx     # Terminal boot animation
│   │   ├── DecryptText.jsx      # Text reveal effect
│   │   ├── DecryptTuner.jsx     # Decrypt effect controls
│   │   ├── VectorField.jsx      # Animated vector visualization
│   │   ├── ZeroVectorAnimation.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── AnonWelcomeModal.jsx # Pre-login welcome
│   │   ├── WelcomeModal.jsx     # Post-login onboarding
│   │   ├── icons.jsx            # SVG icon components
│   │   ├── learn/               # OV Learn-specific components
│   │   │   ├── LearnNav.jsx
│   │   │   ├── LearnSidebar.jsx
│   │   │   ├── LearnSearch.jsx
│   │   │   ├── LearnBreadcrumbs.jsx
│   │   │   ├── LearnPagination.jsx
│   │   │   ├── LessonRenderer.jsx
│   │   │   ├── LessonBadge.jsx
│   │   │   ├── KnowledgeCheck.jsx
│   │   │   ├── CompletionCard.jsx
│   │   │   ├── MarkCompleteButton.jsx
│   │   │   ├── ProgressRing.jsx
│   │   │   ├── RightRail.jsx
│   │   │   ├── SignInBanner.jsx
│   │   │   ├── SignInPrompt.jsx
│   │   │   └── ThemeSwitcher.jsx
│   │   └── arroyo/              # Arroyo-specific components
│   │       ├── ArroyoCompTable.jsx
│   │       ├── ArroyoCounter.jsx
│   │       ├── ArroyoPipelineRow.jsx
│   │       └── ArroyoPriceCard.jsx
│   ├── layouts/                 # UI LAYER — layout wrappers
│   │   ├── SiteLayout.jsx       # Manifesto: Nav + Outlet + Footer
│   │   └── LearnLayout.jsx      # OV Learn: sidebar + nav + theme
│   ├── contexts/                # STATE LAYER — React Context
│   │   ├── UserContext.jsx      # Auth state (Supabase)
│   │   ├── ProgressContext.jsx  # Lesson completion tracking
│   │   └── ThemeContext.jsx     # Learn theme (dark/light/custom)
│   ├── hooks/                   # STATE LAYER — custom hooks
│   │   ├── useSEO.js            # Page meta tags
│   │   ├── useInView.js         # IntersectionObserver
│   │   └── useMousePosition.js  # Mouse tracking for effects
│   ├── lib/                     # SERVICES LAYER — external clients
│   │   └── supabase.js          # Supabase initialization
│   └── styles/                  # STYLES LAYER
│       └── site.css             # All styles (15,800+ lines, domain-scoped)
├── netlify/                     # SERVICES LAYER — serverless
│   └── functions/
│       ├── chat.js              # Ask page AI (manifesto voice)
│       ├── learn-chat.js        # Learn companion AI (+ Socratic mode)
│       ├── quiz.js              # Assessment engine AI
│       ├── join.js              # Email signup
│       └── lib/
│           └── rate-limit.js    # Shared rate limiting
├── public/                      # STATIC LAYER
│   ├── og/                      # OG images per page
│   ├── photos/                  # Origin story photos
│   └── ...                      # Favicon, fonts, etc.
├── scripts/                     # Build-time utilities
├── .env.example                 # Required environment variables
├── index.html                   # SPA shell
├── netlify.toml                 # Deploy config + function routing
├── package.json
└── vite.config.js               # React plugin, @ alias, port 5174
```

---

## Conventions

### Naming

| File Type | Convention | Example |
|-----------|-----------|---------|
| Components | PascalCase.jsx | `LearnSidebar.jsx`, `NotifyForm.jsx` |
| Pages | PascalCase + "Page" suffix.jsx | `ManifestoPage.jsx`, `LessonPage.jsx` |
| Content | camelCase.js | `investiture.js`, `philosophy.js` |
| Hooks | camelCase with "use" prefix.js | `useSEO.js`, `useInView.js` |
| Contexts | PascalCase + "Context" suffix.jsx | `UserContext.jsx`, `ProgressContext.jsx` |
| Serverless functions | kebab-case.js | `learn-chat.js`, `rate-limit.js` |
| Learn lessons | kebab-case.js | `systems-thinking.js`, `git-basics.js` |
| CSS classes | `[domain]-[block]-[element]` | `zv-nav-link`, `ovl-sidebar-item`, `inv-hero-prompt` |

### CSS Domain Prefixes

| Prefix | Domain | Used In |
|--------|--------|---------|
| `zv-` | Manifesto site | Pages within SiteLayout |
| `ovl-` | Open Vector Learn | Pages within LearnLayout |
| `inv-` | Investiture | InvestiturePage (standalone) |
| `arr-` | Arroyo | ArroyoPage (standalone) |

### State Management

- **UserContext** — Auth state (Supabase session, user profile). Wraps entire app.
- **ProgressContext** — Lesson completion tracking. Wraps entire app. Syncs with Supabase when logged in, falls back to localStorage.
- **ThemeContext** — Learn section theme (dark/light/custom). Scoped to LearnLayout.
- `useState` for component-local UI state.
- No Redux, no Zustand. Context is sufficient for this project's complexity.

### Styling

- **Single file:** `src/styles/site.css` — all styles, domain-scoped by prefix.
- **Design tokens:** CSS custom properties in `:root` (colors, fonts, spacing, easing).
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (code). Loaded via Google Fonts in `index.html`.
- **Dark default:** Manifesto and standalone pages are dark-on-dark. Learn section supports theme switching.
- **No Tailwind, no CSS-in-JS, no SCSS.** Plain CSS with custom properties.

### API / Backend Pattern

- All AI calls go through `netlify/functions/` — never call the Anthropic SDK from client-side code.
- Each serverless function has its own `SYSTEM_PROMPT` with voice, boundaries, and output format.
- Rate limiting via shared `netlify/functions/lib/rate-limit.js`.
- Email signup routes through Kestris subscribe proxy to Buttondown.
- Environment variables: `ANTHROPIC_API_KEY`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.

### Testing

Testing: None detected.

[OPERATOR: If your project has a testing strategy, declare it here
(framework, file patterns, coverage expectations) and invest-architecture
will audit against it. If testing is outside your doctrine scope,
omit this section — Investiture audits what you declare, not what you don't.]

---

## Development Principles

These are higher-order beliefs about how this codebase works — the *why* behind the conventions. A contributor who understands these principles can make good judgment calls on edge cases that the conventions don't explicitly cover.

### Content is data, not markup.

All text lives as exported JS objects in `src/content/`. Pages import content and render it. Components never contain copy inline. This separation means content can be reviewed, translated, or restructured without touching React code.

### One stylesheet, scoped by domain.

CSS is centralized in a single file (`site.css`) but namespaced by product area: `zv-` (manifesto), `ovl-` (Open Vector Learn), `inv-` (Investiture), `arr-` (Arroyo). This means any contributor can find all styles for a domain by searching its prefix, and naming collisions between domains are impossible.

### Standalone pages own their world.

Sub-brands (Investiture, Arroyo, /open landing) break out of the shared SiteLayout and control their own body styles, nav, background, and cleanup on unmount. This allows each to have a fully distinct visual identity while living in the same SPA.

### Doctrine before code.

VECTOR.md → CLAUDE.md → ARCHITECTURE.md. Read before you write. The reading order is the onboarding — for humans and agents alike.

[OPERATOR: Verify — inferred from observed patterns. Add, modify, or remove principles as needed. These should feel true to how you actually build.]

---

## Flexible Preferences

These defaults can be overridden by the operator in CLAUDE.md or this file:

- **Commit granularity** — Default: one commit per logical change.
- **Comment density** — Default: comments on non-obvious logic only.
- **Voice and personality** — Default: warm, professional, brief. Operator defines persona in CLAUDE.md if desired.
- **Stack choices** — Default: React, Vite, CSS variables, Context. Operator can swap components here.

---

## Decisions

Architecture Decision Records live in `/vector/decisions/`.

| ADR | Decision | Date | Status |
|-----|----------|------|--------|
| 001 | Single CSS file with domain-scoped prefixes over component-scoped CSS | 2026-02-10 | Accepted |
| 002 | Content layer as JS exports over CMS or MDX | 2026-02-10 | Accepted |
| 003 | React Context over external state library | 2026-02-10 | Accepted |
| 004 | Netlify Functions for AI over client-side SDK calls | 2026-02-10 | Accepted |

[OPERATOR: Verify dates — inferred from project start. Add ADR files to /vector/decisions/ when ready.]
