import React from "react";

export const DialogContentHeading = ({ text }) => {
  return (
    <div className="flex-col-container ">
      <div className="flex-col-container my-5">
        <h1 className="text-[31px] leading-8 font-cMed font-bold break-words inline dark:text-[#fff]">
          <span>{text}</span>
        </h1>
      </div>
    </div>
  );
};
