// Level 01: Foundation
// Systems thinking and architecture before code.

import systemsThinking from './systems-thinking';
import architecture from './architecture';
import nounsAndVerbs from './nouns-and-verbs';
import planning from './planning';
import dataModeling from './data-modeling';
import informationArchitecture from './information-architecture';

export default {
  slug: '01-foundation',
  number: '01',
  title: 'Foundation',
  subtitle: 'Think before you build. Then build while you think.',
  status: 'available',
  desc: 'Systems thinking. Architecture before code. The nouns-and-verbs exercise. Planning methodology. This is what separates Zero-Vector from vibe coding.',
  lessons: [
    systemsThinking,
    architecture,
    nounsAndVerbs,
    planning,
    dataModeling,
    informationArchitecture,
  ],
};
