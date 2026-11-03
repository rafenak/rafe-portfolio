import { projects } from '../data/projects.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Work() {
  return (
    <section className="section section--work" id="work" aria-labelledby="work-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="02"
            label="Selected Work"
            title={
              <span id="work-title">
                Case studies in <em>scale, cost</em> and craft.
              </span>
            }
            intro="A selection of systems I’ve re-architected, upgraded and built — each told as the problem, the decisions and the outcome."
          />
        </Reveal>
        {projects.length === 0 ? (
          <p className="empty-state">Case studies are on their way.</p>
        ) : (
          <div className="work-grid">
            {projects.map((project, i) => (
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
