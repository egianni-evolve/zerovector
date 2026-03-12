## Architecture Audit

**Scope:** Full project (`src/`, `netlify/functions/`)
**Doctrine source:** ARCHITECTURE.md (last updated 2026-03-11)
**Files scanned:** 165

### Violations

#### LAYER — high
- `src/pages/OpenVectorPage.jsx:81-223` — Full paragraphs, section descriptions, and support block copy hardcoded in JSX. Should be in `src/content/`.
- `src/pages/learn/LearnHubPage.jsx:87-279` — Hero description, Learn/Practice/Build blocks, about paragraphs, section card copy, and support section all hardcoded in JSX. Should be in `src/content/`.
- `src/pages/learn/LearnChatPage.jsx:5-36` — `SUGGESTED_PROMPTS` array and page title/subtitle/disclaimer hardcoded in JSX. Should be in `src/content/`.
- `src/pages/AskPage.jsx:87-133` — Suggested queries, title, boot sequence messages, and error strings hardcoded in JSX. Should be in `src/content/`.
- `src/pages/InvestiturePage.jsx:79-123` — Whisper prompt and CTA block with marketing copy hardcoded in JSX. Should be in `src/content/investiture.js`.
- `src/pages/ManifestoPage.jsx:228-472` — Section numbers, labels, and CTA text scattered throughout JSX instead of content layer.
- `src/pages/PhilosophyPage.jsx:36-164` — Section titles and closing paragraph hardcoded in JSX. Should be in `src/content/`.
- `src/components/BootSequence.jsx:3-12` — `BOOT_LINES` array hardcoded in component. Should be in `src/content/`.
- `src/components/WelcomeModal.jsx:31-50` — Welcome text and path descriptions hardcoded. Should be in `src/content/`.
- `src/components/AnonWelcomeModal.jsx:34-39` — Modal copy hardcoded. Should be in `src/content/`.
- `src/components/Nav.jsx:5-31` — `navGroups` navigation structure hardcoded in component. Arguably content.
- `src/components/NotifyForm.jsx:28` — Direct `fetch('https://kestris.ai/api/subscribe')` call from component. External communication should go through Services layer (`netlify/functions/`).
- `src/pages/learn/LearnChatPage.jsx:42-156` — Custom markdown parser (`renderLinkedText`, `renderBold`, `renderInlineCode`) implemented in page file. Should be extracted to a utility.
- `src/pages/learn/LearnHubPage.jsx:22-69` — Progress calculation logic (counting completed lessons, finding next uncompleted) is business logic in a page component. Should be in a hook or ProgressContext.
- `src/pages/JoinPage.jsx:183-226` — Full form validation logic with field iteration, conditional validation, and scroll-to-error. Business logic in UI layer.
- `src/pages/ManifestoPage.jsx:80-116` — `PrincipleShare` contains share URL construction and clipboard API logic. Near-duplicate of `ShareCard` in QuizPage.

#### IMPORT — high
- `src/contexts/ThemeContext.jsx:2` — State layer imports from Content layer (`../content/learn/themes`). State should only import from Services (`src/lib/`).

#### TOKENS — medium
- `src/styles/site.css` (13 instances) — Hardcoded `color: #fff` in ZV/Enterprise sections. Use `var(--text-primary)`.
- `src/styles/site.css:13043,13088,13145` — Hardcoded `font-family: 'JetBrains Mono', monospace` in Enterprise section. Use `var(--font-mono)`.

#### NAMING — low
- `src/components/icons.jsx` — Should be `Icons.jsx` (PascalCase for components).
- `src/content/recommended-reading.js` — Should be `recommendedReading.js` (camelCase for content files).

#### SIZE — info
- `src/content/learn/resources.js` — 818 lines. Doctrine limit is 200.
- `src/pages/JoinPage.jsx` — 496 lines. Doctrine limit is 200.
- `src/pages/ManifestoPage.jsx` — 484 lines. Doctrine limit is 200.
- `src/pages/ArroyoPage.jsx` — 379 lines. Doctrine limit is 200.
- `src/pages/learn/LearnChatPage.jsx` — 367 lines. Doctrine limit is 200.
- `src/pages/learn/LearnContributePage.jsx` — 341 lines. Doctrine limit is 200.
- `src/pages/InvestiturePage.jsx` — 327 lines. Doctrine limit is 200.
- `src/content/home.js` — 313 lines. Doctrine limit is 200.
- `src/pages/learn/LearnHubPage.jsx` — 308 lines. Doctrine limit is 200.
- `src/content/join.js` — 277 lines. Doctrine limit is 200.
- `src/pages/QuizPage.jsx` — 274 lines. Doctrine limit is 200.
- `src/pages/OpenVectorPage.jsx` — 270 lines. Doctrine limit is 200.
- `src/components/Nav.jsx` — 267 lines. Doctrine limit is 200.
- `src/components/learn/LearnSidebar.jsx` — 264 lines. Doctrine limit is 200.
- `src/content/arroyo.js` — 233 lines. Doctrine limit is 200.
- `src/pages/learn/ApproachIndexPage.jsx` — 231 lines. Doctrine limit is 200.
- `src/content/learn/approach/scaffold-feature.js` — 218 lines. Doctrine limit is 200.
- `src/content/learn/themes.js` — 213 lines. Doctrine limit is 200.
- `src/content/learn/glossary.js` — 212 lines. Doctrine limit is 200.
- `src/pages/AskPage.jsx` — 206 lines. Doctrine limit is 200.
- `src/components/learn/LearnSearch.jsx` — 204 lines. Doctrine limit is 200.
- `src/content/learn/approach/debugging-with-ai.js` — 201 lines. Doctrine limit is 200.

### Summary
- High: 17 | Medium: 2 | Low: 2 | Info: 22
- Architecture health: **VIOLATIONS FOUND**

### Recommended Actions

1. **Extract hardcoded copy from newer pages.** OpenVectorPage, LearnHubPage, LearnChatPage, and AskPage have the most content-layer violations. Create `src/content/openVector.js`, `src/content/learn/hub.js`, `src/content/learn/chat.js`, and update `src/content/ask.js` (or create one). The manifesto pages are mostly clean — the newer pages drifted.

2. **Move `themes.js` out of Content layer.** `src/content/learn/themes.js` is imported by `ThemeContext.jsx` (State layer), violating import direction. Move to `src/lib/themes.js` — it is configuration data, not site copy.

3. **Route NotifyForm through a Netlify function.** `NotifyForm.jsx` calls `kestris.ai` directly from a component. Add a `netlify/functions/subscribe.js` wrapper to keep external communication in the Services layer.
