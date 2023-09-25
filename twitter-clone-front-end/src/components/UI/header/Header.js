import React from "react";

import HeaderLinkButton from "./HeaderLinkButton";
import { useSelector } from "react-redux";
import SVG from "../app/SVG";
import { LOGO } from "../../../utils/ButtonLinkObjects";
import UserInfo from "../../UserInfo";

const Header = ({ headerButtonContent }) => {
  return (
    <div className="grow flex justify-end ">
      <div className="w-[275px] px-[12px] flex flex-col max-xl:w-[88px] justify-between border-r border-r-[#f7f9f9]">
        <div className="flex flex-col ">
          <div className="flex p-[0.75rem] w-[50px] hover:bg-[#E8F5FE] rounded-full fill-[#1D9BF0] group-hover:bg-[#E6E7E7]">
            <SVG svgPath={LOGO} />
          </div>
          {headerButtonContent.map(({ href, svgPath, text }) => (
            <HeaderLinkButton
              key={text}
              href={href}
              svgPath={svgPath}
              text={text}
            />
          ))}
        </div>
        <div className="items-end w-[259px] mb-4">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Header;
