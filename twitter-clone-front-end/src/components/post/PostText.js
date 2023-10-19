import React from "react";

export const PostText = ({ text }) => {
  return (
    <div className=" flex grow">
      <div className="flex leading-6 text-[17px] font-cReg ">
        <span>{text}</span>
      </div>
    </div>
  );
};
