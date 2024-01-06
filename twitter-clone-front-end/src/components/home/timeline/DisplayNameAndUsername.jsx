import { ProfilePopover } from "@/components/ProfilePopover";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const DisplayNameAndUsername = ({ userData }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <div className="overflow-hidden">
        <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
          <div
            className="inline hover:underline underline-offset-2"
            role="link"
          >
            <ProfilePopover userDetails={userData}>
              <Link
                to={`/${userData.username}`}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                {userData.name}
              </Link>
            </ProfilePopover>
            &nbsp;
          </div>
          <ProfilePopover userDetails={userData}>
            <Link
              to={`/${userData.username}`}
              className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cReg leading-5"
            >
              &nbsp;@{userData.username}
            </Link>
          </ProfilePopover>
        </div>
      </div>
    </>
  );
};

DisplayNameAndUsername.propTypes = {
  userData: PropTypes.object,
};
