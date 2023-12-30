import Head from "@/components/head/Head";
import { MainSectionHeader } from "@/components/layout/MainSectionHeader";
import { useParams } from "react-router-dom";

export const ProfileNotFound = () => {
  const { username } = useParams();
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
                <div className="h-[137.5px] w-[137.5px] bg-[#16181C] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="mb-3 mt-1">
            <div className="flex flex-col grow overflow-hidden">
              <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-6 text-[20px]">
                <span>@{username}</span>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="font-cR"></div>
          </div>
        </div>
      </div>
      <div className="my-8 mx-auto px-5 flex flex-col">
        <div className="text-[31px] font-cBold leading-9 min-w-0 break-words mb-2 text-left max-w-[350px]">
          <span>This account doesn&apos;t exist</span>
        </div>

        <span className="text-[15px] leading-5 font-cR text-[#71767B]">
          Try searching for another
        </span>
      </div>
    </>
  );
};
