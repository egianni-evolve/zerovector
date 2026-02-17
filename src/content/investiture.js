// Investiture Page — Content
// Part of the Zero-Vector content layer. See en.js for the combined export.

const investiture = {
  nav: {
    brand: 'Investiture',
    back: 'Zero Vector',
    github: 'GitHub',
  },

  hero: {
    label: 'A Zero-Vector Scaffold',
    title: ['The Next', 'Step'],
    subtitle: 'Infuse your intent with Investiture. Architecture that teaches your AI to write clean code. Clone it. Open Claude Code. Start building.',
    badge: 'Free & Open Source',
  },

  ethos: {
    label: 'The Framework',
    whatIs: {
      title: 'What This Is',
      body: 'An architecture scaffold with a CLAUDE.md that teaches your AI assistant how to write clean code. Folders, separation of concerns, guardrails. A spaghetti-free zone for building with AI. Clone it, open Claude Code, and start building. The structure keeps you from painting yourself into corners.',
    },
    whatIsNot: {
      title: 'What This Is Not',
      body: 'Not Tailwind. Not Bootstrap. Zero styles, zero layouts, zero components. Run it and you get a blank screen. That is the point. Unopinionated about your UI, it only cares about where your code lives. Bring your own design system, or ask Claude to build one.',
    },
  },

  problem: {
    label: 'The Gap',
    problem: {
      title: 'The Problem',
      body: 'You are a designer. You have seen what AI coding tools can do. You want in. But the code works until it does not, and you cannot debug it. Terms like "services layer" and "state management" feel like a foreign language.',
    },
    solution: {
      title: 'The Solution',
      body: 'Engineering knowledge pre-loaded into a scaffold your AI can read. Work inside a system with guardrails built in. You do not have to become an engineer. Just build inside structure that already knows the rules.',
    },
  },

  architecture: {
    label: 'Architecture Layers',
    intro: 'Four layers. Clean separation. Each one has a job.',
    layers: [
      { number: '01', title: 'Design System', path: 'design-system/', file: 'tokens.css', desc: 'Tokens, themes, and component definitions. CSS variables for colors, spacing, typography. Change your entire visual system in one place.' },
      { number: '02', title: 'Content Layer', path: 'content/', file: 'en.json', desc: 'All user-facing strings in one place. No hardcoded text in components. Internationalization-ready. CMS-swappable.' },
      { number: '03', title: 'Core Logic', path: 'core/', file: 'utils.js', desc: 'Pure functions and state management. Framework-agnostic. Testable. No side effects.' },
      { number: '04', title: 'Services', path: 'services/', file: 'api.js', desc: 'Auth, database, AI, all wrapped. Swap Supabase for Firebase in one file. External dependencies never leak into your components.' },
    ],
  },

  audience: {
    label: 'Who This Is For',
    groups: [
      { title: 'UX Designers', body: 'Who want to build, not just wireframe. You have the design thinking. Now ship the design.' },
      { title: 'Design Technologists', body: 'Leveling up your AI-assisted workflow. You already bridge the gap. Now eliminate it.' },
      { title: 'Vibe Coders', body: 'Who want to understand why things work. Structure turns experiments into products.' },
    ],
  },

  quickstart: {
    label: 'Quick Start',
    intro: 'Three commands. Working scaffold. Real architecture.',
    commands: [
      'git clone https://github.com/erikaflowers/investiture.git',
      'cd investiture && bash install.sh',
      'npm start',
    ],
    after: 'Your app opens at localhost:3000. Claude Code reads the architecture. Start building.',
  },

  quote: {
    text: 'The most important step a person can take is always the next one.',
    cite: 'Dalinar Kholin -- The Stormlight Archive',
    context: 'Named for Investiture, the fundamental magical energy of Brandon Sanderson\'s Cosmere universe. Like its namesake, this scaffold is a foundation that can manifest as many different things.',
  },

  cta: {
    title: 'Start Building',
    body: 'The scaffold is free. The knowledge is free. The only cost is your willingness to start your journey... journey before destination.',
    primaryCta: 'Clone the Repo',
    primaryUrl: 'https://github.com/erikaflowers/investiture',
    secondaryCta: 'Read the Docs',
    secondaryUrl: 'https://github.com/erikaflowers/investiture#readme',
    backCta: 'Back to Zero Vector',
  },
};

export default investiture;
