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
import { DialogLoading } from "./components/dialog/DialogLoading";
import { reducerInfoActions } from "./state/app/loading/dialog/signup/reducer";
import LoggedInHeader from "./components/header/LoggedInHeader";
import MainContainer from "./components/UI/main/MainContainer";
import axios from "axios";
import { userInfoActions } from "./state/user/userInfo-reducer";
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
  const isLoading = useSelector(
    (state) => state.rootReducer.loadingState.isLoading
  );
  const loginState = useSelector(
    (state) => state.rootReducer.loginState.isLoggedIn
  );
  const reg = useSelector(
    (state) => state.rootReducer.loadingState.isRegistrationComplete
  );

  const isAuthenticated = useSelector(
    (state) => state.rootReducer.userInfo.isAuthenticated
  );

  useEffect(() => {
    // Make an authenticated request to your server to get authentication status
    axios
      .get("http://localhost:8080/api/auth/status", { withCredentials: true })
      .then((response) => {
        dispatch(userInfoActions.setAuthentication(true));
      })
      .catch((error) => {
        dispatch(userInfoActions.setAuthentication(false));
      });
  }, []);

  useEffect(() => {
    if (reg && loginState) {
      dispatch(reducerInfoActions.setLoading(false));
    }
  }, [reg, loginState, dispatch]);
  const dialogContent = isLoading ? (
    <DialogLoading />
  ) : (
    <SignUpStep
      header={<DialogHeader />}
      content={<SignUpDialogLayout />}
      footer={<DialogFooter currentStep={currentStep} />}
    />
  );

  return (
    <>
      <RouterRoutes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <div className="flex grow">
                  <LoggedInHeader />
                  <MainContainer />
                </div>
              </>
            ) : (
              <LandingPage />
            )
          }
        />
      </RouterRoutes>
      {dialogState && <FormDialog content={dialogContent} />}
    </>
  );
};

export default Routes;
