import React from "react";
import { useRoutes } from "react-router-dom";
import ForYou from "../../../pages/explore/ForYou";
import Trending from "../../../pages/explore/Trending";


import MainHeader from "../header/MainHeader";
import TweetsFeed from "./TweetsFeed";

const MainContainer = () => {
  let routes = useRoutes([
    {
      path: "/explore/tabs/for-you",
      element: <TweetsFeed />,
    },
    {
      path: "/",
      element: <ForYou />,
    },
    {
      path: "/explore/tabs/trending",
      element: <Trending />,
    },
  ]);
  return (
    <div className="border-r border-r-slate-100">
      <MainHeader />
      {routes}
    </div>
  );
};

export default MainContainer;
