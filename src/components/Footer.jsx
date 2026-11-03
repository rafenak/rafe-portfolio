import { Link } from 'react-router-dom';
import { profile } from '../data/content.js';
import { ArrowUp } from './Icons.jsx';
import { socials } from '../data/socials.js';
import { prefersReducedMotion } from '../lib/hooks.js';

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/" className="brand">
            <span className="brand__mark" aria-hidden="true">RN</span>
            <span className="brand__name">{profile.name}</span>
          </Link>
          <p>{profile.title} · {profile.location}</p>
        </div>

        <ul className="social-list" aria-label="Social links">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <div className="site-footer__bottom">
          <small>© {new Date().getFullYear()} {profile.name}. All rights reserved.</small>
          <button type="button" className="link-btn" onClick={toTop}>
            Back to top <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
