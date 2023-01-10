import React from "react";

import MainHeader from "./MainHeader";  
import TweetsFeed from "./TweetsFeed";

const MainContainer = () => {
  return (
    <div className="border-r border-r-slate-200 w-130 mt-1">
       <MainHeader />
       <TweetsFeed />
    </div>
  );
};

export default MainContainer;
