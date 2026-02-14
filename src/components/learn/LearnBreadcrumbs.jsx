import { Link } from 'react-router-dom';

function LearnBreadcrumbs({ levelSlug, lessonSlug, levels }) {
  const level = levels.find(l => l.slug === levelSlug);
  const lesson = level?.lessons.find(l => l.slug === lessonSlug);

  return (
    <nav className="ovl-breadcrumbs" aria-label="Breadcrumb">
      <Link to="/open/learn" className="ovl-crumb">Open Vector</Link>
      {level && (
        <>
          <span className="ovl-crumb-sep">/</span>
          <Link to={`/open/learn/${level.slug}`} className="ovl-crumb">
            {level.number} {level.title}
          </Link>
        </>
      )}
      {lesson && (
        <>
          <span className="ovl-crumb-sep">/</span>
          <span className="ovl-crumb ovl-crumb--current">{lesson.title}</span>
        </>
      )}
    </nav>
  );
}

export default LearnBreadcrumbs;
