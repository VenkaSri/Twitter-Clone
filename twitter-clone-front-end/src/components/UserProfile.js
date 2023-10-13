import React, { useEffect, useState } from "react";
import { useSession } from "../hooks/useSession";

export const UserProfile = ({ userData, isAuthUser }) => {
  const { username, name, email } = useSession();
  const [userName, setUserName] = useState("");
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    if (isAuthUser) {
      setUserName(name);
      setUserUsername(username);
    } else {
      setUserName(userData.name);
      setUserUsername(userData.username);
    }
  }, []);

  return (
    <div className="flex-col-container grow overflow-hidden mx-3">
      <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
        <span>{userName}</span>
      </div>
      <div className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cReg leading-5">
        <span>@{userUsername}</span>
      </div>
    </div>
  );
};
