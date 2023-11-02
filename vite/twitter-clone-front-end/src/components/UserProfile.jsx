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
    } else {
      setUserName(userData.name);
      setUserUsername(userData.username);
    }
  }, [isAuthUser]);

  return (
    <div className="flex-col-container grow overflow-hidden  px-[15px]">
      <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
        <span>Captain Bartholomew's Magical Underwater Kingdomff</span>
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
