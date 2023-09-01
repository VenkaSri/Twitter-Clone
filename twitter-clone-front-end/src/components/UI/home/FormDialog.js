import React from "react";

import Dialog from "@mui/material/Dialog";
import { Fade } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FormDialog = (props) => {
  const dark = useSelector((state) => state.rootReducer.globalState.isDarkMode);
  const fullScreen = useMediaQuery("(max-width:702px)");
  const dialogState = useSelector(
    (state) => state.rootReducer.dialogState.isDialogOpen
  );

  const bgColor = dark ? "#000" : "#fff";

  const paperProps = fullScreen
    ? {}
    : {
        sx: {
          borderRadius: "16px",
          height: "650px",
          maxHeight: "90vh",
          minHeight: "400px",
          maxWidth: "80vw",
          minWidth: "600px",
          display: "flex",
          boxShadow: "none",
          overflow: "hidden",
        },
      };

  return (
    <Dialog
      sx={{ display: "flex", flexDirection: "column" }}
      transitionDuration={0}
      fullScreen={fullScreen}
      open={dialogState}
      aria-labelledby="responsive-dialog-title"
      PaperProps={paperProps}
    >
      {props.content}
    </Dialog>
  );
};

export default FormDialog;
