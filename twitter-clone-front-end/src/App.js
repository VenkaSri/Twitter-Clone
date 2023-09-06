import React, { useEffect } from "react";

import Main from "./components/main/Main";
import ReactGA from "react-ga";
import { Outlet } from "react-router-dom";
import { AppInitializer } from "./AppInitializer";
import FormDialog from "./components/UI/home/FormDialog";
import Routes from "./ROUTES";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unfollowDialogActions } from "./state/dialog/dialogState-reducer";
import ThemeManager from "./utils/ThemeManager";
import { PopupErrorMessage } from "./components/PopupErrorMessage";

ReactGA.initialize("UA-255822850-1");

function App() {
  return (
    <div className="flex flex-col grow">
      <AppInitializer />
      <Routes />
    </div>
  );
}

export default App;
