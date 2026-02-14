// Level 04: Orchestration
// Multiple agents. The crew model. One mind, many hands.

import claudeMd from './claude-md';
import multiAgent from './multi-agent';
import stagedPrompts from './staged-prompts';
import orchestration from './orchestration';
import qualityGates from './quality-gates';
import theCrewModel from './the-crew-model';

export default {
  slug: '04-orchestration',
  number: '04',
  title: 'Orchestration',
  subtitle: 'One mind, many hands.',
  status: 'available',
  desc: 'Multiple agents. CLAUDE.md instruction files. The crew model. Building systems, not features.',
  lessons: [
    claudeMd,
    multiAgent,
    stagedPrompts,
    orchestration,
    qualityGates,
    theCrewModel,
  ],
};
