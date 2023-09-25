import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dialogSliceActions } from "../../state/dialog/dialogSlice";

export const DialogBodyContainer = (props) => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  // s/o chat-gpt, dynamically adding box shadow
  useEffect(() => {
    const checkOverflow = () => {
      const element = containerRef.current;
      if (element) {
        if (element.clientHeight > 497) {
          dispatch(dialogSliceActions.setDialogBodyOverFlowing(true));
          return;
        } else {
          const isOver = element.scrollHeight > element.clientHeight;
          dispatch(dialogSliceActions.setDialogBodyOverFlowing(isOver));
        }
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [dispatch]);

  return (
    <>
      <div
        id="scrollableDiv"
        ref={containerRef}
        className={`overflow-auto
flex flex-col items-stretch basis-full flex-grow bg-[#fff] dark:bg-[#000] `}
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
