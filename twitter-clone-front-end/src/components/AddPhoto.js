import React from "react";
import getIcon from "./UI/icons/iconsutil";
import { type } from "@testing-library/user-event/dist/type";
export const AddPhoto = ({ onClick }) => {
  return (
    <div
      className="w-[44px] h-[44px]  z-10 rounded-full bg-[#0f1419] bg-opacity-75  hover:bg-[#272c30] hover:bg-opacity-75 cursor-pointer flex justify-center items-center"
      onClick={onClick}
    >
      <div className="h-6 w-6  flex">
        {getIcon((type = "Add Photo"), { fill: "#fff" })}
      </div>
    </div>
  );
};
