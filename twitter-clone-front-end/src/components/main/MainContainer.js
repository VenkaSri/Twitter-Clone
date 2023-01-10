import React from "react";

import MainHeader from "./MainHeader";  
import TweetsFeed from "./tweets/TweetsFeed";

const MainContainer = () => {
  return (
    <div className="border-r border-r-slate-100 w-130 mt-1">
       <MainHeader />
       <TweetsFeed />
    </div>
  );
};

export default MainContainer;
