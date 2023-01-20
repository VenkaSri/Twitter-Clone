import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";

import MainHeader from "./MainHeader";
import TweetsFeed from "./tweets/TweetsFeed";

const MainContainer = () => {
  let routes = useRoutes([
    {
      path: "/explore/tabs/for-you",
      element: <TweetsFeed />,
    },
    {
      path: "/",
      element: <TweetsFeed />,
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
