import React from "react";

import Main from "./components/main/Main";
import RightSideBar from "./components/sidebars/rightsidebar/RightSideBar";
import LandingFooter from "./components/footer/LandingFooter";
import ReactGA from "react-ga";
import Header from "./components/header/Header";
import Layer from "./components/main/layers/Layer";
import { Dialog } from "@mui/material";

ReactGA.initialize("UA-255822850-1");

function App() {

  return (
    <div className="flex flex-col grow">
      <div className="flex grow">
        <Header />
        <Main />
      </div>
      <div className="w-screen flex" >
        <Layer />
      </div>
    </div>
  );
}

export default App;
