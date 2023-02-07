import React, { useState } from "react";

import LandingFooter from "../../footer/LandingFooter";
import FormDialog from "../../UI/home/FormDialog";
import SignUpForm from "../../../pages/authentication/SignUpForm";
import { TabRounded } from "@mui/icons-material";
import FormModalContext from "../../../context/modals/form-modal-context";

const Layer = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormModalContext.Provider value={{ isModalOpen: open, onClick: handleClickOpen, onClose: handleClose}}>
      <div className="relative flex flex-col justify-center grow">
        <FormDialog>
          <SignUpForm />
        </FormDialog>
        <LandingFooter />
      </div>
    </FormModalContext.Provider>
  );
};

export default Layer;
