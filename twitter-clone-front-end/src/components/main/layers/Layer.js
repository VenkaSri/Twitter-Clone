import React, { useState } from "react";

import LandingFooter from "../../footer/LandingFooter";
import FormDialog from "../../UI/home/FormDialog";
import SignUpForm from "../../../pages/authentication/signup/SignUpForm";
import SignUpStepOne from "../../authentication/signup/SignUpStepOne";
import { TabRounded } from "@mui/icons-material";
import FormModalContext from "../../../context/modals/form-modal-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpHome from "../../authentication/signup/SignUpHome";
import AuthenticateHome from "../../authentication/signup/AuthenticateHome";
import Authentication from "../../authentication/signup/Authentication";

const Layer = () => {

  return (
      <div className="relative flex flex-col justify-center grow">
        <Routes>
            <Route
              path="/i/flow/signup"
              element={
                <FormDialog>
                  <Authentication />
                </FormDialog>
              }
            />
        </Routes>
        <LandingFooter />
      </div>
  );
};

export default Layer;
