import { Link, useParams, useOutletContext } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import LessonBadge from '../../components/learn/LessonBadge';
import RightRail from '../../components/learn/RightRail';
import useSEO from '../../hooks/useSEO';

function LevelPage() {
  const { levelSlug } = useParams();
  const { learn } = useOutletContext();
  const { isComplete, getLevelProgress, enabled } = useProgress();

  const level = learn.levels.find(l => l.slug === levelSlug);

  useSEO({
    title: level ? `${level.number} ${level.title} — Open Vector` : 'Level Not Found',
    description: level?.desc,
    path: `/open/learn/curriculum/${levelSlug}`,
  });

  if (!level) {
    return (
      <div className="ovl-not-found">
        <h1>Level not found</h1>
        <p>The level you are looking for does not exist.</p>
        <Link to="/open/learn/curriculum">Back to all levels</Link>
      </div>
    );
  }

  const { done, total, percent } = getLevelProgress(levelSlug, level.lessons);

  // Find adjacent levels for rail navigation
  const levelIndex = learn.levels.findIndex(l => l.slug === levelSlug);
  const prevLevel = levelIndex > 0 ? learn.levels[levelIndex - 1] : null;
  const nextLevel = levelIndex < learn.levels.length - 1 ? learn.levels[levelIndex + 1] : null;

  return (
    <div className="ovl-level-page">
      <header className="ovl-level-header">
        <div className="ovl-level-header-number">{level.number}</div>
        <h1 className="ovl-level-header-title">{level.title}</h1>
        <p className="ovl-level-header-subtitle">{level.subtitle}</p>
        <p className="ovl-level-header-desc">{level.desc}</p>
        {enabled && (
          <div className="ovl-level-progress">
            <div className="ovl-level-progress-bar">
              <div className="ovl-level-progress-fill" style={{ width: `${percent}%` }} />
            </div>
            <span className="ovl-level-progress-label">{done}/{total} lessons complete</span>
          </div>
        )}
      </header>
      <div className="ovl-with-rail">
        <div className="ovl-main">
          <div className="ovl-level-lesson-list">
            <div className="ovl-level-lesson-list-label">Lessons</div>
            {level.lessons.map((lesson, i) => {
              const completed = enabled && isComplete(levelSlug, lesson.slug);
              return (
                <Link
                  key={lesson.slug}
                  to={`/open/learn/curriculum/${level.slug}/${lesson.slug}`}
                  className={`ovl-level-lesson-item ${completed ? 'ovl-level-lesson-item--done' : ''}`}
                >
                  <div className="ovl-level-lesson-index">
                    {completed ? <span className="ovl-level-lesson-check">✓</span> : String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="ovl-level-lesson-info">
                    <div className="ovl-level-lesson-title">{lesson.title}</div>
                    <div className="ovl-level-lesson-subtitle">{lesson.subtitle}</div>
                  </div>
                  <div className="ovl-level-lesson-meta">
                    <LessonBadge badge={lesson.badge} />
                    {lesson.duration && <span className="ovl-level-lesson-duration">{lesson.duration}</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <RightRail>
          {(prevLevel || nextLevel) && (
            <div className="ovl-rail-section">
              <div className="ovl-rail-section-header">Other Levels</div>
              <div className="ovl-rail-levels">
                {prevLevel && (
                  <Link to={`/open/learn/curriculum/${prevLevel.slug}`} className="ovl-rail-level-link">
                    <span className="ovl-rail-level-num">{prevLevel.number}</span>
                    <span className="ovl-rail-level-title">{prevLevel.title}</span>
                  </Link>
                )}
                {nextLevel && (
                  <Link to={`/open/learn/curriculum/${nextLevel.slug}`} className="ovl-rail-level-link">
                    <span className="ovl-rail-level-num">{nextLevel.number}</span>
                    <span className="ovl-rail-level-title">{nextLevel.title}</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </RightRail>
      </div>
    </div>
  );
}

export default LevelPage;
