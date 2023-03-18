import React from "react";

import Main from "./components/main/Main";
import ReactGA from "react-ga";
import Header from "./components/header/Header";
import Layer from "./components/main/layers/Layer";
import { Route, Routes } from "react-router-dom";

ReactGA.initialize("UA-255822850-1");

function App() {

  return (
    <div className="flex flex-col grow">
      <Routes>
        <Route
          path="*"
          element={
            <>
              <div className="flex grow">
                <Header />
                <Main />
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
