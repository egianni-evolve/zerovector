import { Link } from 'react-router-dom';
import en from '../../content/en';

const { learn } = en;

function LearnNav({ sidebarOpen, onToggle }) {
  return (
    <nav className="ovl-nav">
      <div className="ovl-nav-inner">
        <button
          className="ovl-nav-toggle"
          onClick={onToggle}
          aria-label={sidebarOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={sidebarOpen}
        >
          <span className={`ovl-hamburger ${sidebarOpen ? 'ovl-hamburger--open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
        <Link to="/open/learn" className="ovl-nav-brand">{learn.nav.brand}</Link>
        <div className="ovl-nav-badge">{learn.nav.badge}</div>
        <Link to="/open" className="ovl-nav-back">{learn.nav.backLabel}</Link>
      </div>
    </nav>
  );
}

export default LearnNav;
