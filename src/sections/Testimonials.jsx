import { testimonials } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Text from '../components/Text.jsx';

export default function Testimonials() {
  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="07"
            label="Kind Words"
            title={<span id="testimonials-title">What colleagues <em>say.</em></span>}
          />
        </Reveal>
        {testimonials.length === 0 ? (
          <p className="empty-state">Recommendations coming soon.</p>
        ) : (
          <div className="testimonials">
            {testimonials.map((t, i) => (
              <Reveal as="figure" className="testimonial" key={i} delay={i * 90}>
                <span className="testimonial__mark" aria-hidden="true">“</span>
                <blockquote>
                  <p><Text>{t.quote}</Text></p>
                </blockquote>
                <figcaption>
                  <span className="testimonial__name"><Text>{t.name}</Text></span>
                  <span className="testimonial__title"><Text>{t.title}</Text></span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
