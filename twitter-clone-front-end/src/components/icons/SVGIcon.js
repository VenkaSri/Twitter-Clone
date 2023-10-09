const SVGIcon = ({ path, className }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" className={className}>
      <path d={path} />
    </svg>
  </div>
);

export default SVGIcon;
