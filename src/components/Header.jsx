import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data/content.js';

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const { pathname, hash, key } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash, key]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Highlight the nav item for the section currently in view (home page only).
  useEffect(() => {
    if (pathname !== '/') {
      setActive(pathname.startsWith('/work') ? 'work' : '');
      return undefined;
    }
    const sections = ['top', ...navItems.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === 'top' ? '' : entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label={`${profile.name} — home`}>
          <span className="brand__mark" aria-hidden="true">RN</span>
          <span className="brand__name">{profile.name}</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <ul>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={`/#${id}`}
                  className={`nav__link${active === id ? ' is-active' : ''}`}
                  aria-current={active === id ? 'location' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/#contact" className="btn btn--primary btn--small header-cta">
          Let’s Talk
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav" className="mobile-nav" aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {navItems.map(({ id, label }, i) => (
              <li key={id} style={{ '--i': i }}>
                <Link to={`/#${id}`} tabIndex={open ? 0 : -1}>
                  <span className="mobile-nav__index">0{i + 1}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mobile-nav__meta">
          {profile.title} · {profile.location}
        </p>
      </div>
    </header>
  );
}
