import PropTypes from "prop-types";

const SVG = ({ path, className, viewBox = "0 0 24 24" }) => (
  <div className={className}>
    <svg viewBox={viewBox}>
      <path d={path} />
    </svg>
  </div>
);

export default SVG;

SVG.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
  viewBox: PropTypes.string,
};
