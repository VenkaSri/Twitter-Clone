import React from "react";

import Main from "./components/main/Main";
import ReactGA from "react-ga";
import Layer from "./components/main/layers/Layer";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LoggedInHeader from "./components/header/LoggedInHeader";
import LoggedOutHeader from "./components/header/LoggedOutHeader";
import MainContainer from "./components/UI/main/MainContainer";

ReactGA.initialize("UA-255822850-1");

function App() {
  const currStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );
  return (
    <div className="flex flex-col grow">
      <Routes>
        <Route
          path="*"
          element={
            <>
              <div className="flex grow">
                {currStep === 4 ? <LoggedInHeader /> : <LoggedOutHeader />}
                {currStep === 4 ? <MainContainer /> : <Main />}
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
