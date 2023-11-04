import { ProfilePopover } from "@/components/ProfilePopover";
import { useGetUserByIDQuery } from "@/services/userApi";
import { useState } from "react";

export const DisplayNameAndUsername = ({ userData }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const {
    data: user,
    isLoading: userLoading,
    isSuccess,
    isError: userError,
  } = useGetUserByIDQuery(userData.id);

  return (
    <>
      <ProfilePopover userId={user}>
        <div className="overflow-hidden ">
          <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
            <div
              className="inline hover:underline underline-offset-2"
              role="link"
            >
              <span
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                {isSuccess && user.name}
              </span>
              &nbsp;
            </div>

            <span className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cReg leading-5">
              @{isSuccess && user.username}
            </span>
          </div>
        </div>
      </ProfilePopover>
    </>
  );
};
