import React from "react";
import { useSession } from "../hooks/useSession";

export const UserProfile = () => {
  const { username, name, email } = useSession();
  return (
    <div className="flex-col-container grow overflow-hidden mx-3">
      <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
        <span>{name}</span>
      </div>
      <div className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cReg leading-5">
        <span>@{username}</span>
      </div>
    </div>
  );
};
