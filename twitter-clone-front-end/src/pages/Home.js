import React, { useEffect, useState } from "react";

import LoggedInHeader from "../components/header/LoggedInHeader";
import MainContainer from "../components/UI/main/MainContainer";
import Sidebar from "../components/header/Sidebar";
import { MainLayout } from "../components/layout/MainLayout";
import useWindowHeight from "../hooks/useWindowHeight";
import { useMediaQuery } from "@mui/material";
import { HeaderNav } from "../components/header/HeaderNav";
import getIcon from "../utils/icons/iconsutil";
import { useTheme } from "../hooks/useTheme";
import { BottomBar } from "../components/layers/bottombar/BottomBar";

export const Home = () => {
  const [showHeader, setShowHeader] = useState("");
  const darkMode = useTheme();
  const windowHeight = useWindowHeight();
  // const fullScreen = useMediaQuery("(max-width:702px)");

  useEffect(() => {
    if (windowHeight < 500) {
      setShowHeader("hidden");
    } else {
      setShowHeader("");
    }
  }, [windowHeight]);
  return (
    <MainLayout>
      <header
        className={` bg-[black] flex-col-container grow items-end  ${showHeader}`}
      >
        <div className="flex-col-container w-[275px] ">
          <div className="h-full fixed top-0 flex-col-container">
            <Sidebar />
          </div>
        </div>
      </header>
      <main className="flex-col-container grow shrink-1 items-start">
        {/* <div className="flex-col-container grow w-[990px] ">
          <MainContainer />
        </div> */}

        <MainContainer />
      </main>
      <BottomBar />
    </MainLayout>
  );
};
