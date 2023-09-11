import React from "react";

import { DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import { unfollowDialogActions } from "../state/dialog/dialogState-reducer";

export const DialogLayout = ({ header, body, footer }) => {
  // s/o chat-gpt, dynamically adding box shadow
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  useEffect(() => {
    const checkOverflow = () => {
      const element = containerRef.current;
      if (element) {
        const isOver = element.scrollHeight > element.clientHeight;
        dispatch(unfollowDialogActions.setDialogBodyOverFlowing(isOver));
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);
  return (
    <>
      <DialogTitle style={{ padding: 0 }}>{header}</DialogTitle>
      <DialogContent
        ref={containerRef}
        className="w-full max-w-[600px]  mx-auto p-0 flex-col-container relative dark:bg-black"
        sx={{
          "&.MuiDialogContent-root": {
            padding: 0,
          },
        }}
      >
        {body}
      </DialogContent>
      {footer}
    </>
  );
};
