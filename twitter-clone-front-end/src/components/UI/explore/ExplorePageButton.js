import React from "react";

const ExplorePageButton = (props) => {
  return (
    <div className="cursor-pointer group h-13.5 pl-7 pr-7 w-fit hover:bg-[#E7E7E8] flex items-center justify-center">
      <p className="rounded border-[#1D9BF0] h-full flex items-center justify-center font-cReg text-slate-500 font-bold pt-1 text-ssm">
        {props.name}
      </p>
    </div>
  );
};

export default ExplorePageButton;
