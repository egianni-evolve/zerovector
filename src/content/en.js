// Zero-Vector Design — Content Layer
// Single source of truth. Each page's content lives in its own file.
// This file re-exports the combined object so existing imports work unchanged.
//
// To edit content for a specific page, open the corresponding file:
//   home.js, philosophy.js, approach.js, builders.js, leaders.js,
//   media.js, origin.js, start.js, quiz.js, investiture.js, name.js
//
// Shared content (used by multiple pages):
//   recommended-reading.js — consumed by ManifestoPage

import home from './home';
import philosophy from './philosophy';
import approach from './approach';
import builders from './builders';
import leaders from './leaders';
import media from './media';
import origin from './origin';
import start from './start';
import quiz from './quiz';
import investiture from './investiture';
import name from './name';
import enterprise from './enterprise';
import join from './join';
import arroyo from './arroyo';
import recommendedReading from './recommended-reading';

const en = {
  home,
  philosophy,
  approach,
  builders,
  leaders,
  enterprise,
  join,
  arroyo,
  media,
  origin,
  start,
  quiz,
  investiture,
  name,
  recommendedReading,
};

export default en;
