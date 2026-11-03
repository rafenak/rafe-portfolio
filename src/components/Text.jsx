import { isPlaceholder } from '../lib/hooks.js';

// Renders text, highlighting [bracketed] editable placeholders.
export default function Text({ children }) {
  if (!isPlaceholder(children)) return children;
  return children.split(/(\[[^\]]+\])/g).map((part, i) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <span key={i} className="placeholder" title="Editable placeholder">
        {part}
      </span>
    ) : (
      part
    )
  );
}
