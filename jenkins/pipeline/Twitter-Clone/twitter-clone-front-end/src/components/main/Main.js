import React from "react";
import { useRoutes } from "react-router-dom";
import ForYou from "../../pages/explore/ForYou";
import Trending from "../../pages/explore/Trending";
import RightSideBar from "../sidebars/rightsidebar/RightSideBar";


import MainHeader from "./header/MainHeader";
import TweetsFeed from "./body/TweetsFeed";
import LandingFooter from "../footer/LandingFooter";

const Main = () => {
  return (
    <div className="grow-[2] flex">
      <div className="w-[61.875rem] max-[1090px]:w-[57.5rem] max-[1004px]:w-[600px] flex justify-between ">
        <MainHeader />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Main;
