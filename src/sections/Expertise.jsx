import { expertise } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Expertise() {
  return (
    <section className="section section--tint" id="expertise" aria-labelledby="expertise-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="03"
            label="Expertise"
            title={<span id="expertise-title">Depth across the <em>whole</em> backend.</span>}
          />
        </Reveal>
        <div className="expertise-grid">
          {expertise.map((area, i) => (
            <Reveal as="article" key={area.title} className="expertise-card" delay={i * 90}>
              <span className="expertise-card__index">0{i + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
