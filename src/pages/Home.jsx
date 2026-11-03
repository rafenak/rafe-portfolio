import { usePageMeta } from '../lib/hooks.js';
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Work from '../sections/Work.jsx';
import Expertise from '../sections/Expertise.jsx';
import Tools from '../sections/Tools.jsx';
import Experience from '../sections/Experience.jsx';
import Philosophy from '../sections/Philosophy.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import Contact from '../sections/Contact.jsx';

// Set to true to show the testimonials section again.
const SHOW_TESTIMONIALS = false;

export default function Home() {
  usePageMeta(
    'Rafe Nakhuda — Senior Software Engineer',
    'Rafe Nakhuda is a Senior Software Engineer with 7+ years of experience building scalable backend systems, distributed data pipelines and AI-powered tooling across fintech, healthcare and location intelligence.'
  );

  return (
    <>
      <Hero />
      <About />
      <Work />
      <Expertise />
      <Tools />
      <Experience />
      <Philosophy />
      {SHOW_TESTIMONIALS && <Testimonials />}
      <Contact index={SHOW_TESTIMONIALS ? '08' : '07'} />
    </>
  );
}
