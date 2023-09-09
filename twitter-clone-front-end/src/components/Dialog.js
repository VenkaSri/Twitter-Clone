import React from "react";

import { Dialog as MUIDialog, useMediaQuery } from "@mui/material";
import { getDialogStyles } from "../utils/getDialogStyles";

export const Dialog = ({ type, content }) => {
  const isMobile = useMediaQuery("(max-width:702px)");
  const dialogStyles = getDialogStyles(type);
  return (
    <MUIDialog
      sx={dialogStyles.styles}
      open={true}
      PaperProps={dialogStyles}
      fullScreen={isMobile}
      transitionDuration={0}
    >
      {content}
    </MUIDialog>
  );
};
