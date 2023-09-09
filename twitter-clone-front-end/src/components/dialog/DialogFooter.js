import React from "react";
import { LoginFooter } from "./login/LoginFooter";

export const DialogFooter = ({ type }) => {
  let footer = null;

  switch (type) {
    case "LOGIN_PASSWORD_INPUT":
      footer = <LoginFooter />;
      break;
    default:
      break;
  }

  return (
    <div
      className={`flex-col-container dark:bg-[#000] px-20
      `}
    >
      <div className="flex-col-container ">
        <div
          className={`flex-col-container min-h-[52px] min-w-[52px] rounded-full `}
        >
          <div className="my-6 flex-col-container flex-grow ">
            <div className="flex-col-container min-h-[52px] min-w-[52px]">
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
