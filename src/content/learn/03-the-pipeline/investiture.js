export default {
  slug: 'investiture',
  title: 'Investiture \u2014 The Framework',
  subtitle: 'The scaffold that turns your Pipeline work into a structured, AI-ready project.',
  duration: '20 min',
  status: 'available',
  badge: 'new',
  updatedAt: '2026-03-03',
  content: {
    sections: [
      {
        type: 'text',
        heading: 'The Scaffold',
        body: [
          'You have just spent seven lessons walking through the full product development pipeline: research, synthesis, jobs to be done, ideation, prototyping, validation, shipping. That is a lot of thinking. A lot of artifacts. A lot of decisions.',
          'Now what? You open a blank folder and start from scratch?',
          'No. That is what Investiture solves.',
          'Investiture is a project scaffold, a starter architecture that encodes Zero Vector principles into the file structure, the configuration, and the documentation of a new project. When you clone Investiture, you do not get a blank canvas. You get a canvas with the grid already drawn, the palette already mixed, and a note on the easel explaining what you are painting and why.',
          'The name comes from Brandon Sanderson\'s Cosmere novels, where Investiture is the fundamental energy that powers all magic systems. In Zero Vector, Investiture is the fundamental structure that powers all projects. Different projects, different features, but the same underlying architecture making it all work.',
        ],
      },
      {
        type: 'text',
        heading: 'The Blank Canvas Problem',
        body: [
          'Every time you start a new project from scratch, you make hundreds of small decisions: Where do components go? How do I structure the API? What does my folder hierarchy look like? How do I handle environment variables? Where does documentation live?',
          'Most people make these decisions ad hoc. They create folders as needed, name things inconsistently, scatter configuration across multiple files. The project works, technically. But it is held together with implicit knowledge that lives only in the original developer\'s head.',
          'Now multiply that problem by AI agents. An agent reading a project with no consistent structure, no documentation, no architectural reasoning has to guess at conventions. It guesses wrong. You fix it. It guesses wrong again. You spend more time correcting the agent than you would have spent writing the code yourself.',
          'Investiture eliminates that entire class of problem. The structure is explicit. The conventions are documented. The architecture is explained. An AI agent reading an Investiture project knows where things go, why they go there, and what patterns to follow.',
        ],
      },
      {
        type: 'text',
        heading: 'What the Scaffold Gives You',
        body: [
          'When you clone the Investiture scaffold, you get a project that is ready for AI-assisted development from the first commit. Here is what is inside:',
          'Project structure follows a clear separation of concerns. Frontend code, backend code, shared utilities, and configuration each have their own space. No guessing where a new component should live.',
          'CLAUDE.md is already in place. This is the file that tells your AI agents how to behave in this project: the coding conventions, the commit message format, the testing expectations. You learned about CLAUDE.md in Level 04 (or you will). The scaffold includes a working example you can customize.',
          'vector.md is already in place. This is the file from Level 01 that captures your project intent, users, architecture, and constraints. The scaffold includes a template with all the sections pre-structured. You fill in the blanks with the research and planning work you did in this level.',
          'Configuration is pre-wired. Environment variables, deployment settings, linting rules, the basics that every project needs but nobody wants to set up from scratch.',
          'Documentation structure has a home. Architecture decision records, API documentation, and a changelog all have designated locations. Documentation does not get written if there is nowhere obvious to put it.',
        ],
      },
      {
        type: 'callout',
        body: 'The best projects are not the ones with the most features. They are the ones where every file knows why it exists. Investiture gives you that from the first commit. Your AI agents read the structure and immediately understand the conventions. Your future self reads the documentation and immediately remembers the reasoning.',
      },
      {
        type: 'text',
        heading: 'Everything Feeds In',
        body: [
          'Look at what you produced during this level:',
          'In Research, you gathered information about the problem space, the users, the competitive landscape. That research feeds into vector.md\'s Project Overview and Users sections.',
          'In Synthesis, you distilled raw research into patterns and insights. Those patterns become the architectural reasoning in vector.md.',
          'In Jobs to Be Done, you identified the core tasks your product enables. Those JTBD become the backbone of your feature set and inform the data model.',
          'In Ideation, you explored solution spaces. The winning ideas become the architecture decisions documented in vector.md.',
          'In Prototyping and Validation, you tested assumptions. The results refine your constraints and current state.',
          'In Shipping, you learned deployment. Investiture pre-configures the deployment pipeline.',
          'Investiture is not a separate thing you learn after the Pipeline. It is the container for everything the Pipeline produced. All that thinking, all those artifacts, all those decisions: they have a home now.',
        ],
      },
      {
        type: 'code',
        body: 'investiture/\n\u251C\u2500\u2500 README.md                 # Project overview, setup instructions\n\u251C\u2500\u2500 CLAUDE.md                 # AI agent behavior configuration\n\u251C\u2500\u2500 vector.md                 # Project intent, users, architecture\n\u251C\u2500\u2500 .env.example              # Environment variable template\n\u2502\n\u251C\u2500\u2500 src/\n\u2502   \u251C\u2500\u2500 app/                  # Application entry, routing, layout\n\u2502   \u251C\u2500\u2500 components/           # Reusable UI components\n\u2502   \u2502   \u251C\u2500\u2500 ui/               # Generic (buttons, inputs, modals)\n\u2502   \u2502   \u2514\u2500\u2500 features/         # Feature-specific components\n\u2502   \u251C\u2500\u2500 services/             # API calls, external integrations\n\u2502   \u251C\u2500\u2500 hooks/                # Custom React hooks\n\u2502   \u251C\u2500\u2500 utils/                # Pure utility functions\n\u2502   \u2514\u2500\u2500 styles/               # Global styles, CSS variables\n\u2502\n\u251C\u2500\u2500 api/                      # Backend (FastAPI or equivalent)\n\u2502   \u251C\u2500\u2500 routers/              # Route handlers, grouped by domain\n\u2502   \u251C\u2500\u2500 services/             # Business logic\n\u2502   \u251C\u2500\u2500 models/               # Data models, validation\n\u2502   \u2514\u2500\u2500 migrations/           # Database schema changes\n\u2502\n\u251C\u2500\u2500 docs/\n\u2502   \u251C\u2500\u2500 architecture/         # ADRs (Architecture Decision Records)\n\u2502   \u251C\u2500\u2500 api/                  # API endpoint documentation\n\u2502   \u2514\u2500\u2500 CHANGELOG.md          # What changed and when\n\u2502\n\u2514\u2500\u2500 scripts/                  # Utility scripts, setup helpers',
      },
      {
        type: 'exercise',
        title: 'Clone and Explore',
        body: 'Clone the Investiture repository: git clone https://github.com/zerovectordesign/investiture.git — then cd investiture and open it in your editor. Spend a few minutes browsing the file tree. Notice the organization and how each folder\'s contents match its name. Read CLAUDE.md — what conventions does it establish? What patterns does it enforce? Read vector.md — which sections map to work you did earlier in this level? (Research \u2192 Project Overview. JTBD \u2192 Jobs to Be Done. Architecture decisions \u2192 Architecture.) Look at the docs/ folder and open an Architecture Decision Record if one exists. Notice the format: context, decision, consequences. Now ask yourself: if an AI agent cloned this project and read these files, how much would it understand before writing a single line of code? That is the power of a structured scaffold.',
      },
      {
        type: 'resources',
        heading: 'Links',
        items: [
          { title: 'Investiture Scaffold Repository', url: 'https://github.com/zerovectordesign/investiture', note: 'Clone it, explore it, make it yours.' },
          { title: 'Investiture Framework Page', url: 'https://zerovector.design/investiture', note: 'The Investiture deep dive on Zero Vector.' },
          { title: 'vector.md Lesson (Level 01)', url: 'https://zerovector.design/open/learn/01-foundation/vector-md', note: 'The artifact that gives agents project context.' },
        ],
      },
    ],
  },
  knowledgeCheck: [
    { question: 'What does the Investiture scaffold give you that a blank project does not?', hint: 'Think about structure, documentation, and what an AI agent needs to be effective from the first commit.' },
    { question: 'How does your research from the Pipeline phases connect to the scaffold?', hint: 'Map each Pipeline phase to a section of vector.md or a folder in the scaffold.' },
  ],
};
