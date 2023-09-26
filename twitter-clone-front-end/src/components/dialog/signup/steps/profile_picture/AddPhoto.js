import React from "react";
import getIcon from "../../../../../utils/icons/iconsutil";
export const AddPhoto = ({ onClick, className }) => {
  return (
    <div
      className={`${className} w-[44px] h-[44px]  z-10 rounded-full bg-[#0f1419] bg-opacity-75  hover:bg-[#272c30] hover:bg-opacity-75 cursor-pointer flex justify-center items-center`}
      onClick={onClick}
    >
      <div className="h-5 w-5  flex">
        {getIcon("Add Photo", { fill: "#fff" })}
      </div>
    </div>
  );
};
