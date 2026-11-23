import { Link, useParams } from 'react-router-dom';
import { getProject, projects } from '../data/projects.js';
import { usePageMeta, useParallax } from '../lib/hooks.js';
import ProjectCover from '../components/ProjectCover.jsx';
import Reveal from '../components/Reveal.jsx';
import Text from '../components/Text.jsx';
import { ArrowLeft, ArrowRight } from '../components/Icons.jsx';
import NotFound from './NotFound.jsx';

function CaseSection({ index, label, children }) {
  return (
    <Reveal as="section" className="cs-section" aria-label={label}>
      <h2 className="cs-section__label">
        <span>{String(index).padStart(2, '0')}</span>
        {label}
      </h2>
      <div className="cs-section__body">{children}</div>
    </Reveal>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  const coverRef = useParallax(0.05);

  usePageMeta(
    project ? `${project.title} — Case Study · Rafe Nakhuda` : 'Case study not found — Rafe Nakhuda',
    project?.short
  );

  if (!project) return <NotFound message="That case study doesn’t exist. Explore the selected work instead." />;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="case-study">
      <header className="cs-hero container">
        <Link to="/#work" className="back-link">
          <ArrowLeft /> All work
        </Link>
        <p className="eyebrow hero__in" style={{ '--i': 0 }}>
          <span className="eyebrow__index">Case Study {String(index + 1).padStart(2, '0')}</span>
          <span className="eyebrow__rule" aria-hidden="true" />
          {project.domain}
        </p>
        <h1 className="cs-hero__title hero__in" style={{ '--i': 1 }}>
          {project.title}
          <span>{project.headline}</span>
        </h1>
        <p className="cs-hero__lead hero__in" style={{ '--i': 2 }}>{project.short}</p>

        <dl className="cs-meta hero__in" style={{ '--i': 3 }}>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Company</dt><dd>{project.company}</dd></div>
          <div><dt>Period</dt><dd><Text>{project.period}</Text></dd></div>
          <div><dt>Stack</dt><dd>{project.tags.join(', ')}</dd></div>
        </dl>
      </header>

      <div className="container">
        <div className="cs-cover hero__in" style={{ '--i': 4 }} ref={coverRef}>
          <ProjectCover project={project} className="parallax-inner" />
        </div>
      </div>

      <div className="container">
        <ul className="cs-metrics" aria-label="Key outcomes">
          {project.metrics.map((m, i) => (
            <Reveal as="li" key={m.label} delay={i * 80}>
              <span className="cs-metrics__value"><Text>{m.value}</Text></span>
              <span className="cs-metrics__label"><Text>{m.label}</Text></span>
            </Reveal>
          ))}
        </ul>

        <CaseSection index={1} label="The Challenge">
          <p className="cs-lead">{project.challenge}</p>
        </CaseSection>

        <CaseSection index={2} label="My Approach">
          <div className="decisions">
            {project.approach.map((a, i) => (
              <div className="decision" key={a.title}>
                <span className="decision__index">{String.fromCharCode(65 + i)}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </CaseSection>

        <CaseSection index={3} label="Outcome">
          <p className="cs-lead">{project.outcome}</p>
        </CaseSection>
      </div>

      <nav className="cs-next" aria-label="Next case study">
        <Link to={`/work/${next.slug}`} className="container cs-next__link">
          <span className="eyebrow">Next case study</span>
          <span className="cs-next__title">
            {next.title} <ArrowRight />
          </span>
          <span className="cs-next__headline">{next.headline}</span>
        </Link>
      </nav>
    </article>
  );
}
