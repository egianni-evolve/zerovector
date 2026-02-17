// Media / Reading Page — Content
// Part of the Zero-Vector content layer. See en.js for the combined export.

const media = {
  eyebrow: 'The Library',
  title: 'Media',
  subtitle: 'Writing, watching, listening, and thinking about Zero-Vector Design.',

  featured: {
    title: 'Start Here',
    items: [
      {
        title: 'Erika Flowers on Substack',
        description: 'New writing on design, AI, building things, and the evolution of Zero-Vector practice. The primary channel for everything new.',
        type: 'substack',
        cta: 'Subscribe',
        url: 'https://eflowers.substack.com',
      },
      {
        title: 'The Podcast',
        description: 'Conversations about design, AI, building, and the people doing the work. Long-form discussions, live builds, and deep dives.',
        type: 'podcast',
        cta: 'Listen',
        url: 'https://helloerikaflowers.com/media',
      },
    ],
  },

  articles: [
    { title: 'A Good Craftsperson Never Blames Their Tools', description: 'On the relationship between the maker and the instrument.', url: 'https://eflowers.substack.com/p/a-good-craftsperson-never-blames-their-tools' },
    { title: 'The 20 Rules for AI-First Design', description: 'The foundational rules for working in a Zero-Vector paradigm.', url: 'https://eflowers.substack.com/p/the-20-rules-for-ai-first-design' },
    { title: 'Across the Designer-Verse: The Reality of AI-First Design', description: 'What it actually looks like to design with AI agents.', url: 'https://eflowers.substack.com/p/across-the-designer-verse' },
    { title: 'Out of the Crisis: Convergent Evolution and AI-First Design', description: 'How the design industry got here and why the convergence is inevitable.', url: 'https://eflowers.substack.com/p/out-of-the-crisis' },
  ],

  books: [
    { title: 'Out of the Crisis', author: 'W. Edwards Deming', description: 'The original systems thinker. Quality is not about inspection.', url: 'https://www.amazon.com/Out-Crisis-W-Edwards-Deming/dp/0262541157' },
    { title: 'The Design of Everyday Things', author: 'Don Norman', description: 'The foundation. Affordances, signifiers, mapping. Always relevant.', url: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654' },
    { title: 'Thinking in Systems', author: 'Donella Meadows', description: 'If you do not understand feedback loops, you cannot design with agents.', url: 'https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557' },
    { title: 'Blue Ocean Strategy', author: 'W. Chan Kim & Renee Mauborgne', description: 'Find the uncontested market space. Mandatory for problem framing.', url: 'https://www.amazon.com/Blue-Ocean-Strategy-Expanded-Uncontested/dp/1625274491' },
    { title: 'Save the Cat!', author: 'Blake Snyder', description: 'Story structure applies to product structure. The arc is the arc.', url: 'https://www.amazon.com/Save-Cat-Last-Screenwriting-Youll/dp/1932907009' },
  ],

  talks: [
    { title: 'Build Your First App with AI Agents', description: 'Live hackathon: building a real application from scratch with AI agents.', url: 'https://helloerikaflowers.com/media', type: 'video' },
    { title: 'The Claude Code Messiah', description: 'Deep dive into the tool that made Zero-Vector Design practical.', url: 'https://helloerikaflowers.com/media', type: 'podcast' },
    { title: 'NN/g -- The Future of Service Design in the Age of AI', description: 'With Nielsen Norman Group, on what AI means for design.', url: 'https://helloerikaflowers.com/media', type: 'podcast' },
  ],

  voices: {
    title: 'People to Follow',
    subtitle: 'Other voices exploring the intersection of design, AI, and building.',
    items: [
      { name: 'Ethan Mollick', description: 'Wharton professor, author of Co-Intelligence. The most rigorous thinker on what AI actually changes about work.', url: 'https://www.oneusefulthing.org/' },
      { name: 'Simon Willison', description: 'Developer, datasette creator. Prolific builder and documenter of what is actually possible with LLMs right now.', url: 'https://simonwillison.net/' },
      { name: 'Maggie Appleton', description: 'Designer and anthropologist. Thinks deeply about how interfaces shape understanding.', url: 'https://maggieappleton.com/' },
      { name: 'Andrej Karpathy', description: 'Former Tesla AI lead, OpenAI founding member. Explains AI from first principles.', url: 'https://karpathy.ai/' },
      { name: 'Swyx', description: 'Builder, writer, community leader. Latent Space podcast covers the AI engineering frontier.', url: 'https://www.latent.space/' },
    ],
  },
};

export default media;
