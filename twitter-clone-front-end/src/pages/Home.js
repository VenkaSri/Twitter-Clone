import React, { useEffect, useState } from "react";

import { useTheme } from "../hooks/useTheme";
import { BottomBar } from "../components/layers/bottombar/BottomBar";
import { TopNav } from "../components/main/maincolumn/TopNav";
import { TweetSectionProvider } from "../context/TweetSectionCtx";
import TweetSection from "../components/main/maincolumn/TweetSection";
import { Timeline } from "../components/home/Timeline";

import { useDispatch } from "react-redux";
import { fetchUserDetails } from "../state/user/userSlice";
import { useGetPrincipleUserDetailsQuery } from "../services/user/userApi";
import { loadingSliceActions } from "../state/loading/loadingSlice";

export const Home = () => {
  const [showHeader, setShowHeader] = useState("");
  const darkMode = useTheme();
  const dispatch = useDispatch();

  return (
    <>
      <div className="sticky -top-[0.5px] bg-white/[.85] dark:bg-black/[.65] dark:bg-black z-[2]  backdrop-blur-md">
        <TopNav />
      </div>
      <div className="z-[1] ">
        <TweetSectionProvider>
          <TweetSection />
        </TweetSectionProvider>
      </div>
      <Timeline />
    </>
  );
};
