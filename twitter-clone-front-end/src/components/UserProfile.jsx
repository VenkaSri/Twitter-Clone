import { useSession } from "@/hooks/useSession";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserProfile = ({ userData, isAuthUser }) => {
  const { username, name } = useSession();
  const [userName, setUserName] = useState("");
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    if (isAuthUser) {
      setUserName(name);
      setUserUsername(username);
    } else if (userData) {
      setUserName(userData.name);
      setUserUsername(userData.username);
    }
  }, [isAuthUser, username, name, userData]);

  return (
    <div className="flex flex-col grow overflow-hidden  px-[15px]">
      <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
        <span>{userName}</span>
      </div>
      <div className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cReg leading-5">
        <span>@{userUsername}</span>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  userData: PropTypes.object,
  isAuthUser: PropTypes.bool,
};
