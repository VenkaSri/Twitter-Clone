import React from "react";

import { Dialog as MUIDialog } from '@mui/material';
import { createTheme, DialogActions, DialogContent, DialogTitle, ThemeProvider } from "@mui/material";
;

const theme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.1)",
        },
      },
    },
  }}) 

const Dialog = ({content, width, height, handleClose}) => {
  return (
    <ThemeProvider theme={theme} >
      <MUIDialog
        open={true}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: width,
            height: height,
            borderRadius: "20px",
            display: "flex",
            boxShadow: "none",
            overflow: "hidden"
          },
        }}
      >
        {content}
      </MUIDialog>
      </ThemeProvider>
  );
};

export default Dialog;
