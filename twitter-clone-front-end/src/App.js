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
import { AppInitializer } from "./AppInitializer";

ReactGA.initialize("UA-255822850-1");

function App() {
  return (
    <div className="flex flex-col grow">
      <AppInitializer />
      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </div>
  );
}

export default App;
