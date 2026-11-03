import { about } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container split">
        <div className="split__aside">
          <SectionHeading index="01" label="About" />
        </div>
        <div className="split__main">
          <Reveal as="h2" id="about-title" className="statement">
            {about.statement}
          </Reveal>
          <div className="about__body">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 80}>
                {p}
              </Reveal>
            ))}
          </div>
          <Reveal className="about__focus">
            <h3 className="mini-title">Where I focus</h3>
            <ul className="focus-list">
              {about.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
