import React from "react";

import TweetMore from "../../tweet/tweet-header/TweetMore";

const Trend = () => {
  return (
    <div className="h-20 flex flex-col justify-center pl-4 cursor-pointer hover:bg-[#F7F7F7]">
      <div className="font-cReg  text-[#536471] text-[0.8rem] flex items-center justify-between">
        <span className="">Entertainment · Trending </span>
        <TweetMore />
      </div>
      <div className="font-cMed -mt-2">Maya Rudolph</div>
      <div className="font-cReg  text-[#536471] text-sm">13.1K Tweets</div>
    </div>
  );
};

export default Trend;
