import { Link } from 'react-router-dom';
import ProjectCover from './ProjectCover.jsx';
import { ArrowUpRight } from './Icons.jsx';

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <Link to={`/work/${project.slug}`} className="project-card__link">
        <div className="project-card__media">
          <ProjectCover project={project} />
          <span className="project-card__cta" aria-hidden="true">
            View case study <ArrowUpRight />
          </span>
        </div>
        <div className="project-card__content">
          <div className="project-card__meta">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{project.domain}</span>
            <span>{project.company}</span>
          </div>
          <h3 className="project-card__title">
            {project.title}
            <span className="project-card__headline"> — {project.headline}</span>
          </h3>
          <p className="project-card__desc">{project.short}</p>
          <p className="project-card__role">{project.role}</p>
          <ul className="tag-list" aria-label="Technologies">
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
