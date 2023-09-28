import React from "react";
import getIcon from "../../utils/icons/iconsutil";
import { useTheme } from "../../hooks/useTheme";

export const HeaderButton = ({ type, text }) => {
  const darkMode = useTheme();
  return (
    <a className="w-full  flex-col-container items-start py-1">
      <div className="header--link">
        <div>
          {getIcon(type, {
            width: 26.25,
            height: 26.25,
            fill: darkMode ? "white" : "black",
          })}
        </div>
        <div className="leading-6 mr-4 ml-5 text-[20px] font-cReg">
          <span>{text}</span>
        </div>
      </div>
    </a>
  );
};
