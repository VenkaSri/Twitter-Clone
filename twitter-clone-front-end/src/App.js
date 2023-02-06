import React from "react";

import Main from "./components/main/Main";
import RightSideBar from "./components/sidebars/rightsidebar/RightSideBar";
import LandingFooter from "./components/footer/LandingFooter";
import ReactGA from "react-ga";
import Header from "./components/header/Header";
import Layer from "./components/main/layers/Layer";

ReactGA.initialize("UA-255822850-1");

function App() {
  return (
    <div className="flex flex-col grow ">
      <div className="h-screen w-screen absolute flex" id="modals">
        <Layer />
      </div>
      <div className="flex grow z-10">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
