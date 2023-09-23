import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dialogSliceActions } from "../../state/dialog/dialogSlice";

export const DialogBodyContainer = (props) => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const containerRef = useRef(null);
  const isDialogContentLoaded = useSelector(
    (state) => state.rootReducer.dialogSlice.isDialogContentLoaded
  );
  const dispatch = useDispatch();

  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll events
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // Calculate the scroll position from the bottom
      const scrollPositionFromBottom =
        scrollHeight - (scrollTop + clientHeight);

      console.log(scrollPositionFromBottom + " from bottom");

      setScrollPosition(scrollTop);

      // Check if we have reached the bottom
      if (scrollPositionFromBottom === 0) {
        console.log("Reached the bottom!");
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  console.log(scrollPosition);
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

    checkOverflow(); // Run initially if isDialogContentLoaded is true
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={`overflow-auto
flex flex-col items-stretch basis-full flex-grow bg-[#fff] dark:bg-[#000]`}
      >
        <div
          className={`${
            fullScreen ? " px-8" : " px-20"
          } shrink-0 flex flex-col mb-2`}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};
