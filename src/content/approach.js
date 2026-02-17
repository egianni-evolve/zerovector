// Approach Page — Content
// Part of the Zero-Vector content layer. See en.js for the combined export.

const approach = {
  eyebrow: 'The Approach',
  title: 'How It Works',
  subtitle: 'The practical application of the philosophy. Every phase of creating something, from the seed of an idea to shipping it.',

  intro: [
    'This is where philosophy meets practice. Each phase of the concept-to-customer arc has two sides: what the activity actually is, timeless, tool-agnostic, true regardless of era, and how Zero-Vector approaches it with AI agents as crew.',
    'You do not have to use every phase. You do not have to follow them in order. But understanding what each one is and why it matters gives you the vocabulary to make intentional decisions about where to invest your time.',
  ],

  phases: [
    {
      id: 'problem-framing',
      name: 'Problem Framing',
      number: '01',
      agnostic: [
        'Before you research a market, before you talk to customers, before you sketch a single idea, you need to articulate what problem you are trying to solve. This is the seed. Every great product, every great company, every great creative work started with someone saying: this thing is broken. This could be better. This should exist.',
        'Problem framing is the discipline of sitting with the question before jumping to answers. What is the actual pain? Who feels it? How do they cope with it today? What would their world look like if it were solved? Most failed products did not fail because the solution was bad. They failed because they solved the wrong problem.',
      ],
      zeroVector: [
        'Zero-Vector starts here. Fall in love with the problem, not the solution. Use AI agents to explore the problem space: document your assumptions, challenge them, research adjacent problems, map the landscape of existing solutions. Write a problem brief, not a product spec, and let the agents pressure-test it.',
        'The temptation with AI is to skip straight to building. That is vibe coding. Zero-Vector resists this. The first thing you build is understanding.',
      ],
    },
    {
      id: 'research-market',
      name: 'Market Research',
      number: '02',
      agnostic: [
        'Market research means understanding what is already out there. Who are the competitors? What are they charging? Who is buying? What do the reviews say? Where are the gaps? This is not about slide decks and analyst reports. It is about developing an honest picture of the landscape your product will enter.',
        'Good market research tells you whether the problem you identified is one that other people are also trying to solve, what their solutions look like, and where the opportunity lies. Blue ocean or red ocean, you need to know which one you are swimming in.',
      ],
      zeroVector: [
        'AI agents excel at market research. They can scan competitors, synthesize reviews, quantify market size, and identify gaps faster than any human analyst. The Zero-Vector approach is blue ocean analysis at scale: have your agents map the competitive landscape, identify what everyone is doing the same way, and find the space where nobody is looking.',
        'The key insight: market research is not a phase you complete and move on from. With AI agents, it becomes a continuous signal. Your research corpus stays live, queryable, and connected to every decision you make downstream.',
      ],
    },
    {
      id: 'research-customer',
      name: 'Customer Research',
      number: '03',
      agnostic: [
        'Customer research is talking to the people who have the problem. Not surveys with checkboxes. Conversations. What do they do today? Where does it break? What have they tried? What do they wish existed? The goal is empathy, genuine understanding of another person\'s experience, constraints, and desires.',
        'This is the phase most vibe coders skip entirely, and it is why their products are shiny and useless. You cannot build something for people if you have not listened to people. No amount of AI can replace the insight that comes from hearing someone describe their frustration in their own words.',
      ],
      zeroVector: [
        'Zero-Vector does not replace customer research. It amplifies it. Record your interviews and have AI agents transcribe, tag, and index them into a queryable research corpus. Every insight becomes searchable. Every pattern becomes visible. Six months of interviews become a knowledge base you can interrogate in real-time.',
        'Instead of waiting two weeks for your research team to synthesize findings, synthesis happens during the interview. You ask the participant a question, and by the time they answer, your agents have already connected it to three other participants who said something similar.',
      ],
    },
    {
      id: 'jtbd',
      name: 'Jobs to Be Done',
      number: '04',
      agnostic: [
        'Jobs to Be Done theory says that people do not buy products. They hire them to do a job. Nobody wants a quarter-inch drill bit. They want a quarter-inch hole. Nobody wants a hole. They want to hang a picture. Nobody wants to hang a picture. They want their home to feel like theirs.',
        'JTBD is the discipline of understanding the real job behind the surface request. It connects customer research to product decisions by asking: what is the outcome this person is trying to achieve, and what is preventing them from achieving it? The answers define what you should build, and equally important, what you should not.',
      ],
      zeroVector: [
        'AI agents are extraordinarily good at pattern recognition across large bodies of qualitative data. Feed your research corpus into an agent trained on JTBD frameworks and it will surface job statements you might have missed. It will find connections between seemingly unrelated customer frustrations.',
        'The Zero-Vector approach: let the agents extract the patterns, then you validate and refine. Your judgment decides which jobs matter most. The agents make sure you do not miss the signal in the noise.',
      ],
    },
    {
      id: 'ideation',
      name: 'Ideation',
      number: '05',
      agnostic: [
        'Ideation is the generation and exploration of possible solutions. Brainstorming, sketching, mind-mapping, "what if" exercises. The goal is divergent thinking, casting the widest net possible before converging on a direction. The more ideas you generate, the better your odds of finding the right one.',
        'Good ideation requires psychological safety, structured exploration, and the discipline to separate generation from evaluation. Most brainstorming fails because people evaluate ideas while generating them. The loudest voice wins. The most creative idea dies in the first five minutes.',
      ],
      zeroVector: [
        'AI agents are ideation partners that never tire, never judge prematurely, and have no ego attached to their suggestions. They can generate fifty variations of an idea in seconds, challenge your assumptions with evidence from your research, and push you into solution spaces you would not have explored alone.',
        'The Zero-Vector approach: structured ideation sessions where you and your agents alternate between diverging and converging. Use the agents to expand the space, then apply your judgment to narrow it. The result is better ideas, faster, without the groupthink that kills innovation in traditional brainstorming.',
      ],
    },
    {
      id: 'prototyping',
      name: 'Prototyping',
      number: '06',
      agnostic: [
        'Prototyping is making a version of the thing so you can test it. In traditional product development, this means mockups, wireframes, clickable prototypes, representations of the product that simulate the experience without actually being the product. The purpose is to learn cheaply before committing to expensive build.',
        'The problem with traditional prototypes is that they lie. A Figma prototype shows you what something looks like, not what it does. Real performance, real data, real edge cases, none of that exists in a mockup. You are testing a picture and calling it validation.',
      ],
      zeroVector: [
        'In Zero-Vector, the prototype is the product. When AI agents can help you build working code from the start, the expensive build is no longer expensive. You skip the picture and go straight to the thing itself. Working code. Real data. Real interactions.',
        'This does not mean you ship your first attempt. It means your first attempt is real. You iterate on an actual product, not a simulation of one. The feedback you get is about the thing itself, not about a representation of it. The learning is faster and more honest.',
      ],
    },
    {
      id: 'validation',
      name: 'Validation',
      number: '07',
      agnostic: [
        'Validation is putting your product in front of real people and learning whether it actually solves the problem you set out to solve. Usability testing, beta programs, A/B tests, analytics, interviews. The goal is to close the loop between what you built and what people need.',
        'Good validation is humble. It assumes you got things wrong and seeks to find out where. It is not a demo. It is not showing people your work and asking "isn\'t this great?" It is watching people use the thing and seeing where they struggle, where they delight, and where they abandon.',
      ],
      zeroVector: [
        'Because you built the real thing, your validation is real. People are testing actual software, not a prototype. The feedback is about performance, reliability, delight, and friction, not about whether the mockup looks right.',
        'AI agents can help you synthesize validation data at scale. Hundreds of feedback sessions indexed, tagged, and analyzed for patterns. The insights connect back to your original problem framing and JTBD work, closing the loop across the entire arc.',
      ],
    },
    {
      id: 'build-ship',
      name: 'Build + Ship',
      number: '08',
      agnostic: [
        'Shipping is getting the product into the hands of the people who need it. Deployment, launch, distribution, marketing, support. It is the moment where everything you researched, designed, and built meets reality. Most products die here, not because the product is bad, but because the ship was botched.',
        'Shipping is not a single event. It is a continuous practice. Deploy, learn, iterate, deploy again. The feedback loop between shipping and learning is where products get great. The ones that ship once and walk away are the ones that stagnate.',
      ],
      zeroVector: [
        'In Zero-Vector, there is no handoff to engineering because you built it. There is no "dev complete" milestone because development and design were the same act. You ship what you envisioned because you are the one who built it.',
        'AI agents handle the deployment pipeline, the CI/CD, the infrastructure. You focus on the experience. The gap between vision and artifact is zero. And after you ship, the agents help you monitor, analyze, and iterate. The loop continues.',
      ],
    },
  ],
};

export default approach;
