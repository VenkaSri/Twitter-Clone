import React, { useEffect, useState } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";
import FormDialog from "./components/UI/home/FormDialog";
import { SignupDialog } from "./App";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { unfollowDialogActions } from "./state/dialog/dialogState-reducer";
import { useNavigate } from "react-router-dom";
import SignUpStep from "./components/SignUpStep";
import { createBrowserHistory } from "history";
import DialogHeader from "./components/signup/dialog/DialogHeader";
import DialogFooter from "./components/UI/dialog/DialogFooter";
import SignUpDialogLayout from "./components/dialog/signup/SignUpDialogLayout";

const history = createBrowserHistory();

const Routes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dialogState = useSelector(
    (state) => state.rootReducer.dialogState.isDialogOpen
  );
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );
  const isAuthenticated = useSelector(
    (state) => state.rootReducer.userInfo.isAuthenticated
  );

  return (
    <>
      <RouterRoutes>
        <Route path="/" element={<LandingPage />} />
      </RouterRoutes>
      {dialogState && (
        <FormDialog
          content={
            <SignUpStep
              header={<DialogHeader />}
              content={<SignUpDialogLayout />}
              footer={<DialogFooter currentStep={currentStep} />}
            />
          }
        />
      )}
    </>
  );
};

export default Routes;
