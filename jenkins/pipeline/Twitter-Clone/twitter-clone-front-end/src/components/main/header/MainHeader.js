import React from "react";

import TabButton from "../../UI/button/TabButton";
import TweetsFeed from "../body/TweetsFeed";
import ComposeTweet from "../../user/ComposeTweet";
import { ForYou, Following } from "../../../utils/explore/NavObjects";
import { Route, Routes } from "react-router-dom";
import TweetSection from "../body/TweetSection";

const MainHeader = () => {
  return (
    <div className="flex flex-col bg-white/[.90] sticky top-0 backdrop-blur-[4.7px] border-r border-r-[#eff3f4]">
      <div className="w-[37.375rem] h-[3.313rem] flex">
        <span className="font-cBold self-center pl-[20px] text-[20px]">
          Home
        </span>
      </div>
      <div className="flex border-b border-b-[#eff3f4]">
        <TabButton buttonObject={ForYou} />
        <TabButton buttonObject={Following} />
      </div>
      <TweetSection />
    </div>
  );
};

export default MainHeader;
