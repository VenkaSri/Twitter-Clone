import React from "react";

import LoggedInHeader from "../components/header/LoggedInHeader";
import MainContainer from "../components/UI/main/MainContainer";
import Sidebar from "../components/header/Sidebar";
import { MainLayout } from "../components/layout/MainLayout";

export const Home = () => {
  return (
    <MainLayout>
      {/* <div className="flex grow  bg-black border border-[red]">
        <div className="grow flex justify-end dark:bg-black">
          <Header />
        </div>
        <MainContainer />
      </div> */}
      <header className=" h-full  w-full basis-3/6 bg-[black] flex justify-end">
        <Sidebar />
      </header>
      <main className="h-full w-full "></main>
    </MainLayout>
  );
};
