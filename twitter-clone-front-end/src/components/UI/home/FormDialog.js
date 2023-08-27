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
          borderRadius: "20px",
          display: "flex",
          boxShadow: "none",
          overflow: "hidden",
          backgroundColor: bgColor,
        },
      };

  return (
    <Dialog
      sx={{ display: "flex", flexDirection: "column" }}
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

{
  /* <Dialog
fullScreen={fullScreen}
transitionDuration={0}
open={dialogState}
PaperProps={{
  sx: {
    width: "600px",
    height: "650px",
    borderRadius: "20px",
    display: "flex",
    boxShadow: "none",
    overflow: "hidden",
    backgroundColor: "red",
  },
}}
>
{props.content}
</Dialog> */
}
