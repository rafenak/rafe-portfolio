import { tools } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Tools() {
  return (
    <section className="section section--compact" id="tools" aria-labelledby="tools-title">
      <div className="container split">
        <div className="split__aside">
          <SectionHeading index="04" label="Tools & Technologies" />
          <h2 id="tools-title" className="visually-hidden">Tools and technologies</h2>
        </div>
        <div className="split__main">
          <dl className="tools-list">
            {tools.map(({ group, items }, i) => (
              <Reveal className="tools-list__row" key={group} delay={i * 70}>
                <dt>{group}</dt>
                <dd>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
