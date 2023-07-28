import React from "react";

import TabButton from "../../UI/button/TabButton";
import TweetsFeed from "../body/TweetsFeed";
import ComposeTweet from "../../user/ComposeTweet";
import { ForYou, Following } from "../../../utils/explore/NavObjects";
import { Route, Routes } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="flex flex-col bg-white/[.90] sticky top-0 backdrop-blur-[4.7px] border-r border-r-[#f7f9f9]">
      <div className="w-[37.375rem] h-[3.313rem] flex">
        <span className="font-cBold self-center pl-[20px] text-[20px]">
          Home
        </span>
      </div>
      <div className="flex">
        <TabButton buttonObject={ForYou} />
        <TabButton buttonObject={Following} />
      </div>
      <div className="">
        <ComposeTweet />
      </div>
    </div>
  );
};

export default MainHeader;
