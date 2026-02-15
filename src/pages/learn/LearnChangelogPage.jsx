import useSEO from '../../hooks/useSEO';
import changelog from '../../content/learn/changelog';

function LearnChangelogPage() {
  useSEO({
    title: 'Changelog — The Open Vector',
    description: 'What changed and when. A record of every update to the Open Vector platform.',
    path: '/open/learn/changelog',
  });

  return (
    <div className="ovl-changelog">
      <header className="ovl-changelog-header">
        <h1 className="ovl-changelog-title">Changelog</h1>
        <p className="ovl-changelog-subtitle">
          A running record of what has changed. Newest first.
        </p>
      </header>

      <div className="ovl-changelog-entries">
        {changelog.map((entry, i) => (
          <div key={i} className="ovl-changelog-entry">
            <div className="ovl-changelog-date">{entry.date}</div>
            <h2 className="ovl-changelog-entry-title">{entry.title}</h2>
            <ul className="ovl-changelog-items">
              {entry.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearnChangelogPage;
