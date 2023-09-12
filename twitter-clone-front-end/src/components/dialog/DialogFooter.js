import React from "react";
import { useSelector } from "react-redux";
import { LoginFooter } from "./login/LoginFooter";
import { SignupFooter } from "./signup/SignupFooter";

export const DialogFooter = ({ type }) => {
  let footer = null;

  const dialogBodyOverFlowing = useSelector(
    (state) => state.rootReducer.dialogState.dialogBodyOverFlowing
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
      className={`flex-col-container dark:bg-[#000] px-20 ${overflowClass} max-w-[600px]
      `}
    >
      <div className="flex-col-container  ">{footer}</div>
    </div>
  );
};
