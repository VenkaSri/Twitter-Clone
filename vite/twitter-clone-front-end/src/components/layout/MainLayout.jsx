import Sidebar from "@components/app/header/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="flex w-full overflow-hidden">
        <header
          className={` dark:bg-black bg-white grow  justify-end flex sm:flex hidden`}
        >
          <div className="flex flex-col w-[275px] tablet:w-[275px]  ">
            <div className="h-full fixed top-0 flex flex-col ">
              <Sidebar />
            </div>
          </div>
        </header>
        <main className="flex flex-col items-start grow max-[980px]:grow-[2] max-[680px]:w-full overflow-y-auto overflow-x-hidden dark:bg-black">
          <div
            className={`flex w-[990px] max-[1092px]:w-[920px] justify-between  grow max-[980px]:w-[600px] max-[680px]:w-full `}
          >
            <div className="main--mainColumn">
              <Outlet />
            </div>

            {/* <SideColumn /> */}
          </div>
        </main>

        {/* <BottomBar /> */}
      </div>
    </>
  );
};

export default MainLayout;