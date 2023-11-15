import React from "react";

const CircleButton = (props) => {
  return (
      <svg
        viewBox={`0 ${props.buttonInfo.viewBoxMinY} 24 ${props.buttonInfo.viewBoxHeight}`}
        className={`hover:bg-[${props.buttonInfo.bgFillColor}] cursor-${props.buttonInfo.cursor} fill-[#536471]
        rounded-full w-9 h-9 flex items-center justif-content`}
      >
        <g>
          <path 
            d={props.buttonInfo.svgPath}
          ></path>
        </g>
      </svg>
  );
};

export default CircleButton;
