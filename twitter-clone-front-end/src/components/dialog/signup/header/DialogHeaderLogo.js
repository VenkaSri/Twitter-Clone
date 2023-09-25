import React from "react";

import getIcon from "../../../../utils/icons/iconsutil";
import { useTheme } from "../../../../hooks/useTheme";

export const DialogHeaderLogo = () => {
  const darkMode = useTheme();
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
