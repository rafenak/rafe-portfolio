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
            <span className="line"><span style={{ '--i': 1 }}>Building reliable</span></span>
            <span className="line"><span style={{ '--i': 2 }}>systems at <em>scale.</em></span></span>
          </h1>

          <p className="hero__lead hero__in" style={{ '--i': 3 }}>
            I’m a Senior Software Engineer with 7+ years of experience building scalable backend systems and
            developer tools. I’ve worked across location intelligence, fintech, and healthcare, solving complex
            performance and reliability challenges. At HERE Technologies, I focus on making systems faster, more
            efficient, and easier to maintain.
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
        <ul className="hero__stats" aria-label="Highlights">
          {heroStats.map((s, i) => (
            <li key={s.label} className="hero__in" style={{ '--i': 5 + i }}>
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
