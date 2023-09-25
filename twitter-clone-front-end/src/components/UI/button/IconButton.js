import React from "react";

import getIcon from "../../../utils/icons/iconsutil";

const IconButton = ({ type, onClick, options = {} }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={`w-[34px] h-[34px] flex justify-center items-center cursor-pointer rounded-full ${options.className}`}
      title={type}
    >
      {getIcon(type, {
        fill: options.fillColor || options.className,
        width: options.width,
        height: options.height,
      })}
    </div>
  );
};

export default IconButton;
