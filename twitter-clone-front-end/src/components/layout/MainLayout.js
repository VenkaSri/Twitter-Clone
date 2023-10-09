import React from "react";
import Sidebar from "../header/Sidebar";
import { BottomBar } from "../layers/bottombar/BottomBar";
import { Outlet } from "react-router-dom";
import { SideColumn } from "../main/SideColumn";
export const MainLayout = (props) => {
  return (
    <div className="flex w-full overflow-hidden">
      <header
        className={` dark:bg-black bg-white grow  justify-end mobile:flex hidden`}
      >
        <div className="flex-col-container w-[275px] tablet:w-[275px] w-[88px] ">
          <div className="h-full fixed top-0 flex-col-container ">
            <Sidebar />
          </div>
        </div>
      </header>
      <main className="flex-col-container items-start grow max-[980px]:grow-[2] max-[680px]:w-full overflow-y-auto overflow-x-hidden dark:bg-black">
        <div
          className={`flex w-[990px] max-[1092px]:w-[920px] justify-between  grow max-[980px]:w-[600px] max-[680px]:w-full `}
        >
          <div className="main--mainColumn">
            <Outlet />
          </div>

          <SideColumn />
        </div>
      </main>

      <BottomBar />
    </div>
  );
};
