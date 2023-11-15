import PropTypes from "prop-types";

const SVG = ({ path, className }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  </div>
);

export default SVG;

SVG.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
};
