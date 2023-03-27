import React from "react";

import HeaderLinkButton from "./HeaderLinkButton";
import { useSelector } from "react-redux";
import SVG from "../app/SVG";
import { LOGO } from "../../../utils/ButtonLinkObjects";

const Header = ({ headerButtonContent }) => {
  const currStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );
  return (
    <div className="grow flex justify-end ">
      <div className="w-[275px] px-[12px] flex flex-col max-xl:w-[88px]">
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
          {currStep === 4 ? (
            <div className="shadow-[rgba(149, 157, 165, 0.2) 0px 8px 24px] h-[52px] my-[16px] grow rounded-full flex justify-center items-center bg-[#1C9BF0] w-[233px]">
              <p className="text-[#fff] font-cBold text-[17px]">Tweet</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
