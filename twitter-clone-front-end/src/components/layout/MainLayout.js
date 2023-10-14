import React, { useEffect } from "react";
import Sidebar from "../header/Sidebar";
import { Outlet } from "react-router-dom";
import { BottomBar } from "../layers/bottombar/BottomBar";

import { useDispatch, useSelector } from "react-redux";
import { useGetAllPostsQuery } from "../../services/post/postApi";
import { loadingSliceActions } from "../../state/loading/loadingSlice";
import App from "../../App";
import { AppProgess } from "../AppProgess";
import { useGetPrincipleUserDetailsQuery } from "../../services/user/userApi";
import { SideColumn } from "../main/sideColumn/SideColumn";
export const MainLayout = (props) => {
  const { isLoading, data, isSuccess } = useGetPrincipleUserDetailsQuery();
  const dispatch = useDispatch();
  const fetchedPrincipleUserDetails = useSelector(
    (state) => state.rootReducer.loadingSlice.fetchedPrincipleUserDetails
  );

  useEffect(() => {
    console.log("hello");
    if (isSuccess) {
      console.log("called");
      console.log(data);
    }
    dispatch(loadingSliceActions.setFetchedPrincipleUserDetails(true));
  }, [data, isSuccess]);

  console.log(fetchedPrincipleUserDetails);

  return (
    <>
      <AppProgess isOpen={!fetchedPrincipleUserDetails} />
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
    </>
  );
};
