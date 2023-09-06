import React from "react";
import { DialogContent } from "@mui/material";

import { useMediaQuery } from "@mui/material";

export const PopupErrorMessage = ({ message }) => {
  const fullScreen = useMediaQuery("(max-width:702px)");

  return (
    <DialogContent
      className="flex-col-container grow"
      sx={{
        "&.MuiDialogContent-root": {
          padding: 0,
          pointerEvents: "none",
        },
      }}
    >
      <div className="px-6 py-2 bg-primary-color text-white font-cReg flex-col-container justify-center items-center">
        <span>{message}</span>
      </div>
    </DialogContent>
  );
};
