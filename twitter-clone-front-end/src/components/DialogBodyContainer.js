import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "@mui/material";
import { unfollowDialogActions } from "../state/dialog/dialogState-reducer";

export const DialogBodyContainer = (props) => {
  const fullScreen = useMediaQuery("(max-width:702px)");

  return (
    <div
      className={`overflow-auto
        flex flex-col items-stretch basis-full flex-grow dark:bg-[#000]`}
    >
      <div
        className={`${
          fullScreen ? " px-8" : " px-20"
        } shrink-0 flex flex-col mb-2`}
      >
        {props.children}
      </div>
    </div>
  );
};
