import { Link } from 'react-router-dom';
import { usePageMeta } from '../lib/hooks.js';
import { ArrowLeft } from '../components/Icons.jsx';

export default function NotFound({ message = 'This page doesn’t exist — or it moved.' }) {
  usePageMeta('Page not found — Rafe Nakhuda', message);

  return (
    <section className="not-found container">
      <p className="eyebrow">404</p>
      <h1>Nothing to <em>see</em> here.</h1>
      <p>{message}</p>
      <Link to="/" className="btn btn--primary">
        <ArrowLeft /> Back to home
      </Link>
    </section>
  );
}
