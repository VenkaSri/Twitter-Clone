const SVG = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="group-hover:bg-[#F8E0EB] fill-[#333333] ml-3.5 group-hover:fill-[#F91880]"
    >
      <g>
        <path d={props.svgPath}></path>
      </g>
    </svg>
  );
};


export default SVG;
