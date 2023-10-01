import React, { useEffect, useState } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";

import { useSelector, useDispatch } from "react-redux";

import { userInfoActions } from "./state/user/userInfo-reducer";

import { getData } from "./services/auth/getData";
import { Dialog } from "./components/Dialog";
import { SignupDialog } from "./pages/modal/SignupDialog";

import { Home } from "./pages/Home";

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
  }, []);

  return (
    <>
      <RouterRoutes>
        {/* <Route path="/i/flow/signup" element={<SignupDialog isOpen />} /> */}
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <LandingPage />}
        />
        <Route path="/i/flow/signup" element={<SignupDialog />} />
      </RouterRoutes>
    </>
  );
};

export default Routes;
