import React from "react";
import { useRoutes } from "react-router-dom";
import ForYou from "../../pages/explore/ForYou";
import Trending from "../../pages/explore/Trending";
import RightSideBar from "../sidebars/rightsidebar/RightSideBar";


import MainHeader from "./header/MainHeader";
import TweetsFeed from "./body/TweetsFeed";

const Main = () => {
  let routes = useRoutes([
    {
      path: "/explore/tabs/for-you",
      element: <TweetsFeed />,
    },
    {
      path: "/Twitter-Clone",
      element: <ForYou />,
    },
    {
      path: "/explore/tabs/trending",
      element: <Trending />,
    },
  ]);
  return (
    <div className="grow-[2.9] flex">
      <div className="w-[61.875rem] flex justify-between">
        <MainHeader />
        <RightSideBar />
      </div>
       
    </div>
  );
};

export default Main;
