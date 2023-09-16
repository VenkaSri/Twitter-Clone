import React from "react";
import { useMediaQuery } from "@mui/material";

export const DialogBodyContainer = (props) => {
  const fullScreen = useMediaQuery("(max-width:702px)");

  return (
    <>
      <div
        className={`overflow-auto
flex flex-col items-stretch basis-full flex-grow bg-[#fff] dark:bg-[#000]`}
      >
        <div
          className={`${
            fullScreen ? " px-8" : " px-20"
          } shrink-0 flex flex-col mb-2 grow`}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};
