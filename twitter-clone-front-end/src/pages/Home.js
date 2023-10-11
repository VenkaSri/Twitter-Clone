import React, { useEffect, useState } from "react";

import LoggedInHeader from "../components/header/LoggedInHeader";
import MainContainer from "../components/main/MainContainer";
import Sidebar from "../components/header/Sidebar";
import { MainLayout } from "../components/layout/MainLayout";
import useWindowHeight from "../hooks/useWindowHeight";
import { useMediaQuery } from "@mui/material";
import { HeaderNav } from "../components/header/HeaderNav";
import getIcon from "../utils/icons/iconsutil";
import { useTheme } from "../hooks/useTheme";
import { BottomBar } from "../components/layers/bottombar/BottomBar";
import { TopNav } from "../components/main/maincolumn/TopNav";
import { TweetSectionProvider } from "../context/TweetSectionCtx";
import TweetSection from "../components/main/maincolumn/TweetSection";
import { Timeline } from "../components/home/Timeline";

export const Home = () => {
  const [showHeader, setShowHeader] = useState("");
  const darkMode = useTheme();

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
