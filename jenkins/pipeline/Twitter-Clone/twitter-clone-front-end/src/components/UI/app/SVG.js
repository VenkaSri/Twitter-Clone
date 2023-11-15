const SVG = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
    >
      <g>
        <path d={props.svgPath}></path>
      </g>
    </svg>
  );
};


export default SVG;

