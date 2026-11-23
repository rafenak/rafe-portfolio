import { profile } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Text from '../components/Text.jsx';
import { socials } from '../data/socials.js';
import { ArrowUpRight, Download } from '../components/Icons.jsx';
import { isPlaceholder } from '../lib/hooks.js';

export default function Contact({ index = '03' }) {
  const emailIsSet = !isPlaceholder(profile.email);

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading index={index} label="Contact" />
        <Reveal as="h2" id="contact-title" className="contact__title">
          Have a project in mind? <em>Let’s talk.</em>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__details">
            <dl>
              <div>
                <dt>Email</dt>
                <dd>
                  {emailIsSet ? <a href={`mailto:${profile.email}`}>{profile.email}</a> : <Text>{profile.email}</Text>}
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    in/rafe-nakhuda <ArrowUpRight />
                  </a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>

            <a className="btn btn--outline" href={profile.resume} download>
              <Download /> Download Resume
            </a>

            <ul className="social-list" aria-label="Social links">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
