import React from "react";
import getIcon from "../components/UI/icons/iconsutil";

export const LandingPage = () => {
  return (
    <div className="h-screen w-screen ">
      <div className="h-screen w-screen flex">
        <div className="flex-1 flex items-center justify-center">
          {getIcon("X_LOGO", { fill: "#000", padding: "32px", height: "50%" })}
        </div>
        <div className="border border-[blue]  p-4 flex flex-col">
          <div className="p-[20px] flex flex-col">
            <span className="font-cHeavy text-[64px] leading-[84px] inline -tracking-[1.2px] my-12">
              Happening now
            </span>
            <div className="mb-8">
              <span>Joing today.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
