// import Sidebar from "@components/app/header/Sidebar";
import { Outlet } from "react-router-dom";
import { OverlayLoader } from "../dialog/OverlayLoader";
import { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { SideColumn } from "../home/main/sideColumn/SideColumn";

const Sidebar = lazy(() => import("@/components/home/header/Sidebar"));

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex w-full overflow-hidden">
        <header
          className={` dark:bg-black bg-white grow  justify-end  sm:flex hidden`}
        >
          <div className="flex flex-col w-[88px] tablet:w-[275px]  ">
            <div className="h-full fixed top-0 flex flex-col ">
              <Suspense fallback={<OverlayLoader />}>
                <Sidebar />
              </Suspense>
            </div>
          </div>
        </header>
        <main className="flex flex-col items-start grow max-[980px]:grow-[2] max-[680px]:w-full overflow-y-auto overflow-x-hidden dark:bg-black">
          <div
            className={`flex w-[990px] max-[1092px]:w-[920px] justify-between  grow max-[980px]:w-[600px] max-[680px]:w-full `}
          >
            <div className="main--mainColumn border-l dark:border-l-[#2f3336] border-r dark:border-r-[#2f3336]">
              <Outlet />
            </div>

            <SideColumn />
          </div>
        </main>

        {/* <BottomBar /> */}
      </div>
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
