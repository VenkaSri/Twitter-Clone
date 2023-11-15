import React from "react";
import MainHeader from "../../main/header/MainHeader";

const MainContainer = () => {
  return (
    <div className="grow-[2] flex">
      <div className="w-[61.875rem] max-[1090px]:w-[57.5rem] max-[1004px]:w-[600px] flex justify-between ">
        <MainHeader />
      </div>
    </div>
  );
};

export default MainContainer;
