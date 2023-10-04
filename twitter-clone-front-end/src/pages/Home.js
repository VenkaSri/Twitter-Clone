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

export const Home = () => {
  const [showHeader, setShowHeader] = useState("");
  const darkMode = useTheme();

  return (
    <MainLayout>
      <header
        className={` dark:bg-black bg-white grow  justify-end mobile:flex hidden`}
      >
        <div className="flex-col-container w-[275px] tablet:w-[275px] w-[88px] ">
          <div className="h-full fixed top-0 flex-col-container ">
            <Sidebar />
          </div>
        </div>
      </header>
      <main className="flex-col-container items-start grow max-[980px]:grow-[2] max-[680px]:w-full overflow-y-auto overflow-x-hidden">
        {/* <div className="flex-col-container grow w-[990px] ">
          <MainContainer />
        </div> */}

        <MainContainer />
      </main>
      <BottomBar />
    </MainLayout>
  );
};
