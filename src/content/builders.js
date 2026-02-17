// For Builders Page — Content
// Part of the Zero-Vector content layer. See en.js for the combined export.

const builders = {
  eyebrow: 'For Builders',
  title: 'Start Building',
  subtitle: 'You want to practice Zero-Vector Design yourself. Here is how to begin.',

  catchphrase: 'Fall in love with the problem, not the solution.',

  intro: [
    'Zero-Vector Design is not something you learn from a certification or a weekend workshop. It is something you learn by building real things for real people. The discipline emerges from practice, not theory.',
    'The single most important thing a Zero-Vector practitioner does is fall in love with the problem, not the solution. Before you write a line of code, before you prompt an agent, before you touch any tool, understand the problem. Document it. Challenge it. Talk to the people who have it. This is what separates intentional creation from vibe coding.',
    'If you are a designer who has ever been frustrated by the gap between your vision and what got built, this is for you. If you are an engineer who has ever wished the designer could just show you what they mean, this is for you. If you are anyone who makes things for people, this is for you.',
  ],

  getting_started: {
    title: 'Getting Started',
    steps: [
      {
        number: '01',
        title: 'Pick a real project',
        description: 'Not a tutorial. Not a demo. A real thing that real people will use. The discipline only forms under real constraints.',
        detail: 'Find something you personally care about: a tool you wish existed, a workflow that frustrates you, a community that needs something. The project should be small enough to ship in weeks, not months, but real enough that someone besides you will use it. Side projects are perfect. Client work is perfect. Tutorials are not.',
      },
      {
        number: '02',
        title: 'Assemble your crew',
        description: 'Set up your AI agents with clear roles. Not one agent doing everything. Specialized crew members with distinct responsibilities.',
        detail: 'Use Claude Code with CLAUDE.md instruction files to give each agent a distinct personality, domain, and set of guardrails. One agent for backend. One for frontend. One for research. The Investiture scaffold gives you the starting architecture. Clone it and customize the agent roles for your project.',
      },
      {
        number: '03',
        title: 'Start with research, not code',
        description: 'Do not skip to building. The whole pipeline matters. Start with the problem, not the solution.',
        detail: 'Use your AI agents to research the problem space. Document your assumptions. Talk to potential users. Even just five conversations changes everything. Write a problem brief, not a product spec. Let the agents help you explore competitors, adjacent solutions, and the landscape. This is the foundation everything else builds on.',
      },
      {
        number: '04',
        title: 'Build the real thing',
        description: 'No mockups. No prototypes. Build the actual product from day one. Let the agents handle the implementation while you focus on the decisions.',
        detail: 'Start with the Investiture starter framework. Let Claude Code read the architecture. Focus your energy on the decisions: what to build, why, and for whom. The agents handle the how. Iterate fast: build, look at it, adjust, build again. The taste is yours. The velocity is the agents.',
      },
      {
        number: '05',
        title: 'Ship and learn',
        description: 'Get it in front of people. The feedback loop is everything. Iterate on the real thing, not on a picture of it.',
        detail: 'Deploy early. Netlify, Vercel, whatever gets it live. Share the URL. Watch people use it. The feedback you get on a real product is infinitely more valuable than feedback on a mockup. Then iterate. Ship again. The loop between building and learning is where craft develops.',
      },
    ],
  },

  reading_list: {
    title: 'The Reading List',
    subtitle: 'Books that shape the Zero-Vector mindset. These are not design books. They are thinking books.',
    books: [
      { title: 'The Lean Startup', author: 'Eric Ries', description: 'Build-measure-learn. The original loop. Still the best framework for shipping and iterating.', url: 'https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898' },
      { title: 'Blue Ocean Strategy', author: 'W. Chan Kim & Renee Mauborgne', description: 'Stop competing in red oceans. Find the space where nobody is looking. This is how you frame problems worth solving.', url: 'https://www.amazon.com/Blue-Ocean-Strategy-Expanded-Uncontested/dp/1625274491' },
      { title: 'Thinking in Systems', author: 'Donella Meadows', description: 'Feedback loops, leverage points, system behavior. If you do not understand systems, you cannot design with agents.', url: 'https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557' },
      { title: 'The Design of Everyday Things', author: 'Don Norman', description: 'Affordances, signifiers, mapping. The foundation of user-centered thinking. Always relevant.', url: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654' },
      { title: 'Save the Cat!', author: 'Blake Snyder', description: 'A screenwriting book. Why? Because the arc of building a product is the arc of telling a story. Narrative structure applies.', url: 'https://www.amazon.com/Save-Cat-Last-Screenwriting-Youll/dp/1932907009' },
      { title: 'Out of the Crisis', author: 'W. Edwards Deming', description: 'Quality is not about inspection. It is about building systems where quality is inevitable. The original systems auteur.', url: 'https://www.amazon.com/Out-Crisis-W-Edwards-Deming/dp/0262541157' },
    ],
  },

  coaching: {
    title: 'Coaching',
    description: 'One-on-one or small group coaching for practitioners who want to adopt Zero-Vector Design. Not a lecture. A working session where we build together.',
    cta: 'Inquire about coaching',
    link: 'mailto:hello@helloerikaflowers.com',
  },

  resources: {
    title: 'Resources',
    items: [
      { title: 'The 20 Rules for AI-First Design', url: 'https://eflowers.substack.com/p/the-20-rules-for-ai-first-design', type: 'article' },
      { title: 'Across the Designer-Verse', url: 'https://eflowers.substack.com/p/across-the-designer-verse', type: 'article' },
      { title: 'Out of the Crisis: Convergent Evolution and AI-First Design', url: 'https://eflowers.substack.com/p/out-of-the-crisis', type: 'article' },
      { title: 'Build Your First App with AI Agents (Live)', url: 'https://helloerikaflowers.com/media', type: 'video' },
    ],
  },

  community: {
    title: 'Join the Movement',
    subtitle: 'Zero-Vector is not a pamphlet you read once. It is a community of practitioners who build, share, and teach.',
    channels: [
      {
        title: 'Subscribe on Substack',
        description: 'New writing on design, AI, building things, and the ongoing evolution of Zero-Vector practice.',
        cta: 'Subscribe',
        url: 'https://eflowers.substack.com',
      },
      {
        title: 'Contribute on GitHub',
        description: 'The Zero-Vector website is open source. Submit pull requests, suggest content, improve the curriculum.',
        cta: 'View the repo',
        url: 'https://github.com/erikaflowers/zerovector',
      },
      {
        title: 'Watch and Listen',
        description: 'Live streams, podcast episodes, and recorded sessions on building with AI agents.',
        cta: 'Browse media',
        url: '/media',
      },
    ],
  },
};

export default builders;
