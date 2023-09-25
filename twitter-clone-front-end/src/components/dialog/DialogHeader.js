import React from "react";

import { useMediaQuery } from "@mui/material";

const DialogHeader = ({ content }) => {
  const fullScreen = useMediaQuery("(max-width:702px)");

  return (
    <div className="h-[53px] flex bg-[#fff] dark:bg-[#000] px-[16px] ">
      <div
        className={`flex items-center sticky top-0  w-full justify-center align-center `}
      >
        {content}
      </div>
    </div>
  );
};

export default DialogHeader;
