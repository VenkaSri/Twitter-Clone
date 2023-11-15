import React from "react";

const DialogContentHeading = ({title, subheading}) => {
  return (
    <div className="min-h-[76px] px-[5rem]">
      <h1 className="font-cBold text-[2rem]">{title}</h1>
      <p className="text-[13px] font-cLight text-[#536471] leading-none">
        {subheading}
      </p>
    </div>
  );
};

export default DialogContentHeading;
