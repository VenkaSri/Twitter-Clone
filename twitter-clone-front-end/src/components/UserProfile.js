import React from "react";

export const UserProfile = () => {
  return (
    <div className="flex-col-container grow overflow-hidden mx-3">
      <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
        <span>Pneumonoultramicroscopicsilicovolcanoconiosis</span>
      </div>
      <div className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cReg leading-5">
        <span>@1234567890qwert</span>
      </div>
    </div>
  );
};
