import { Link, useParams, useOutletContext } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';

function LevelPage() {
  const { levelSlug } = useParams();
  const { learn } = useOutletContext();

  const level = learn.levels.find(l => l.slug === levelSlug);

  useSEO({
    title: level ? `${level.number} ${level.title} — Open Vector` : 'Level Not Found',
    description: level?.desc,
    path: `/open/learn/${levelSlug}`,
  });

  if (!level) {
    return (
      <div className="ovl-not-found">
        <h1>Level not found</h1>
        <p>The level you are looking for does not exist.</p>
        <Link to="/open/learn">Back to all levels</Link>
      </div>
    );
  }

  return (
    <div className="ovl-level-page">
      <header className="ovl-level-header">
        <div className="ovl-level-header-number">{level.number}</div>
        <h1 className="ovl-level-header-title">{level.title}</h1>
        <p className="ovl-level-header-subtitle">{level.subtitle}</p>
        <p className="ovl-level-header-desc">{level.desc}</p>
      </header>
      <div className="ovl-level-lesson-list">
        <div className="ovl-level-lesson-list-label">Lessons</div>
        {level.lessons.map((lesson, i) => (
          <Link
            key={lesson.slug}
            to={`/open/learn/${level.slug}/${lesson.slug}`}
            className="ovl-level-lesson-item"
          >
            <div className="ovl-level-lesson-index">{String(i + 1).padStart(2, '0')}</div>
            <div className="ovl-level-lesson-info">
              <div className="ovl-level-lesson-title">{lesson.title}</div>
              <div className="ovl-level-lesson-subtitle">{lesson.subtitle}</div>
            </div>
            <div className="ovl-level-lesson-meta">
              {lesson.duration && <span className="ovl-level-lesson-duration">{lesson.duration}</span>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LevelPage;
