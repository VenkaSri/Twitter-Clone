import React from "react";

import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";

const FormDialog = (props) => {
  return (
    <div>
      <Dialog
        open={true}
        PaperProps={{
          sx: {
            width: "600px",
            height: "650px",
            borderRadius: "20px",
            display: "flex",
          },
        }}
      >
        <DialogTitle style={{ padding: 0 }}>{props.header}</DialogTitle>
        <DialogContent style={{ padding: 0 }}>{props.steps}</DialogContent>
        <DialogActions style={{ padding: 0, display: "flex" }}>
          {props.footer}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
