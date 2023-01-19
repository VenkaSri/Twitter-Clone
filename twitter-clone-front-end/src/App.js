import React from "react";

import Header from "./components/sidebars/Header";
import MainContainer from "./components/main/MainContainer";
import RightSideBar from "./components/sidebars/rightsidebar/RightSideBar";
import LandingFooter from "./components/footer/LandingFooter";

function App() {
  return (
    <React.Fragment>
      <div className="max-w-screen-2xl m-auto flex flex-col h-full dark:bg-black">
        <div className="flex">
          <Header />
          <MainContainer />
          <RightSideBar />
        </div>
        <div className="mt-auto">
        <LandingFooter />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
