import { Link, useOutletContext } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';

function LearnIndexPage() {
  const { learn } = useOutletContext();

  useSEO({
    title: 'Learn — The Open Vector',
    description: 'The Open Vector curriculum. Six levels from orientation to auteur. Free. Always free.',
    path: '/open/learn',
  });

  return (
    <div className="ovl-index">
      <header className="ovl-index-header">
        <h1 className="ovl-index-title">{learn.index.title}</h1>
        <p className="ovl-index-subtitle">{learn.index.subtitle}</p>
        <p className="ovl-index-intro">{learn.index.intro}</p>
      </header>
      <div className="ovl-index-grid">
        {learn.levels.map(level => (
          <Link
            key={level.slug}
            to={`/open/learn/${level.slug}`}
            className="ovl-level-card"
          >
            <div className="ovl-level-card-number">{level.number}</div>
            <div className="ovl-level-card-body">
              <h2 className="ovl-level-card-title">{level.title}</h2>
              <p className="ovl-level-card-subtitle">{level.subtitle}</p>
              <div className="ovl-level-card-meta">
                <span className="ovl-level-card-count">{level.lessons.length} lessons</span>
                <span className="ovl-level-card-status">{level.status === 'coming' ? 'Coming soon' : 'Available'}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LearnIndexPage;
