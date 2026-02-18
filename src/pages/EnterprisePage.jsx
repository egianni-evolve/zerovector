import { Link } from 'react-router-dom';
import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Animate from '../components/Animate';
import NotifyForm from '../components/NotifyForm';
import { ArrowIcon } from '../components/icons';
import useSEO from '../hooks/useSEO';
import en from '../content/en';

const { enterprise } = en;

function EnterprisePage() {
  useSEO({
    title: 'For Enterprise — Zero-Vector Design at Scale',
    description: 'Zero-Vector Design for teams, departments, and organizations. Scaling agent-first workflows, governance, and transformation metrics. Coming soon.',
    path: '/for-enterprise',
    ogImage: 'https://zerovector.design/og/enterprise.png',
  });

  return (
    <div className="zv-page zv-info-page">
      <VectorField />
      <Nav />

      <PageHero eyebrow={enterprise.eyebrow} title={enterprise.title} subtitle={enterprise.subtitle} />

      {/* Intro */}
      <section className="zv-section">
        <div className="zv-container">
          {enterprise.intro.map((p, i) => (
            <Animate key={i} delay={i}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <div className="zv-enterprise-banner">
              <div className="zv-enterprise-banner-badge">Coming Soon</div>
              <div className="zv-enterprise-banner-text">
                This section is actively being built — with input from enterprise practitioners who are scaling Zero-Vector workflows right now.
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* What's Coming */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{enterprise.coming.title}</h2>
          </Animate>
          <div className="zv-enterprise-preview">
            {enterprise.coming.items.map((item, i) => (
              <Animate key={i}>
                <div className="zv-enterprise-preview-card">
                  <div className="zv-enterprise-preview-number">{item.number}</div>
                  <div className="zv-enterprise-preview-content">
                    <h3 className="zv-enterprise-preview-title">{item.title}</h3>
                    <p className="zv-enterprise-preview-desc">{item.description}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{enterprise.contribute.title}</h2>
            <p className="zv-body-text">{enterprise.contribute.body}</p>
            <p className="zv-body-text" style={{ fontStyle: 'italic', opacity: 0.85 }}>{enterprise.contribute.cta}</p>
          </Animate>
          <Animate delay={1}>
            <div className="zv-enterprise-notify">
              <p className="zv-enterprise-notify-label">{enterprise.contribute.email_label}</p>
              <NotifyForm variant="dark" tag="enterprise" />
            </div>
          </Animate>
          <Animate delay={2}>
            <Link to="/open/learn/contribute" className="zv-cta zv-cta-outline" style={{ marginTop: 24 }}>
              Become a Founding Contributor <ArrowIcon size={14} />
            </Link>
          </Animate>
        </div>
      </section>

      {/* Cross-links */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">Explore Zero-Vector</h2>
          </Animate>
          <div className="zv-enterprise-crosslinks">
            <Animate>
              <Link to="/for-builders" className="zv-enterprise-crosslink">
                <div className="zv-enterprise-crosslink-eyebrow">{enterprise.crosslinks.builders.eyebrow}</div>
                <h3 className="zv-enterprise-crosslink-title">{enterprise.crosslinks.builders.title}</h3>
                <p className="zv-enterprise-crosslink-desc">{enterprise.crosslinks.builders.description}</p>
                <span className="zv-enterprise-crosslink-arrow">&rarr;</span>
              </Link>
            </Animate>
            <Animate delay={1}>
              <Link to="/for-leaders" className="zv-enterprise-crosslink">
                <div className="zv-enterprise-crosslink-eyebrow">{enterprise.crosslinks.leaders.eyebrow}</div>
                <h3 className="zv-enterprise-crosslink-title">{enterprise.crosslinks.leaders.title}</h3>
                <p className="zv-enterprise-crosslink-desc">{enterprise.crosslinks.leaders.description}</p>
                <span className="zv-enterprise-crosslink-arrow">&rarr;</span>
              </Link>
            </Animate>
            <Animate delay={2}>
              <Link to="/open/learn" className="zv-enterprise-crosslink">
                <div className="zv-enterprise-crosslink-eyebrow">{enterprise.crosslinks.learn.eyebrow}</div>
                <h3 className="zv-enterprise-crosslink-title">{enterprise.crosslinks.learn.title}</h3>
                <p className="zv-enterprise-crosslink-desc">{enterprise.crosslinks.learn.description}</p>
                <span className="zv-enterprise-crosslink-arrow">&rarr;</span>
              </Link>
            </Animate>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default EnterprisePage;
