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

const Sidebar = ({ headerButtonContent }) => {
  const darkMode = useTheme();

  return (
    <div className="w-[275px] overflow-auto  flex-col-container  justify-between px-2">
      <div className="">
        <div className="header--logo">
          {getIcon("X_LOGO", {
            width: "#fff",
            height: 30,
            fill: darkMode ? "white" : "black",
          })}
        </div>
        <div className="mt-0.5 mb-1 border border-[red]">
          <HeaderNav />
        </div>
      </div>
      <div className="border border-[pink] my-3"></div>
    </div>
  );
};

export default Sidebar;
