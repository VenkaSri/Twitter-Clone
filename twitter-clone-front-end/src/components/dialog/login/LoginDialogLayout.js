import React from "react";
import DialogHeader from "../DialogHeader";
import { StyledFormOutline } from "../../StyledFormOutline";
import { DialogContent } from "@mui/material";

export const LoginDialogLayout = () => {
  return (
    <DialogContent
      className="flex-col-container grow rounded-2xl"
      sx={{
        "&.MuiDialogContent-root": {
          padding: 0,
          pointerEvents: "none",
        },
      }}
    >
      <div className="px-6 py-2 bg-primary-color text-white font-cReg flex-col-container justify-center items-center">
        <span>{"Hll"}</span>
      </div>
    </DialogContent>
  );
};
