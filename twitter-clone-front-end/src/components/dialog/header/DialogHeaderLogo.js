import React from "react";

import getIcon from "../../UI/icons/iconsutil";
import { useDarkMode } from "../../../hooks/useDarkMode";

export const DialogHeaderLogo = () => {
  const darkMode = useDarkMode();
  const fillColor = darkMode ? "white" : "black";
  return (
    <>
      <div className="flex h-full justify-center items-stretch flex-col">
        <div className="flex flex-col items-center shrink-0 ">
          {getIcon("X_LOGO", {
            height: "2rem",
            maxWidth: "100%",
            fill: fillColor,
          })}
        </div>
      </div>
    </>
  );
};

// darkMode ? "white" :
