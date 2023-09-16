import React from "react";

import getIcon from "../../UI/icons/iconsutil";

export const DialogHeaderLogo = () => {
  return (
    <>
      <div className="flex h-full justify-center items-stretch flex-col">
        <div className="flex flex-col items-center shrink-0 ">
          {getIcon("X_LOGO", {
            height: "2rem",
            maxWidth: "100%",
            fill: "black",
          })}
        </div>
      </div>
    </>
  );
};

// darkMode ? "white" :
