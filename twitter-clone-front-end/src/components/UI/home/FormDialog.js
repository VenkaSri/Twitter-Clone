import React, { useContext } from "react";

import Dialog from "@mui/material/Dialog";
import FormModalContext from "../../../context/modals/form-modal-context";

const FormDialog = (props) => {
  const ctx = useContext(FormModalContext);
  return (
    <div>
      <Dialog
        open={ctx.isModalOpen}
        PaperProps={{
          sx: {
            width: "600px",
            height: "100%",
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
