import React from "react";
import ProfilePicture from "../ProfilePicture";
import defaultAVI from "../../assets/images/avatars/default_avi.png";
import getIcon from "../../utils/icons/iconsutil";
import { UserProfile } from "../UserProfile";
import { useTheme } from "styled-components";
import { useSession } from "../../hooks/useSession";

export const AccountMenu = () => {
  const darkMode = useTheme();
  const { photoSRC } = useSession();
  return (
    <>
      <div className="my-3  flex items-center justify-center">
        <div className="rounded-full max-w-full flex  p-3 dark:hover:bg-[#191919] hover:bg-[var(--primary-hov-bg-color)] cursor-pointer  items-center">
          <div className="w-[40px]">
            <ProfilePicture source={photoSRC} size={40} />
          </div>
          <div className="flex-col-container overflow-hidden shrink-1 tablet:block hidden">
            <UserProfile isAuthUser />
          </div>
          <div className=" flex items-center tablet:block hidden">
            {getIcon("Ellipsis", {
              height: 18.75,
              fill: darkMode ? "white" : "black",
            })}
          </div>
        </div>
      </div>
    </>
  );
};
