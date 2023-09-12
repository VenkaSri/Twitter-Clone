import React from "react";

import { Dialog as MUIDialog, useMediaQuery } from "@mui/material";
import { getDialogStyles } from "../utils/getDialogStyles";
import { useSelector } from "react-redux";

export const Dialog = ({ type, content }) => {
  const isMobile = useMediaQuery("(max-width:702px)");
  const darkMode = useSelector(
    (state) => state.rootReducer.globalState.isDarkMode
  );
  const dialogStyles = getDialogStyles(type, isMobile, darkMode);
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
