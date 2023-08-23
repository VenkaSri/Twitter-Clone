import React, { useEffect } from "react";

import Main from "./components/main/Main";
import ReactGA from "react-ga";
import Layer from "./components/main/layers/Layer";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoggedInHeader from "./components/header/LoggedInHeader";
import LoggedOutHeader from "./components/header/LoggedOutHeader";
import MainContainer from "./components/UI/main/MainContainer";
import { fetchAllAccounts, fetchFollowers } from "./components/user/api";
import { globalInfoActions } from "./state/app/global-reducer";
import { userInfoActions } from "./state/user/userInfo-reducer";
import LandingPage from "./pages/LandingPage";

ReactGA.initialize("UA-255822850-1");

function App() {
  const dispatch = useDispatch();
  const isUserAuthenticated = useSelector(
    (state) => state.rootReducer.userInfo.isAuthenticated
  );

  const userInfo = useSelector((state) => state.rootReducer.userInfo);
  useEffect(() => {
    const fetchData = async () => {
      const allAccounts = await fetchAllAccounts(userInfo.email);
      const followers = await fetchFollowers(userInfo.userId);
      dispatch(globalInfoActions.setAllAccounts(allAccounts));
      dispatch(userInfoActions.setFollowers(followers));
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col grow">
      <Routes>
        <Route path="/" Component={LandingPage} />
        {/* <Route
          path="*"
          element={
            <>
              <div className="flex grow">
                {isUserAuthenticated ? <LoggedInHeader /> : <LoggedOutHeader />}
                {isUserAuthenticated ? <MainContainer /> : <Main />}
              </div>
              <div className="w-screen flex">
                <Layer />
              </div>
            </>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
