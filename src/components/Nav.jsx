import { SubstackIcon, LinkedInIcon } from './icons';

function Nav() {
  return (
    <nav className="zv-nav">
      <div className="zv-nav-inner">
        <div className="zv-nav-brand">ZERO VECTOR</div>
        <div className="zv-nav-links">
          <a
            href="https://eflowers.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="zv-nav-icon"
            aria-label="Substack"
          >
            <SubstackIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/helloeflowers/"
            target="_blank"
            rel="noopener noreferrer"
            className="zv-nav-icon"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
