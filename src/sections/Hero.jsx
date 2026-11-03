import { Link } from 'react-router-dom';
import { profile, heroStats } from '../data/content.js';
import { ArrowRight } from '../components/Icons.jsx';
import ProjectCover from '../components/ProjectCover.jsx';
import { useParallax } from '../lib/hooks.js';

const heroArt = { slug: 'hero', cover: { variant: 'graph', bg: '#1B1A17', fg: '#EDE8DF', accent: '#E0673B' } };

export default function Hero() {
  const visualRef = useParallax(0.06);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__intro">
          <p className="eyebrow hero__in" style={{ '--i': 0 }}>
            <span className="status-dot" aria-hidden="true" />
            {profile.name} — {profile.title}
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="line"><span style={{ '--i': 1 }}>Engineering systems</span></span>
            <span className="line"><span style={{ '--i': 2 }}>that make a <em>difference.</em></span></span>
          </h1>

          <p className="hero__lead hero__in" style={{ '--i': 3 }}>
            I’m a Senior Software Engineer with 7+ years of experience designing scalable backend systems,
            distributed data pipelines and AI-powered tooling — turning complex, costly systems into fast,
            reliable and efficient ones.
          </p>

          <div className="hero__ctas hero__in" style={{ '--i': 4 }}>
            <Link to="/#work" className="btn btn--primary">
              Explore My Work <ArrowRight />
            </Link>
            <Link to="/#contact" className="btn btn--ghost">
              Let’s Talk
            </Link>
          </div>
        </div>

        <figure className="hero__visual hero__in" style={{ '--i': 2 }} ref={visualRef}>
          <div className="hero__visual-frame">
            {profile.portrait ? (
              <img src={profile.portrait} alt={`Portrait of ${profile.name}`} width="640" height="800" fetchpriority="high" />
            ) : (
              <>
                <ProjectCover project={heroArt} className="parallax-inner" />
                <span className="hero__monogram" aria-hidden="true">RN</span>
              </>
            )}
          </div>
          <figcaption>
            <span className="status-dot" aria-hidden="true" />
            Currently — {profile.currently}
          </figcaption>
        </figure>
      </div>

      <div className="container">
        <dl className="hero__meta hero__in" style={{ '--i': 5 }}>
          <div>
            <dt>Discipline</dt>
            <dd>{profile.discipline}</dd>
          </div>
          <div>
            <dt>Experience</dt>
            <dd>{profile.experience}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Domains</dt>
            <dd>Fintech · Healthcare · Location</dd>
          </div>
        </dl>

        <ul className="hero__stats" aria-label="Highlights">
          {heroStats.map((s, i) => (
            <li key={s.label} className="hero__in" style={{ '--i': 6 + i }}>
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
