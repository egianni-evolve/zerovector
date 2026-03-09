// Arroyo Labs — Content Layer
// Commercial services landing page for Zero Vector paid engagements.

const arroyo = {
  nav: {
    brand: 'Arroyo',
    tagline: 'BY ZERO VECTOR',
    links: ['How It Works', 'Compare', 'Pricing'],
    cta: 'Start Building',
  },

  hero: {
    label: 'A ZERO-VECTOR SCAFFOLD',
    titleLines: [
      'A working MVP.',
      'Doctrine your agents read.',
      'Skills to keep building — without us.',
    ],
    subtitle: 'Arroyo Labs runs the interview, generates the doctrine, builds the full stack with you.',
    price: '$5,000.',
    subtitleEnd: 'You own the repo, the agent config, the skills. You keep going. We exit.',
    primaryCta: 'Start Your MVP',
    secondaryCta: 'See the Investiture Framework',
    terminal: [
      '$ arroyo init',
      '> Doctrine session complete. 15 questions answered.',
      '> Generating VECTOR.md\u2026',
      '> Seeding Investiture scaffold\u2026',
      '> /vector/ research schemas (6) \u2014 seeded',
      '> CLAUDE.md \u2014 tuned to your project',
      '> Repo is ready. Stack is yours.',
    ],
  },

  problem: {
    label: 'THE ACTUAL PROBLEM',
    headline: 'The handoff is the problem.\nEvery tool in your stack is built around it.',
    tagline: 'They are not assistants. They are crew.',
    bodyLeft: [
      'ChatPRD, Notion AI, ProductBoard \u2014 they all assume a traditional product pipeline. PM writes the doc. PM hands it to engineering. Engineering hands it to QA. The doc was never the problem. The handoff was.',
      'Zero Vector is a methodology for eliminating the handoff entirely. The person with the vision builds the artifact directly, using AI agents as crew. No translation layer. No alignment tax paid session after session.',
    ],
    gapsLabel: 'THE TOOLS THAT DON\u2019T SOLVE THIS',
    gaps: [
      { tool: 'ChatPRD', gap: 'Outputs a document. Your agents still start cold.' },
      { tool: 'Notion AI', gap: 'Organizes your notes. Your agents still can\u2019t read the workspace.' },
      { tool: 'v0 / Lovable', gap: 'Generates UI from prompts. No doctrine, no research, no context layer.' },
      { tool: 'ChatGPT', gap: 'You rebuild context every single session. That\u2019s the tax.' },
      { tool: 'ProductBoard', gap: 'Synthesizes customer feedback. Never touches your codebase.' },
    ],
  },

  compare: {
    label: 'COMPARE',
    headline: 'ChatPRD outputs documents.\nArroyo outputs systems agents understand.',
    subtitle: 'A document lives in Notion. A scaffold is a repo your AI agents already understand \u2014 with doctrine, personas, research schemas, and a tuned agent config seeded from day one.',
    legend: '\u2713 = built-in \u00b7 ~ = partial / DIY \u00b7 \u2717 = not offered',
    columns: ['', 'Category', 'Output', 'Agent Alignment', 'Repo Scaffold', 'Doctrine File', 'Starting Price'],
    competitors: [
      { name: 'ChatPRD', cat: 'Document Generator', out: 'PRD to paste elsewhere', agents: '\u2717 Cold every session', scaffold: '\u2717 None', doctrine: '\u2717 None', price: '$15\u201324/mo' },
      { name: 'Notion AI', cat: 'Workspace Docs', out: 'Notes in a wiki', agents: '\u2717 No agent config', scaffold: '\u2717 None', doctrine: '\u2717 None', price: '$10/user/mo' },
      { name: 'v0 / Lovable', cat: 'Prompt-to-UI', out: 'UI with no doctrine', agents: '~ No project context', scaffold: '~ Generic', doctrine: '\u2717 None', price: '$20\u201325/mo' },
      { name: 'ProductBoard', cat: 'PM Platform', out: 'Roadmap & feedback portal', agents: '\u2717 No agent layer', scaffold: '\u2717 None', doctrine: '\u2717 None', price: '$20\u201360/user/mo' },
      { name: 'ChatGPT', cat: 'General LLM', out: 'Whatever you prompt for', agents: '~ Memory opt-in, no doctrine', scaffold: '\u2717 None', doctrine: '\u2717 None', price: '$20+/mo' },
      { name: 'Arroyo', cat: 'Scaffold Generator', out: 'VECTOR.md free / Full stack POC', agents: '\u2713 CLAUDE.md (POC tier)', scaffold: '\u2713 Investiture', doctrine: '\u2713 VECTOR.md', price: 'Free / $5k POC', highlight: true },
    ],
  },

  pipeline: {
    label: 'WHAT CHANGES',
    headline: 'Not faster docs. A different pipeline.',
    subtitle: 'Every stage of the product pipeline, transformed \u2014 not just the document-creation step that ChatPRD optimizes.',
    rows: [
      {
        title: 'First agent session',
        before: 'Paste context into Claude. Explain your project again. Get generic output. Repeat every session.',
        after: 'CLAUDE.md pre-seeded with your project doctrine. Every session starts with full context. Agents read your architecture, not your brief.',
      },
      {
        title: 'Research',
        before: 'Interview notes in Notion, insights in Slack, assumptions in someone\u2019s head. No machine-readable format.',
        after: '6 structured /vector schemas seeded from your Arroyo session: JTBD, personas, assumptions, competitive, blue ocean, interviews.',
      },
      {
        title: 'PRD \u2192 code handoff',
        before: 'Export to Linear. Tag the engineers. Answer 40 Slack questions about what you meant. Ship something 60% of the vision.',
        after: 'VECTOR.md is the handoff. Agents read doctrine before they write code. No translation layer. No alignment tax.',
      },
      {
        title: 'Build + ship',
        before: 'Unstructured architecture. No doctrine. UI that looks generic. Tech debt accumulates before day one.',
        after: 'Investiture scaffold: repo structure, design system, skill packs. Doctrine-aligned execution.',
        beforeLabel: 'AD-HOC BUILDING',
        afterLabel: 'ZERO-VECTOR',
      },
      {
        title: 'After Arroyo',
        before: 'Vendor lock-in. Monthly retainer. You need us to keep building.',
        after: 'The stack is yours the day we ship it. Clone Investiture. Keep building alone. No dependency on Arroyo.',
      },
    ],
  },

  howItWorks: {
    label: 'HOW IT WORKS',
    headline: 'Five stages. One scaffold.',
    subtitle: 'Each stage is three Socratic questions. Answer honestly \u2014 your agents will read every word.',
    stages: [
      { num: '01', label: 'VISION', variant: 'primary', body: 'Define the problem, the north star, and your one differentiator. Why does this need to exist right now?' },
      { num: '02', label: 'USER', variant: 'primary', body: 'Map your user\u2019s day, their exact workaround, and the single action that signals real value delivered.' },
      { num: '03', label: 'MECHANICS', variant: 'primary', body: 'Specify core actions, data model, and where AI actually adds value vs. where you\u2019re pattern-matching on hype.' },
      { num: '04', label: 'MARKET', variant: 'secondary', body: 'Competitive gaps, discovery path, and pricing that feels obvious to a first-time user \u2014 not clever.' },
      { num: '05', label: 'BUILD', variant: 'secondary', body: 'Kill risk, MVP scope boundary, and 90-day success criteria. Pressure-test the plan before the first sprint.' },
    ],
  },

  whatYouGet: {
    label: 'WHAT YOU GET',
    headline: 'Your AI agents read doctrine, not prompts.',
    subtitle: 'ChatPRD outputs a document for humans. Arroyo seeds a complete system for agents \u2014 the scaffold, the agent config, the research schemas, and VECTOR.md as the source of truth your AI crew reads before writing code.',
    separatorLabel: 'The part every tool leaves out:',
    deliverables: [
      {
        num: '01', variant: 'primary',
        title: 'VECTOR.md \u2014 Project doctrine',
        body: 'Machine-readable identity: problem statement, user context, mechanics, market position, build plan. Your AI agents read this before writing a line of code. ChatPRD gives you a doc. This is doctrine.',
        vs: 'vs. ChatPRD: exports to Notion / Confluence / Google Docs',
      },
      {
        num: '02', variant: 'primary',
        title: 'CLAUDE.md \u2014 Tuned agent persona',
        body: 'A CLAUDE.md built specifically for your project: how your agent should behave, what it should never do, what your codebase conventions are. Every session starts aligned instead of cold.',
        vs: 'vs. ChatGPT: you re-explain context every time',
      },
      {
        num: '03', variant: 'primary',
        title: 'Investiture scaffold \u2014 ready to clone',
        body: 'React 19 + Vite, /core, /services, /design-system, /vector schemas. Not a blank repo. Not a Lovable export with no architecture. A principled scaffold designed for the one-person-full-pipeline model.',
        vs: 'vs. v0 / Lovable: generates UI with no doctrine, no research layer',
      },
      {
        num: '04', variant: 'secondary',
        title: '6 research schemas \u2014 pre-seeded',
        body: 'JTBD, user personas, assumptions log, competitive analysis, blue ocean canvas, interview guide \u2014 structured from your Arroyo session, living in /vector, readable by agents and humans alike.',
        vs: 'vs. ProductBoard: $20\u201360/user/mo for feedback synthesis, no scaffold output',
      },
      {
        num: '05', variant: 'primary', separator: true,
        title: 'You leave with everything. We leave with nothing.',
        body: 'Reusable Zero Vector skill packs. Tuned CLAUDE.md. Investiture scaffold. VECTOR.md doctrine. The repo. All yours. No seat license. No retainer. No platform dependency. Other tools need you to keep paying. Arroyo exits.',
        vs: 'vs. every PM tool: requires their platform to keep working. Forever.',
      },
    ],
  },

  stats: [
    { value: 15, label: 'SOCRATIC QUESTIONS \u00b7 ZERO FILLER' },
    { value: 6, label: 'RESEARCH SCHEMAS SEEDED FROM YOUR SESSION' },
    { value: 0, prefix: '$', label: 'RECURRING FEES AFTER THE ENGAGEMENT' },
  ],

  pricing: {
    label: 'PRICING',
    headline: 'Pay once. Own everything. Never need us again.',
    subtitle: 'ChatPRD charges $15/mo forever. Every PM tool requires their platform to keep working. Arroyo gives you everything and exits. $5k once \u2014 a working product, doctrine, agent config, and the skills to keep building alone. That\u2019s the point.',
    tiers: [
      {
        plan: 'VECTOR STARTER',
        price: 'Free',
        desc: 'The self-serve demo. Run the Socratic interview. Get your VECTOR.md. Clone Investiture yourself. It\u2019s real and useful \u2014 but it\u2019s not the full engagement.',
        features: [
          'Full Arroyo Socratic interview',
          'VECTOR.md export \u2014 yours to keep',
          'Investiture scaffold (MIT licensed, clone it yourself)',
          'Zero Vector docs access',
          'No account required. No platform dependency.',
        ],
      },
      {
        plan: 'POC MVP',
        price: '$5,000',
        desc: 'Arroyo Labs builds your complete working product \u2014 doctrine, scaffold, agent config, and MVP code \u2014 then hands you the keys and the skills.',
        note: 'ChatPRD: $180/yr and you still have a document. Arroyo: $5k once and you have a working product you own forever.',
        featured: true,
        features: [
          'Everything in Starter',
          'We build the full working MVP with you',
          'Tuned CLAUDE.md \u2014 your agents start aligned, not cold',
          '6 pre-seeded /vector research schemas',
          'Reusable skill packs so you keep building without us',
          'Async support through first launch',
          'You own the repo, the config, the doctrine \u2014 all of it',
          'No seat license. No retainer. No platform dependency. Ever.',
        ],
      },
      {
        plan: 'ADVISORY RETAINER',
        price: 'Custom',
        desc: 'Ongoing Zero Vector advisory for teams building at scale with the one-person-full-pipeline model.',
        features: [
          'Everything in POC MVP',
          'Ongoing sprint support',
          'Open Vector curriculum access',
          'CZVO advisory engagement',
          'Team skill pack development',
          'Architecture reviews',
        ],
      },
    ],
  },

  cta: {
    label: '\u25cf THE MOST IMPORTANT STEP IS ALWAYS THE NEXT ONE',
    headline: 'Stop drawing pictures\nof what you want to build.',
    body: '$5,000. A working MVP. Doctrine your agents already understand. Skills to keep shipping after we\u2019re gone. You own the stack. You keep the crew.',
    tagline: 'They are not assistants. They are crew. Start every project with doctrine, not just dependencies.',
    primaryCta: 'Book an Arroyo Session',
    secondaryCta: 'See the Investiture Framework',
    bookingUrl: 'https://calendly.com/eflowers-6au/sync-up-call',
  },

  footer: {
    brand: 'Arroyo',
    tagline: 'Built on Zero Vector \u00b7 zerovector.design',
    links: [
      { label: 'Zero Vector', href: '/' },
      { label: 'Investiture', href: '/investiture' },
      { label: 'Open Vector', href: '/open' },
    ],
  },
};

export default arroyo;
