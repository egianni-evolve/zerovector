import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SignInButton } from './SignInPrompt';
import LearnSearch from './LearnSearch';
import ThemeSwitcher from './ThemeSwitcher';
import en from '../../content/en';

const { learn } = en;

const networkItems = [
  { to: '/', label: 'Zero Vector' },
  { to: '/investiture', label: 'Investiture' },
];

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeout = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div
      className={`ovl-nav-group ${open ? 'ovl-nav-group--open' : ''}`}
      ref={ref}
      onMouseEnter={() => { clearTimeout(timeout.current); setOpen(true); }}
      onMouseLeave={() => { timeout.current = setTimeout(() => setOpen(false), 150); }}
    >
      <button
        className="ovl-nav-group-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <span className="ovl-nav-group-chevron" aria-hidden="true" />
      </button>
      {open && (
        <div className="ovl-nav-group-panel">
          {items.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className="ovl-nav-group-item"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function LearnNav({ sidebarOpen, onToggle }) {
  const { pathname } = useLocation();
  const isApproach = pathname.includes('/approach') && pathname.includes('/open/learn');
  const isCurriculum = pathname.includes('/curriculum');
  const isResources = pathname.includes('/resources');
  const isChat = pathname.includes('/chat');

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
        <Link to="/open" className="ovl-nav-brand">{learn.nav.brand}</Link>
        <div className="ovl-nav-primary">
          <Link
            to="/open/learn"
            className={`ovl-nav-tab ${pathname === '/open/learn' ? 'ovl-nav-tab--active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/open/learn/curriculum"
            className={`ovl-nav-tab ${isCurriculum ? 'ovl-nav-tab--active' : ''}`}
          >
            Curriculum
          </Link>
          <Link
            to="/open/learn/approach"
            className={`ovl-nav-tab ${isApproach ? 'ovl-nav-tab--active' : ''}`}
          >
            Approach
          </Link>
          <Link
            to="/open/learn/resources"
            className={`ovl-nav-tab ${isResources ? 'ovl-nav-tab--active' : ''}`}
          >
            Go Further
          </Link>
          <Link
            to="/open/learn/chat"
            className={`ovl-nav-tab ${isChat ? 'ovl-nav-tab--active' : ''}`}
          >
            Chat
          </Link>
          <Link
            to="/open/learn/contribute"
            className={`ovl-nav-tab ${pathname.includes('/contribute') ? 'ovl-nav-tab--active' : ''}`}
          >
            Contribute
          </Link>
          <Link
            to="/open/learn/about"
            className={`ovl-nav-tab ${pathname.includes('/about') ? 'ovl-nav-tab--active' : ''}`}
          >
            About
          </Link>
        </div>
        <div className="ovl-nav-right">
          <LearnSearch />
          <ThemeSwitcher />
          <a
            href="https://ko-fi.com/erikaflowers"
            target="_blank"
            rel="noopener noreferrer"
            className="ovl-nav-support"
            title="Support the Open Vector"
          >
            <span className="ovl-nav-support-heart">&hearts;</span>
          </a>
          <NavDropdown label="ZV Network" items={networkItems} />
          <SignInButton />
        </div>
      </div>
    </nav>
  );
}

export default LearnNav;
