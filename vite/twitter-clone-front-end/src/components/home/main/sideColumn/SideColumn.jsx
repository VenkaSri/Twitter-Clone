import { TextField } from "@mui/material";
import React from "react";

export const SideColumn = () => {
  return (
    <div className="w-[350px] mr-[10px] max-[1092px]:w-[290px] max-[1002px]:hidden pt-3 pb-16">
      <div className="mb-4 w-full h-[53px] flex items-center z-[2]">
        {/* <SearchBar /> */}
      </div>
      <SideColumnCard title={"Check out the repo"}>
        <div className="flex-col-container px-4 py-3">Hello</div>
      </SideColumnCard>
      <SideColumnCard title={"What's happening"}>
        <div className="flex-col-container px-4 py-3">Hello</div>
      </SideColumnCard>
      <SideColumnCard title={"Who to follow"}>
        <div className="flex-col-container px-4 py-3">Hello</div>
      </SideColumnCard>
    </div>
  );
};

const SideColumnCard = ({ children, title }) => {
  return (
    <div className="mb-4 bg-[#f7f9f9] rounded-2xl dark:bg-[#16181c]">
      <div className="px-4 py-3">
        <h2 className="leading-6 text-[20px]  font-cBold">{title}</h2>
      </div>
      {children}
    </div>
  );
};
