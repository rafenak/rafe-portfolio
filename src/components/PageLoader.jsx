export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span className="page-loader__bar" aria-hidden="true" />
      <span className="page-loader__label">Loading</span>
    </div>
  );
}
