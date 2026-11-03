export default function SectionHeading({ index, label, title, intro, light = false }) {
  return (
    <header className={`section-head${light ? ' section-head--light' : ''}`}>
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span>
        <span className="eyebrow__rule" aria-hidden="true" />
        {label}
      </p>
      {title && <h2 className="section-title">{title}</h2>}
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}
