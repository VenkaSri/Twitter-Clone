import Fade from "@mui/material/Fade";
import Snackbar from "@mui/material/Snackbar";
import snackbarSlice, { snackbarSliceActions } from "@state/snackbarSlice";
import closeSnackbar from "@state/snackbarSlice";

import { useDispatch, useSelector } from "react-redux";

export const CustomSnackbar = ({ message, isOpen }) => {
  // const { message } = useSelector((state) => state.snackbarSlice.message);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(snackbarSliceActions.closeSnackbar());
  };
  return (
    <Snackbar
      ContentProps={{
        sx: {
          backgroundColor: "var(--primary-color)",
          padding: 0,
          boxShadow: "none",
        },
      }}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Fade}
      message={message}
    />
  );
};
