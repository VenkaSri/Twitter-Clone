import React from "react";


import Main from "./components/main/Main";
import RightSideBar from "./components/sidebars/rightsidebar/RightSideBar";
import LandingFooter from "./components/footer/LandingFooterModal";
import ReactGA from "react-ga";
import Header from "./components/header/Header";

ReactGA.initialize("UA-255822850-1");

function App() {
  return (
    <div className="flex grow">
      <Header />
      <Main />
    </div>
  );
}

export default App;
