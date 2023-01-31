const SVG = (props) => {
  return (
    <svg
      viewBox="0 0 24 24" className="w-[26.25px]"
    >
      <g>
        <path d={props.svgPath}></path>
      </g>
    </svg>
  );
};


export default SVG;
