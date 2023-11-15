import React from "react";

import getIcon from "../icons/iconsutil";

const IconButton = ({ type, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className="w-[34px] h-[34px] flex justify-center items-center cursor-pointer rounded-full hover:bg-[#e8f5fe]"
      title={type}
    >
      {getIcon(type, { fill: "#1d9bf0" })}
    </div>
  );
};

export default IconButton;
