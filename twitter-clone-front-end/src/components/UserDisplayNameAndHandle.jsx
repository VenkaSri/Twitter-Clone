import { useSession } from "@/hooks/useSession";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserDisplayNameAndHandle = ({ id, principleUser }) => {
  const [displayName, setDisplayName] = useState("");
  const [handle, setHandle] = useState("");
  const { username, name } = useSession();

  useEffect(() => {
    if (principleUser) {
      setDisplayName(name);
      setHandle(username);
    }
  }, [principleUser, name, username]);

  return (
    <div className="flex flex-col grow overflow-hidden">
      <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
        <span>{displayName}</span>
      </div>
      <div className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cR leading-5 mt-0.5">
        <span>@{handle}</span>
      </div>
    </div>
  );
};

export default UserDisplayNameAndHandle;

UserDisplayNameAndHandle.propTypes = {
  principleUser: PropTypes.bool,
  id: PropTypes.number,
};
