import React from "react";

import TabButton from "../../UI/button/TabButton";
import TweetsFeed from "../body/TweetsFeed";
import ComposeTweet from "../../user/ComposeTweet";
import { ForYou, Following } from "../../../utils/explore/NavObjects";
import { Route, Routes } from "react-router-dom";
import TweetSection from "../body/TweetSection";
import { getData } from "../../../services/auth/getData";

const MainHeader = () => {
  const handleClick = async () => {
    localStorage.setItem("timelineContent", "For you");
  };

  console.log();
  return (
    <div className="main--mainColumn  ">
      <div className="sticky -top-[0.5px] ">
        <div className="dark:bg-black/[0.60] backdrop-blur-md z-0">
          <div className="h-[53px] flex-col-container px-4 mx-auto z-[2]">
            <span className="text-white">Home</span>
          </div>
          <div className="flex-col-container mx-auto border-b border-b-[var(--primary-dark-border-color)] z-[3]">
            <nav className="w-full h-14 flex">
              <a
                className="text-white w-full  flex-col-container justify-center items-center cursor-pointer hover:bg-[var(--primary-dark-border-color)]"
                onClick={handleClick}
              >
                <div className=" flex-col-container grow">
                  <div className="flex grow justify-center items-center">
                    For you
                  </div>
                  <div className="bg-[var(--primary-color)]  h-1 rounded-full"></div>
                </div>
              </a>
              <a className="text-white w-full  flex justify-center items-center cursor-pointer hover:bg-[var(--primary-dark-border-color)]">
                Following
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
