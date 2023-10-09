import React, { useState } from "react";

import {
  Fade,
  Snackbar as MUISnackbar,
  SnackbarContent,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { snackbarSliceActions } from "../../state/modal/snackbarSlice";

export const Snackbar = () => {
  const { message } = useSelector(
    (state) => state.rootReducer.modalSlice.snackbarSlice
  );
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackbarSliceActions.setIsError(false));
  };
  return (
    <MUISnackbar
      ContentProps={{
        sx: {
          backgroundColor: "var(--primary-color)",
          padding: 0,
          boxShadow: "none",
          border: "1px solid red",
        },
      }}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={true}
      onClose={handleClose}
      TransitionComponent={Fade}
      message={message}
    />
  );
};
