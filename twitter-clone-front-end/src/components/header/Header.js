import React from "react";

import HeaderLinkButton from "./HeaderLinkButton";
import { useSelector } from "react-redux";
import SVG from "../UI/app/SVG";
import { LOGO } from "../../utils/ButtonLinkObjects";
import UserInfo from "../UserInfo";
import getIcon from "../../utils/icons/iconsutil";
import { width } from "@mui/system";
import { HeaderButton } from "./HeaderButton";
import { HeaderNav } from "./HeaderNav";

const Header = ({ headerButtonContent }) => {
  return (
    <div className="w-[275px] px-2">
      <div className="flex w-[50px] h-[50px] hover:bg-[#E6E7E7] rounded-full fill-[#1D9BF0] group-hover:bg-[#E6E7E7] items-center justify-center py-[2px]">
        {getIcon("X_LOGO", { width: "#fff", height: 30, fill: "#000" })}
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
