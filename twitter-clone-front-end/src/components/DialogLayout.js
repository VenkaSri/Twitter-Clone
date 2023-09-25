import React from "react";

import { DialogTitle, DialogContent } from "@mui/material";
import { useDispatch } from "react-redux";

export const DialogLayout = ({ header, body, footer }) => {
  // s/o chat-gpt, dynamically adding box shadow
  const dispatch = useDispatch();

  return (
    <>
      <DialogTitle style={{ padding: 0 }}>{header}</DialogTitle>
      <DialogContent
        className="w-full max-w-[600px] mx-auto  flex-col-container relative dark:bg-black"
        sx={{
          "&.MuiDialogContent-root": {
            padding: 0,
            overflow: "",
          },
        }}
      >
        {body}
        {footer}
      </DialogContent>
    </>
  );
};
