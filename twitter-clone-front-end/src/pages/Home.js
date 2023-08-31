import React from "react";

import LoggedInHeader from "../components/header/LoggedInHeader";
import MainContainer from "../components/UI/main/MainContainer";

export const Home = () => {
  return (
    <div className="flex-col-container grow border border-[red] ">
      <div className="flex grow">
        <LoggedInHeader />
        <MainContainer />
      </div>
    </div>
  );
};
