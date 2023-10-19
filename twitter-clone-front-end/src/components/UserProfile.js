import React, { useEffect, useState } from "react";

import { useGetPrincipleUserDetailsQuery } from "../services/user/userApi";

export const UserProfile = ({ userData, isAuthUser }) => {
  const { data, isSuccess } = useGetPrincipleUserDetailsQuery();
  const [userName, setUserName] = useState("");
  const [userUsername, setUserUsername] = useState("");

  console.log(userData);

  useEffect(() => {
    if (isAuthUser) {
      if (isSuccess) {
        setUserName(data.name);
        setUserUsername(data.username);
      }
    } else {
      setUserName(userData.name);
      setUserUsername(userData.username);
    }
  }, [isSuccess]);

  return (
    <div className="flex-col-container grow overflow-hidden  px-[15px]">
      <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
        <span>{userName}</span>
      </div>
      <div className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cReg leading-5">
        <span>@{userUsername}</span>
      </div>
    </div>
  );
};
