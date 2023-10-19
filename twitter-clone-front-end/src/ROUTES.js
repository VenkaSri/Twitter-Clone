import React, { useEffect, useState } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";

import { useSelector, useDispatch } from "react-redux";

import { userInfoActions } from "./state/user/userInfo-reducer";

import { getData } from "./services/auth/getData";
import { Dialog } from "./components/Dialog";
import { SignupDialog } from "./pages/modal/SignupDialog";

import { Home } from "./pages/Home";
import { fetchUserDetails, userSliceActions } from "./state/user/userSlice";
import { MainLayout } from "./components/layout/MainLayout";
import { Status } from "./pages/Status";
import { useGetPrincipleUserDetailsQuery } from "./services/user/userApi";
import { loadingSliceActions } from "./state/loading/loadingSlice";
import { AppProgess } from "./components/AppProgess";

const Routes = () => {
  const dispatch = useDispatch();

  const [rootElement, setRootElement] = useState(null);

  const isAuthenticated = useSelector(
    (state) => state.rootReducer.userInfo.isAuthenticated
  );

  const initialAppLoaded = useSelector(
    (state) => state.rootReducer.loadingSlice.initialAppLoaded
  );

  useEffect(() => {
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
      dispatch(loadingSliceActions.setInitialAppLoaded(true));
    };

    checkStatus();
  }, []);

  useEffect(() => {
    if (initialAppLoaded) {
      setRootElement(isAuthenticated ? <MainLayout /> : <LandingPage />);
    } else {
      setRootElement(<AppProgess isOpen />);
    }
  }, [initialAppLoaded, isAuthenticated]);

  return (
    <>
      <RouterRoutes>
        <Route path="/" element={rootElement}>
          <Route path="home" element={<Home />} />
          {isAuthenticated && <Route path="/" element={<Home />} />}
          <Route path="/:username/status/:postId" element={<Status />} />
        </Route>
        <Route path="/i/flow/signup" element={<SignupDialog />} />
      </RouterRoutes>
    </>
  );
};

export default Routes;
