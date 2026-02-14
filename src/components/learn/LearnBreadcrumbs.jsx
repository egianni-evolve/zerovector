import { Link, useLocation } from 'react-router-dom';

function LearnBreadcrumbs({ levelSlug, lessonSlug, levels }) {
  const { pathname } = useLocation();
  const isCurriculum = pathname.includes('/curriculum');
  const isResources = pathname.includes('/resources');

  const level = levels.find(l => l.slug === levelSlug);
  const lesson = level?.lessons.find(l => l.slug === lessonSlug);

  // Hub page — no breadcrumbs
  if (!isCurriculum && !isResources) return null;

  return (
    <nav className="ovl-breadcrumbs" aria-label="Breadcrumb">
      <Link to="/open/learn" className="ovl-crumb">Open Vector</Link>
      {isCurriculum && (
        <>
          <span className="ovl-crumb-sep">/</span>
          {level ? (
            <Link to="/open/learn/curriculum" className="ovl-crumb">Curriculum</Link>
          ) : (
            <span className="ovl-crumb ovl-crumb--current">Curriculum</span>
          )}
        </>
      )}
      {isResources && (
        <>
          <span className="ovl-crumb-sep">/</span>
          <span className="ovl-crumb ovl-crumb--current">Go Further</span>
        </>
      )}
      {level && (
        <>
          <span className="ovl-crumb-sep">/</span>
          {lesson ? (
            <Link to={`/open/learn/curriculum/${level.slug}`} className="ovl-crumb">
              {level.number} {level.title}
            </Link>
          ) : (
            <span className="ovl-crumb ovl-crumb--current">
              {level.number} {level.title}
            </span>
          )}
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
