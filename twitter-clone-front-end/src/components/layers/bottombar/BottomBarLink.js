import React from "react";
import getIcon from "../../../utils/icons/iconsutil";
import { useTheme } from "../../../hooks/useTheme";

export const BottomBarLink = ({ type }) => {
  const darkMode = useTheme();
  return (
    <a className="flex-col-container grow items-center justify-center cursor-pointer group">
      <div className=" p-2 rounded-full dark:group-hover:bg-[var(--primary-dark-hov-bg-color)] group-hover:bg-[#E6E7E7]">
        {getIcon(type, {
          width: 26.25,
          height: 26.25,
          fill: darkMode ? "white" : "black",
        })}
      </div>
    </a>
  );
};
