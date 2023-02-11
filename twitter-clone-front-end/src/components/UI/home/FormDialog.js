import React, { useContext } from "react";

import Dialog from "@mui/material/Dialog";
import FormModalContext from "../../../context/modals/form-modal-context";

const FormDialog = (props) => {
  const ctx = useContext(FormModalContext);
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
        {props.children}
      </Dialog>
    </div>
  );
};

export default FormDialog;
