import React from "react";

import Header from "./components/sidebars/leftsidebar/Header";
import MainContainer from "./components/main/body/MainContainer";
import RightSideBar from "./components/sidebars/rightsidebar/RightSideBar";
import LandingFooter from "./components/footer/LandingFooterModal";

function App() {
  return (
    <React.Fragment>
      <div className="max-w-screen-2xl m-auto flex dark:bg-black">
          <Header />
          <MainContainer />
          <RightSideBar />
      </div>
      <LandingFooter />
    </React.Fragment>
  );
}

export default App;
