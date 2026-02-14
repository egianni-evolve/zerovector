import { Link, useParams, useOutletContext } from 'react-router-dom';
import LessonRenderer from '../../components/learn/LessonRenderer';
import useSEO from '../../hooks/useSEO';

function LessonPage() {
  const { levelSlug, lessonSlug } = useParams();
  const { learn } = useOutletContext();

  const level = learn.levels.find(l => l.slug === levelSlug);
  const lesson = level?.lessons.find(l => l.slug === lessonSlug);

  useSEO({
    title: lesson ? `${lesson.title} — Open Vector` : 'Lesson Not Found',
    description: lesson?.subtitle,
    path: `/open/learn/${levelSlug}/${lessonSlug}`,
  });

  if (!lesson) {
    return (
      <div className="ovl-not-found">
        <h1>Lesson not found</h1>
        <p>The lesson you are looking for does not exist.</p>
        <Link to="/open/learn">Back to all levels</Link>
      </div>
    );
  }

  return (
    <article className="ovl-lesson">
      <header className="ovl-lesson-header">
        <div className="ovl-lesson-meta">
          <span className="ovl-lesson-level">{level.number} {level.title}</span>
          {lesson.duration && <span className="ovl-lesson-duration">{lesson.duration}</span>}
        </div>
        <h1 className="ovl-lesson-title">{lesson.title}</h1>
        <p className="ovl-lesson-subtitle">{lesson.subtitle}</p>
      </header>
      <LessonRenderer sections={lesson.content?.sections} />
    </article>
  );
}

export default LessonPage;
