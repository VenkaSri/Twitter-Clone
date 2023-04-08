import React from "react";

import Dialog from "@mui/material/Dialog";
import { createTheme, DialogActions, DialogContent, DialogTitle, ThemeProvider } from "@mui/material";
;

const theme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      },
    },
  }}) 

const FormDialog = (props) => {
  return (
    <ThemeProvider theme={theme} >
      <Dialog
        open={true}
        PaperProps={{
          sx: {
            width: "600px",
            height: "650px",
            borderRadius: "20px",
            display: "flex",
            boxShadow: "none",
            overflow: "hidden"
          },
        }}
        
      >
        {props.content}
      </Dialog>
      </ThemeProvider>
  );
};

export default FormDialog;
