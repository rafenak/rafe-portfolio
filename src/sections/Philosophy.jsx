import { philosophy } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Philosophy() {
  return (
    <section className="section section--dark" id="philosophy" aria-labelledby="philosophy-title">
      <div className="container">
        <SectionHeading index="06" label="Engineering Philosophy" light />
        <Reveal as="blockquote" className="philosophy__quote">
          <p id="philosophy-title">“{philosophy.quote}”</p>
        </Reveal>
        <ol className="principles">
          {philosophy.principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80}>
              <span className="principles__index">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
