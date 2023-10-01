import React from "react";
import { TopNav } from "./maincolumn/TopNav";
import TweetOptions from "./maincolumn/TweetOptions";
import TweetSection from "./maincolumn/TweetSection";
import { TweetSectionProvider } from "../../context/TweetSectionCtx";

export const MainColumn = () => {
  return (
    <div className="main--mainColumn">
      <TopNav />
      <TweetSectionProvider>
        <TweetSection />
      </TweetSectionProvider>
    </div>
  );
};
