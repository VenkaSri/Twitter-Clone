import React from "react";

import { useMediaQuery } from "@mui/material";
import getIcon from "../UI/icons/iconsutil";
import LoginHeader from "./login/LoginHeader";
import SignUpHeader from "./signup/SignUpHeader";

const DialogHeader = ({ type }) => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  let header = null;

  switch (type) {
    case "LOGIN":
      header = <LoginHeader />;
      break;
    case "SIGNUP":
      header = <SignUpHeader />;
      break;
    default:
      break;
  }

  return (
    <div className="h-[53px] flex bg-[#fff] dark:bg-[#000] px-[16px]">
      <div
        className={`flex items-center sticky top-0  ${
          fullScreen ? "mx-[51px]" : "mx-0"
        } w-full justify-center align-center`}
      >
        {header}
      </div>
    </div>
  );
};

export default DialogHeader;
