import React from "react";

import { DialogTitle, DialogContent } from "@mui/material";

export const DialogLayout = ({ header, body, footer }) => {
  return (
    <>
      <DialogTitle style={{ padding: 0 }}>{header}</DialogTitle>
      <DialogContent
        className="w-full max-w-[600px]  mx-auto p-0 flex-col-container relative dark:bg-black"
        sx={{
          "&.MuiDialogContent-root": {
            padding: 0,
          },
        }}
      >
        {body}
      </DialogContent>
    </>
  );
};
