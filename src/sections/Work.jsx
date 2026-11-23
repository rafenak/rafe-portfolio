import { projects } from '../data/projects.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

const featuredSlugs = ['egis', 'nucleus', 'atlas', 'fraud-management', 'hl7-integration'];

export default function Work() {
  const featuredProjects = projects.filter((project) => featuredSlugs.includes(project.slug));

  return (
    <section className="section section--work" id="work" aria-labelledby="work-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="01"
            label="Selected Work"
            title={
              <span id="work-title">
                Results that <em>speak for themselves.</em>
              </span>
            }
            intro="Selected projects across location intelligence, fintech, and healthcare."
          />
        </Reveal>
        {featuredProjects.length === 0 ? (
          <p className="empty-state">Case studies are on their way.</p>
        ) : (
          <div className="work-grid">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 120}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
