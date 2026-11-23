import { usePageMeta } from '../lib/hooks.js';
import Hero from '../sections/Hero.jsx';
import Work from '../sections/Work.jsx';
import Experience from '../sections/Experience.jsx';
import Contact from '../sections/Contact.jsx';

export default function Home() {
  usePageMeta(
    'Rafe Nakhuda — Senior Software Engineer',
    'Rafe Nakhuda is a Senior Software Engineer building reliable backend systems and developer tools at HERE Technologies.'
  );

  return (
    <>
      <Hero />
      <Work />
      <Experience />
      <Contact index="03" />
    </>
  );
}
