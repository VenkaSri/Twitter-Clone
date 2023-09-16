import React from "react";

import { HeaderIcon } from "../HeaderIcon";
import { DialogHeaderIcon } from "./DialogHeaderIcon";

export const DialogHeaderContent = ({ content, icon, button }) => {
  return (
    <>
      {icon && <DialogHeaderIcon />}
      <div className="flex flex-grow h-full justify-center items-stretch flex-col">
        {content}
      </div>
      {button && (
        <div className="flex-col-container min-h-[32px] min-w-[32px] self-stretch justify-center items-center ">
          <div className="min-h-[32px] min-w-[32px] rounded-full px-4 bg-black flex justify-center items-center leading-5 border border-black  font-cReg text-[15px]">
            <span className="text-white font-bold">Apply</span>
          </div>
        </div>
      )}
    </>
  );
};
