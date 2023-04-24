import React, { useEffect } from "react";

import Main from "./components/main/Main";
import ReactGA from "react-ga";
import Layer from "./components/main/layers/Layer";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoggedInHeader from "./components/header/LoggedInHeader";
import LoggedOutHeader from "./components/header/LoggedOutHeader";
import MainContainer from "./components/UI/main/MainContainer";
import fetchFollowers from "./components/user/followers-api";
import { userInfoActions } from "./state/authentication/userInfo-reducer";

ReactGA.initialize("UA-255822850-1");

function App() {
  const dispatch = useDispatch();
  const isUserAuthenticated = useSelector(
    (state) => state.rootReducer.userInfo.isAuthenticated
  );

  const email = useSelector(
    (state) => state.rootReducer.userInfo.email
  );

  useEffect(() => {
    const fetchData = async () => {
      const users = await fetchFollowers(email);
      console.log(users);
    };
    fetchData();
  }, []);
  

  return (
    <div className="flex flex-col grow">
      <Routes>
        <Route
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
        />
      </Routes>
    </div>
  );
}

export default App;
