// Level 00: Orientation
// The foundational computer literacy that got skipped.

import terminal from './terminal';
import fileSystems from './file-systems';
import gitBasics from './git-basics';
import repos from './repos';
import deployment from './deployment';
import dns from './dns';

export default {
  slug: '00-orientation',
  number: '00',
  title: 'Orientation',
  subtitle: 'What is this machine, actually?',
  status: 'available',
  desc: 'The foundational understanding that got skipped. What is a terminal. What is a file system. What is Git. The early computer stuff that nobody teaches designers because everyone assumes someone else already did.',
  lessons: [
    terminal,
    fileSystems,
    gitBasics,
    repos,
    deployment,
    dns,
  ],
};
