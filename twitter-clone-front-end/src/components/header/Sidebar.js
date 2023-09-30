import React, { useEffect, useState } from "react";

import HeaderLinkButton from "./HeaderLinkButton";
import { useSelector } from "react-redux";
import SVG from "../UI/app/SVG";
import { LOGO } from "../../utils/ButtonLinkObjects";
import UserInfo from "../UserInfo";
import getIcon from "../../utils/icons/iconsutil";
import { width } from "@mui/system";
import { HeaderButton } from "./HeaderButton";
import { HeaderNav } from "./HeaderNav";
import { useTheme } from "../../hooks/useTheme";
import useWindowHeight from "../../hooks/useWindowHeight";
import ProfilePicture from "../ProfilePicture";
import defaultAVI from "../../assets/images/avatars/default_avi.png";
import { UserProfile } from "../UserProfile";

const Sidebar = ({ headerButtonContent }) => {
  const darkMode = useTheme();

  return (
    <div className="w-[275px] overflow-y-auto  flex-col-container  justify-between px-2 h-full">
      <div className="">
        <div className="header--logo">
          {getIcon("X_LOGO", {
            width: "#fff",
            height: 30,
            fill: darkMode ? "white" : "black",
          })}
        </div>
        <div className="mt-0.5 mb-1">
          <HeaderNav />
        </div>
      </div>
      <div className="my-3 flex-col-container border border-[green]">
        <div className="rounded-full flex p-3 border border-[blue]">
          <ProfilePicture size={40} source={defaultAVI} />
          <UserProfile />
          {/* <div className="border bor">
            <UserProfile />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
