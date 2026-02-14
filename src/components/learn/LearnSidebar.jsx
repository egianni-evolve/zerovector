import { Link, useLocation } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import LessonBadge from './LessonBadge';
import { topicFilters } from '../../content/learn/resources';

function LearnSidebar({ levels, activeLevelSlug, activeLessonSlug, open, onClose }) {
  const { isComplete, enabled } = useProgress();
  const { pathname } = useLocation();
  const isResources = pathname.includes('/resources');

  return (
    <>
      {open && <div className="ovl-sidebar-backdrop" onClick={onClose} />}
      <aside className={`ovl-sidebar ${open ? 'ovl-sidebar--open' : ''}`}>
        <div className="ovl-sidebar-scroll">
          {isResources ? (
            <div className="ovl-sidebar-resources">
              <div className="ovl-sidebar-section-label">Browse by Topic</div>
              {topicFilters.filter(t => t.key !== 'all').map(topic => (
                <div key={topic.key} className="ovl-sidebar-topic">
                  {topic.label}
                </div>
              ))}
            </div>
          ) : (
            <>
              <Link to="/open/learn/curriculum" className="ovl-sidebar-home" onClick={onClose}>
                All Levels
              </Link>
              {levels.map(level => {
                const isActiveLevel = level.slug === activeLevelSlug;
                return (
                  <div
                    key={level.slug}
                    className={`ovl-sidebar-level ${isActiveLevel ? 'ovl-sidebar-level--active' : ''}`}
                  >
                    <Link
                      to={`/open/learn/curriculum/${level.slug}`}
                      className="ovl-sidebar-level-header"
                      onClick={onClose}
                    >
                      <span className="ovl-sidebar-level-number">{level.number}</span>
                      <span className="ovl-sidebar-level-title">{level.title}</span>
                    </Link>
                    {isActiveLevel && (
                      <div className="ovl-sidebar-lessons">
                        {level.lessons.map(lesson => (
                          <Link
                            key={lesson.slug}
                            to={`/open/learn/curriculum/${level.slug}/${lesson.slug}`}
                            className={`ovl-sidebar-lesson ${lesson.slug === activeLessonSlug ? 'ovl-sidebar-lesson--active' : ''}`}
                            onClick={onClose}
                          >
                            {enabled && isComplete(level.slug, lesson.slug) && (
                              <span className="ovl-sidebar-check">✓</span>
                            )}
                            <span className="ovl-sidebar-lesson-label">{lesson.title}</span>
                            <LessonBadge badge={lesson.badge} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </aside>
    </>
  );
}

export default LearnSidebar;
