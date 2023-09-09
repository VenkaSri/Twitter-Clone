import React from "react";

import { Dialog as MUIDialog, useMediaQuery } from "@mui/material";
import { getDialogStyles } from "../utils/getDialogStyles";
import DialogHeader from "./dialog/DialogHeader";

export const Dialog = ({ type, content }) => {
  const isMobile = useMediaQuery("(max-width:702px)");
  const dialogStyles = getDialogStyles(type, isMobile);
  return (
    <MUIDialog open={true} PaperProps={dialogStyles} fullScreen={isMobile}>
      {content}
    </MUIDialog>
  );
};
