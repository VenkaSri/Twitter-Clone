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
import DialogHeader from "./components/dialog/DialogHeader";
import { DialogLoading } from "./components/dialog/DialogLoading";
import { reducerInfoActions } from "./state/app/loading/dialog/signup/reducer";
import LoggedInHeader from "./components/header/LoggedInHeader";
import MainContainer from "./components/UI/main/MainContainer";
import axios from "axios";
import { userInfoActions } from "./state/user/userInfo-reducer";
import { LogoProgress } from "./components/layer/LogoProgress";
import { loadingReducerInfoActions } from "./state/app/loading/loading-reducer";

const Routes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dialogState = useSelector(
    (state) => state.rootReducer.dialogState.isDialogOpen
  );
  const error = useSelector((state) => state.rootReducer.dialogState.error);

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

  const isLoaded = useSelector(
    (state) => state.rootReducer.appLoading.isPageLoaded
  );

  const authType = useSelector(
    (state) => state.rootReducer.dialogState.authType
  );

  const checkingIndentifier = useSelector(
    (state) => state.rootReducer.rootLoading.loginLoading.userExists
  );

  const doesUserExist = useSelector(
    (state) => state.rootReducer.loginState.doesUserExist
  );

  useEffect(() => {
    // Make an authenticated request to your server to get authentication status
    axios
      .get("http://localhost:8080/api/auth/status", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        dispatch(
          userInfoActions.setAuthentication(response.data.isAuthenticated)
        );
        dispatch(loadingReducerInfoActions.setIsPageLoaded(true));
      })
      .catch((error) => {
        dispatch(loadingReducerInfoActions.setIsPageLoaded(true));
      });
  }, []);

  // const dialogContent =
  //   isLoading || checkingIndentifier ? (
  //     <DialogLoading />
  //   ) : authType === "SIGN_UP" ? (
  //     <SignUpStep header={<DialogHeader />} content={<DialogFormLayout />} />
  //   ) : (
  //     <SignUpStep
  //       header={<LoginHeader />}
  //       content={doesUserExist ? <DialogFormLayout /> : <LoginHome />}
  //     />
  //   );

  return (
    <>
      <RouterRoutes>
        <Route
          path="/"
          element={
            isLoaded ? (
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
            ) : (
              <LogoProgress />
            )
          }
        />
      </RouterRoutes>
      {/* {dialogState && <FormDialog content={dialogContent} />} */}
      {/* {error && (
        <CustomDialog
          content={
            <PopupErrorMessage
              message={"Sorry, we could not find your account."}
            />
          }
          CustomPaperProps={{
            sx: {
              boxShadow: "none",
              position: "absolute",
              bottom: "1%",
              transition: "none",
            },
          }}
        />
      )} */}
    </>
  );
};

export default Routes;
