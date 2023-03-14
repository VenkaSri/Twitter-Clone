import React from "react";

import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import StepsHeader from "../../authentication/signup/StepsHeader";
import StepOne from "../../authentication/signup/stepone/StepOne";
import StepsFooter from "../../authentication/signup/StepsFooter";

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
        <DialogTitle style={{padding: 0}}><StepsHeader /></DialogTitle>
        <DialogContent style={{padding: 0}}><StepOne /></DialogContent>
        <DialogActions style={{padding: 0, display: "flex"}}><StepsFooter /></DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
