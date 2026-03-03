# Open Vector — Content Generation Tasks

**For Erika** · March 2, 2026
**Based on:** Rin Oliver's audit evaluation + Lee's codebase analysis

When these are done, hand them back to Lee. He will create the files, wire them into the curriculum, and resequence the lesson order.

---

## How Lessons Work

Each lesson is a JS file with metadata + content sections. You don't need to write valid JS — just write the content in the structure below and Lee will format it. Use the section types: **text** (heading + paragraphs), **callout** (key insight), **code** (code block), **exercise** (hands-on task), **resources** (external links).

---

## Task 1: "What Is Zero Vector?" — Level 00

**Priority:** P1 · **Estimated duration:** 15–20 min read
**File path:** `src/content/learn/00-orientation/what-is-zero-vector.js`
**Position:** First lesson in Level 00 (before Terminal)

### Why

Level 00 currently jumps straight into terminal commands. A learner completes 6 lessons and 103 minutes without ever learning what Zero Vector is, why they're here, or what they're building toward. This should be the very first thing they see.

### What to cover

- What is Zero Vector Design? (the methodology, not the website)
- What is an Auteur? What are you working toward by the end of this curriculum?
- How is this different from "learn to code" or vibe coding?
- The philosophy: AI agents as crew, not replacement. Intent over output.
- What does the curriculum cover? (brief overview of the 6-level arc)
- What will you be able to do when you finish?
- Who made this and why it's free

### Suggested sections

```
text — "What Is Zero Vector Design?"
  What it is, one-paragraph explanation. Not the website — the methodology.

text — "What You're Building Toward"
  The Auteur vision. By the end, you ship your own vision with AI agents as crew.

text — "This Is Not Vibe Coding"
  The distinction. Intent, architecture, systems thinking — then AI.

callout — Key principle (e.g., "AI agents are crew, not replacement.")

text — "What This Curriculum Covers"
  Brief walkthrough of the 6-level arc. Don't repeat the index page — give the narrative.

text — "Who Made This and Why It's Free"
  Brief — the Open Vector pledge in miniature.

exercise — "Before You Begin"
  What to have ready: a computer, curiosity, willingness to type commands.

resources — Links
  zerovector.design, the manifesto, the Substack recommended reading
```

### Knowledge check (optional)

- What is the difference between Zero Vector Design and vibe coding?
- What does "Auteur" mean in the context of this curriculum?

---

## Task 2: "What Is vector.md" — Level 01

**Priority:** P2 · **Estimated duration:** 15–20 min read
**File path:** `src/content/learn/01-foundation/vector-md.js`
**Position:** After Planning (lesson 4), before Data Modeling (lesson 5)

### Why

vector.md is the central artifact of the Zero Vector methodology, but it doesn't appear anywhere in the curriculum. Learners go through all of Foundation — systems thinking, architecture, planning — without ever seeing the artifact that structures all of that thinking. By the time they hit the build phase in Level 02, they should know what a vector.md is.

### What to cover

- What is vector.md? (the artifact, its purpose, its structure)
- Why does it exist? (the problem it solves — context for AI agents, project memory)
- How does it connect to the systems thinking and planning work from earlier in this level?
- What goes in a vector.md? (high-level structure — not a full spec, just the concept)
- How do AI agents use it? (CLAUDE.md tells agents how to behave; vector.md tells agents who they're building for)
- Show a real example (or a simplified one)
- This is a concept lesson — the learner sees and understands a vector.md here. Hands-on creation comes in Level 02 or 03.

### Suggested sections

```
text — "What Is vector.md?"
  The artifact, what it is, one clear paragraph.

text — "Why It Exists"
  The problem: AI agents have no persistent context. vector.md gives them yours.

text — "What Goes in a vector.md?"
  High-level structure. Users, jobs-to-be-done, architecture decisions, constraints.

callout — "CLAUDE.md tells agents how to behave. vector.md tells agents who they're building for."

code — Example vector.md
  A simplified but real-looking vector.md (doesn't need to be a full production one).

text — "How This Connects to What You've Learned"
  Systems thinking → architecture → planning → vector.md is the written artifact of all of that.

exercise — "Read a vector.md"
  Give the learner a link to a real vector.md (Investiture scaffold?) and have them identify the sections.

resources — Links
  Investiture scaffold repo, any relevant Substack articles
```

### Knowledge check (optional)

- What problem does vector.md solve?
- What's the difference between CLAUDE.md and vector.md?
- Why should vector.md exist before you start building?

---

## Task 3: "Investiture — The Framework" — Level 03

**Priority:** P2 · **Estimated duration:** 20–25 min read
**File path:** `src/content/learn/03-the-pipeline/investiture.js`
**Position:** After Shipping (last lesson), or after Validation (lesson 6) — your call

### Why

Investiture currently appears only as a "Get the Scaffold" CTA button at the bottom of Levels 03–05. A learner can complete the entire Pipeline without engaging with the framework that ties the methodology together. The Pipeline is where the full ZV methodology becomes concrete — Investiture should be taught here, not just linked.

### What to cover

- What is Investiture? (the framework, the scaffold, the starter architecture)
- How does it connect to the Pipeline work in this level? (research → synthesis → JTBD → ideation → prototyping → validation → shipping → Investiture structures all of that)
- What does the scaffold give you? (project structure, CLAUDE.md, architecture that teaches your AI to write clean code)
- Walk through the scaffold structure at a high level
- How does vector.md (from Level 01) fit into Investiture?
- This is the hands-on Investiture introduction — the learner should clone and explore the scaffold

### Suggested sections

```
text — "What Is Investiture?"
  The framework. Not the Stormlight metaphor — the practical tool.

text — "Why This Exists"
  The problem with starting from scratch every time. The scaffold as a starting point.

text — "What the Scaffold Gives You"
  Walk through the structure: project layout, CLAUDE.md, vector.md, architecture decisions baked in.

callout — Key insight about structured architecture vs. blank canvas

text — "How It Connects to the Pipeline"
  Everything you did in this level — research, JTBD, ideation — feeds into this scaffold.

code — The scaffold structure
  Directory tree or key files, annotated.

exercise — "Clone and Explore"
  Clone the Investiture repo, open it, read the CLAUDE.md and vector.md. Identify how the research artifacts map to the scaffold.

resources — Links
  Investiture scaffold repo, /investiture page on zerovector.design
```

### Knowledge check (optional)

- What does the Investiture scaffold give you that a blank project doesn't?
- How does your research from the Pipeline phases connect to the scaffold?

---

## Task 4: ZV-Framing Pass on Level 01 Lessons

**Priority:** P3 · **Not a new file — edits to existing lessons**

### What to do

Read through the 6 existing Level 01 lessons and add 1–3 sentences per lesson that explicitly connect the general concept to the Zero Vector approach. Not a rewrite — a framing pass.

**Files to edit:**
- `src/content/learn/01-foundation/systems-thinking.js`
- `src/content/learn/01-foundation/architecture.js`
- `src/content/learn/01-foundation/nouns-and-verbs.js`
- `src/content/learn/01-foundation/planning.js`
- `src/content/learn/01-foundation/data-modeling.js`
- `src/content/learn/01-foundation/information-architecture.js`

### Example additions

**Systems Thinking:** "In Zero Vector, systems thinking is the prerequisite for everything. Before you tell an AI agent what to build, you need to understand the system you're building within."

**Architecture:** "Zero Vector practitioners design the architecture before the first prompt. This is what separates intentional creation from vibe coding — you know the shape of the thing before you ask the AI to build it."

**Planning:** "Your planning artifact in Zero Vector becomes your vector.md — the document that gives your AI agents the context they need to build what you actually envisioned."

### Format

Just write the additions as plain text with the lesson name. Lee will insert them into the right sections.

---

## Task 5: CLAUDE.md + vector.md Connection in Level 04

**Priority:** P3 · **Not a new file — edit to existing lesson**

### What to do

In the CLAUDE.md lesson in Level 04, add a paragraph connecting it to vector.md:

**File:** `src/content/learn/04-orchestration/claude-md.js` (or whatever the CLAUDE.md lesson slug is)

### Suggested addition

Something like: "Your CLAUDE.md tells agents how to behave — their personality, their constraints, their workflow. Your vector.md tells agents who they're building for — the users, the jobs to be done, the architecture. Together, these two artifacts form the full Zero Vector context stack. The agent knows how to work (CLAUDE.md) and what it's working on (vector.md)."

---

## Task 6: Accuracy Pass

**Priority:** P1 · **No file changes — just a read-through**

Read through all lesson content, especially Levels 00–02, and flag anything that's factually wrong, misleading, or oversimplified to the point of being incorrect. All lesson content was AI-generated and needs a human accuracy review before heavy public promotion.

**What to look for:**
- Technical inaccuracies (wrong commands, wrong descriptions of how Git/DNS/deployment works)
- Oversimplifications that would teach bad habits
- Missing caveats or edge cases that matter
- Tone issues (too condescending, too abstract, not opinionated enough)

**Deliver as:** A list of corrections per lesson. Lee will apply them.

---

## Resequencing Summary

When Tasks 1–3 are done, the curriculum order changes:

**Level 00 (7 lessons, was 6):**
1. **What Is Zero Vector?** ← NEW (Task 1)
2. The Terminal
3. File Systems
4. Git Basics
5. Repos
6. Deployment
7. DNS

**Level 01 (7 lessons, was 6):**
1. Systems Thinking (+ ZV framing, Task 4)
2. Architecture (+ ZV framing, Task 4)
3. Nouns & Verbs (+ ZV framing, Task 4)
4. Planning (+ ZV framing, Task 4)
5. **What Is vector.md** ← NEW (Task 2)
6. Data Modeling (+ ZV framing, Task 4)
7. Information Architecture (+ ZV framing, Task 4)

**Level 03 (8 lessons, was 7):**
1. Research
2. Synthesis
3. Jobs to Be Done
4. Ideation
5. Prototyping
6. Validation
7. Shipping
8. **Investiture — The Framework** ← NEW (Task 3)

**Level 04:** CLAUDE.md lesson gets vector.md connection paragraph (Task 5)
