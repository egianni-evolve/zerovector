import { Link } from 'react-router-dom';

function LearnSidebar({ levels, activeLevelSlug, activeLessonSlug, open, onClose }) {
  return (
    <>
      {open && <div className="ovl-sidebar-backdrop" onClick={onClose} />}
      <aside className={`ovl-sidebar ${open ? 'ovl-sidebar--open' : ''}`}>
        <div className="ovl-sidebar-scroll">
          <Link to="/open/learn" className="ovl-sidebar-home" onClick={onClose}>
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
                  to={`/open/learn/${level.slug}`}
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
                        to={`/open/learn/${level.slug}/${lesson.slug}`}
                        className={`ovl-sidebar-lesson ${lesson.slug === activeLessonSlug ? 'ovl-sidebar-lesson--active' : ''}`}
                        onClick={onClose}
                      >
                        {lesson.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}

export default LearnSidebar;
