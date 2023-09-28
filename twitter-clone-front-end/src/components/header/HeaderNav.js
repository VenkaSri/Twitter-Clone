import React from "react";
import getIcon from "../../utils/icons/iconsutil";

export const HeaderNav = () => {
  return (
    <>
      <div className=" w-full h-full flex mt-0.5 mb-1">
        <nav className="flex-col-container grow">
          <a className="w-full  flex-col-container items-start">
            <div className="flex  items-center justify-center p-3 max-w-full rounded-full hover:bg-[#E6E7E7] cursor-pointer">
              <div>
                {getIcon("Home", { width: 26.25, height: 26.25, fill: "#000" })}
              </div>
              <div className="leading-6 mr-4 ml-5 text-[20px] font-cReg">
                <span>Home</span>
              </div>
            </div>
          </a>
        </nav>
      </div>
    </>
  );
};
