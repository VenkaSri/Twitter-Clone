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
import { getData } from "./services/auth/getData";
import { Dialog } from "./components/Dialog";

const Routes = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.rootReducer.userInfo.isAuthenticated
  );

  useEffect(() => {
    // Make an authenticated request to your server to get authentication status
    const checkStatus = async () => {
      try {
        const result = await getData("/api/auth/auth_status");
        const response = await result.json();

        if (result.status === 200) {
          if (response.validToken) {
            dispatch(userInfoActions.setAuthentication(true));
          } else {
            dispatch(userInfoActions.setAuthentication(false));
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    checkStatus();
    // axios
    //   .get("http://localhost:8080/api/auth/status", { withCredentials: true })
    //   .then((response) => {

    //     dispatch(loadingReducerInfoActions.setIsPageLoaded(true));
    //   })
    //   .catch((error) => {
    //     dispatch(loadingReducerInfoActions.setIsPageLoaded(true));
    //   });
  }, []);

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
        <Route path="/i/flow/signup" element={<Dialog />} />
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
