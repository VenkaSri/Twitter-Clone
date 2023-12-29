import ProfilePicture from "@/components/ProfilePicture";
import Head from "@/components/head/Head";
import { MainSectionHeader } from "@/components/layout/MainSectionHeader";
import React from "react";

export const ProfileNotFound = () => {
  return (
    <>
      <Head title="Profile" />
      <MainSectionHeader text="Profile"></MainSectionHeader>
      <div className="flex flex-col">
        <div className="bg-[#cfd9de] dark:bg-[#333639] h-[185px] flex grow">
          <div className="w-full pb-33"></div>
          <div className="absolute h-full"></div>
        </div>
        <div className="pt-3 px-4 mb-4">
          <div className="flex relative items-start justify-between">
            <div className="w-[145.5px] h-[145.5px] -mt-[15%]  mb-3 overflow-visible  rounded-full  dark:bg-black bg-white relative flex justify-center items-center">
              <div className="">
                <ProfilePicture size={141.5} />
              </div>
            </div>
          </div>
          <div className="mb-3 mt-1">
            <div className="flex flex-col grow overflow-hidden">
              <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-6 text-[20px]">
                <span>@fadf</span>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="font-cR"></div>
          </div>
        </div>
      </div>
      <div className="br my-8 px-5 mx-auto">
        <span className="text-[31px] font-cBold">
          This account doesn't exist
        </span>
      </div>
    </>
  );
};
