import React from "react";

import SVG from "../../app/SVG";

const StepHeaderIcon = ({ icon }) => {
  return (
    <div className="flex p-[0.75rem] w-[50px] hover:bg-[#E8F5FE] rounded-full fill-[#1D9BF0] group-hover:bg-[#E6E7E7]">
      <SVG svgPath={icon} />
    </div>
  );
};

export default StepHeaderIcon;