import React from "react";
import getIcon from "../../utils/icons/iconsutil";
import { useTheme } from "../../hooks/useTheme";
import { useMediaQuery } from "@mui/material";

export const HeaderButton = ({ type, text, visibility }) => {
  const { darkMode } = useTheme();
  const padding = useMediaQuery("(max-height:850px)");

  return (
    <a
      className={`w-full  flex-col-container items-start ${visibility} ${
        padding ? "py-0" : "py-1"
      }`}
    >
      <div className="header--link">
        <div>
          {getIcon(type, {
            width: 26.25,
            height: 26.25,
            fill: darkMode ? "white" : "black",
          })}
        </div>
        <div className="leading-6 mr-4 ml-5 text-[20px] font-cReg tablet:block hidden">
          <span>{text}</span>
        </div>
      </div>
    </a>
  );
};
