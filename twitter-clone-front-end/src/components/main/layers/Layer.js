import React, { useState } from "react";

import LandingFooter from "../../footer/LandingFooter";
import FormDialog from "../../UI/home/FormDialog";
import SignUpForm from "../../../pages/authentication/signup/SignUpForm";
import { TabRounded } from "@mui/icons-material";
import FormModalContext from "../../../context/modals/form-modal-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Layer = () => {

  return (
      <div className="relative flex flex-col justify-center grow">
        <Routes>
            <Route
              path="/i/flow/signup"
              element={
                <FormDialog>
                  <SignUpForm />
                </FormDialog>
              }
            />
        </Routes>
        <LandingFooter />
      </div>
  );
};

export default Layer;
