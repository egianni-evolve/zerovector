import { useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import { hero, declaration, timeline, pipeline, markThree, closing } from '../content/manifesto';

function Animate({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`zv-animate ${isVisible ? 'zv-visible' : ''} ${delay ? `zv-animate-delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}

function ManifestoPage() {
  useEffect(() => {
    document.title = 'Zero-Vector Design';
  }, []);

  return (
    <div className="zv-manifesto">
      <VectorField />
      <Nav />

      {/* Drifting Coordinates */}
      <div className="zv-coordinates">{hero.coordinates}</div>

      {/* 001 — Hero */}
      <section className="zv-section zv-hero">
        <div className="zv-container">
          <h1 className="zv-hero-title zv-hero-entrance">{hero.title}</h1>
          <p className="zv-hero-subtitle zv-hero-entrance-delay">{hero.subtitle}</p>
        </div>
      </section>

      {/* 002 — Declaration */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={declaration.number} title={declaration.title} />
          </Animate>
          {declaration.body.map((paragraph, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{paragraph}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* 003 — Timeline */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={timeline.number} title={timeline.title} subtitle={timeline.subtitle} />
          </Animate>
          <div className="zv-timeline">
            {timeline.entries.map((entry, i) => (
              <Animate key={i}>
                <div className="zv-timeline-entry">
                  <div className="zv-timeline-year">{entry.year}</div>
                  <div className="zv-timeline-tool">{entry.tool}</div>
                  <div className="zv-timeline-desc">{entry.description}</div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* 004 — Pipeline */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={pipeline.number} title={pipeline.title} subtitle={pipeline.subtitle} />
          </Animate>
          <div className="zv-pipeline">
            {pipeline.phases.map((phase, i) => (
              <Animate key={i}>
                <div className="zv-pipeline-phase">
                  <div className="zv-pipeline-label">{phase.name}</div>
                  <div>
                    <div className="zv-pipeline-tag zv-pipeline-tag-old">Before</div>
                    <div className="zv-pipeline-old">{phase.oldWay}</div>
                  </div>
                  <div>
                    <div className="zv-pipeline-tag zv-pipeline-tag-new">Zero-Vector</div>
                    <div className="zv-pipeline-new">{phase.newWay}</div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* 005 — Mark III */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={markThree.number} title={markThree.title} />
          </Animate>
          {markThree.body.map((paragraph, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{paragraph}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* 006 — Closing */}
      <section className="zv-section zv-closing">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={closing.number} title={closing.title} />
          </Animate>
          {closing.body.map((paragraph, i) => (
            <Animate key={i} delay={i + 1}>
              <p className="zv-body-text">{paragraph}</p>
            </Animate>
          ))}
          <Animate delay={3}>
            <div className="zv-closing-links">
              {Object.values(closing.links).map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zv-cta zv-cta-outline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ManifestoPage;
