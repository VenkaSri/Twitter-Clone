import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import ForYou from "../../../pages/explore/ForYou";

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
  ]);
  return (
    <div className="border-r border-r-slate-100">
      <MainHeader />
      {routes}
    </div>
  );
};

export default MainContainer;
