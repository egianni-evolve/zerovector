// Level 03: The Pipeline
// Every phase of concept-to-customer, collapsed.

import research from './research';
import synthesis from './synthesis';
import jtbd from './jtbd';
import ideation from './ideation';
import prototyping from './prototyping';
import validation from './validation';
import shipping from './shipping';

export default {
  slug: '03-the-pipeline',
  number: '03',
  title: 'The Pipeline',
  subtitle: 'Every phase. Every handoff. Collapsed.',
  status: 'available',
  desc: 'Applying Zero-Vector across the entire concept-to-customer arc. One project, end to end. Not theory. Practice.',
  lessons: [
    research,
    synthesis,
    jtbd,
    ideation,
    prototyping,
    validation,
    shipping,
  ],
};
