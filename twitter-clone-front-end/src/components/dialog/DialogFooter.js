import React from "react";
import { useSelector } from "react-redux";

import { useMediaQuery } from "@mui/material";

export const DialogFooter = ({ type, content }) => {
  let footer = null;
  const fullScreen = useMediaQuery("(max-width:702px)");
  const dialogBodyOverFlowing = useSelector(
    (state) => state.rootReducer.dialogSlice.dialogBodyOverFlowing
  );

  const overflowClass = dialogBodyOverFlowing ? "shadow-custom-shadow" : "";
  return (
    <div
      className={`flex-col-container dark:bg-[#000] justify-center items-center ${
        fullScreen ? "px-8" : "px-20"
      } ${overflowClass}  z-20
      `}
    >
      <div className="flex-col-container grow w-full">{content}</div>
    </div>
  );
};
