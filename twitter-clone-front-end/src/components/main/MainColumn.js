import React from "react";
import { TopNav } from "./maincolumn/TopNav";
import TweetOptions from "./maincolumn/TweetOptions";
import TweetSection from "./maincolumn/TweetSection";
import { TweetSectionProvider } from "../../context/TweetSectionCtx";

export const MainColumn = () => {
  return (
    <div className="main--mainColumn">
      <div className="sticky -top-[0.5px] bg-white/[.85] dark:bg-black/[.65] dark:bg-black z-[2]  backdrop-blur-md">
        <TopNav />
      </div>
      <div className="z-[1] ">
        <TweetSectionProvider>
          <TweetSection />
        </TweetSectionProvider>
      </div>
    </div>
  );
};
