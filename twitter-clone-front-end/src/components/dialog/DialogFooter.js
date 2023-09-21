import React from "react";
import { useSelector } from "react-redux";
import { LoginFooter } from "./login/LoginFooter";
import { SignupFooter } from "./signup/SignupFooter";
import { useMediaQuery } from "@mui/material";

export const DialogFooter = ({ type, content }) => {
  let footer = null;
  const fullScreen = useMediaQuery("(max-width:702px)");
  const dialogBodyOverFlowing = useSelector(
    (state) => state.rootReducer.dialogSlice.dialogBodyOverFlowing
  );

  switch (type) {
    case "LOGIN_PASSWORD_INPUT":
      footer = <LoginFooter />;
      break;
    case "SIGNUP":
      footer = <SignupFooter />;
      break;
    default:
      break;
  }
  const overflowClass = dialogBodyOverFlowing ? "shadow-custom-shadow" : "";
  return (
    <div
      className={`flex-col-container dark:bg-[#000] justify-center items-center ${
        fullScreen ? "px-8" : "px-20"
      } ${overflowClass}  z-20
      `}
    >
      <div className="flex-col-container grow w-full">{content}</div>
    </div>
  );
};
