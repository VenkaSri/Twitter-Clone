import React from "react";

import getIcon from "../icons/iconsutil";

const IconButton = ({ type, onClick, options }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={`w-[34px] h-[34px] flex justify-center items-center cursor-pointer rounded-full hover:bg-[${
        options.hovBgColor || "#e8f5fe"
      }]`}
      title={type}
    >
      {getIcon(type, {
        fill: options.fillColor || "#1d9bf0",
        width: options.width,
        height: options.height,
      })}
    </div>
  );
};

export default IconButton;
