import React from "react";

import { HeaderIcon } from "../HeaderIcon";
import { DialogHeaderIcon } from "./DialogHeaderIcon";

export const DialogHeaderContent = ({ content, icon, step }) => {
  return (
    <>
      {icon && <DialogHeaderIcon />}
      <div className="flex flex-grow h-full justify-center items-stretch flex-col">
        {content}
      </div>
    </>
  );
};
