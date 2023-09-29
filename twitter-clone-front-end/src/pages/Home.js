import React, { useEffect, useState } from "react";

import LoggedInHeader from "../components/header/LoggedInHeader";
import MainContainer from "../components/UI/main/MainContainer";
import Sidebar from "../components/header/Sidebar";
import { MainLayout } from "../components/layout/MainLayout";
import useWindowHeight from "../hooks/useWindowHeight";

export const Home = () => {
  const [showHeader, setShowHeader] = useState("");
  const windowHeight = useWindowHeight();

  useEffect(() => {
    if (windowHeight < 500) {
      setShowHeader("hidden");
    } else {
      setShowHeader("block");
    }
  }, [windowHeight]);
  return (
    <MainLayout>
      <header className={` bg-[black] flex-col-container grow items-end  `}>
        <div className="flex-col-container w-[275px] ">
          <div className="h-full fixed top-0 flex-col-container">
            <Sidebar />
          </div>
        </div>
      </header>
      <main className="flex-col-container grow shrink-1 items-start">
        <div className="flex-col-container grow w-[990px] ">
          <MainContainer />
        </div>
      </main>
    </MainLayout>
  );
};
