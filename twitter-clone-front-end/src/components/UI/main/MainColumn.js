import React from "react";

const Tabs = () => {
  return (
    <div className="bg-white max-w-[600px]">
      <div className="h-[53px] w-full bt flex px-4 items-center">
        <div className="text-black text-[20px] leading-6 font-cBold ">
          <span className="">Home</span>
        </div>
      </div>
      <div className="h-[53px] w-full bt flex px-4 items-center">
        <div className="text-black text-[20px] leading-6 font-cBold ">
          <span className="">Home</span>
        </div>
      </div>
    </div>
  );
};

export const MainColumn = () => {
  return (
    <div className="main--mainColumn">
      <Tabs />
    </div>
  );
};
