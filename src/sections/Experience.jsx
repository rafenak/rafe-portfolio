import { experience, education } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Text from '../components/Text.jsx';

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="02"
            label="Experience"
            title={<span id="experience-title">A track record across <em>industries.</em></span>}
          />
        </Reveal>

        <ol className="timeline">
          {experience.map((job) => (
            <Reveal as="li" className="timeline__item" key={job.company}>
              <p className="timeline__period"><Text>{job.period}</Text></p>
              <div className="timeline__head">
                <h3>{job.company}</h3>
                <p className="timeline__role">{job.role}</p>
              </div>
              <div className="timeline__body">
                <p>{job.summary}</p>
                <ul className="timeline__list">
                  {job.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <ul className="tag-list tag-list--accent" aria-label="Selected achievements">
                  {job.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="education">
          <h3 className="mini-title">Education</h3>
          <ul>
            {education.map((e) => (
              <li key={e.degree}>
                <span className="education__degree">{e.degree}</span>
                <span className="education__school">{e.school}</span>
                <span className="education__period">{e.period}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
