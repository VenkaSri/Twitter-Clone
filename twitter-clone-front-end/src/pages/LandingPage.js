import React, { useEffect } from "react";
import getIcon from "../components/UI/icons/iconsutil";
import SignInButtonList from "../components/UI/explore/sign-in-links/SignInButtonList";
import Button from "../components/UI/button/Button";
import {
  appleOAuthButton,
  googleOAuthButton,
  createAccountButton,
  createDemoAccountButton,
  signInButton,
} from "../constants/buttonConstants";
import { useDispatch, useSelector } from "react-redux";
import { globalInfoActions } from "../state/app/global-reducer";

export const LandingPage = () => {
  const dark = useSelector((state) => state.rootReducer.globalState.isDarkMode);

  console.log(dark);

  const links = [
    "About",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
    "Ads info",
    "Blog",
    "Status",
    "Careers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "X for Business",
    "Developers",
    "Directory",
    "Settings",
  ];

  const fillColor = dark ? "#fff" : "#000";

  return (
    <div className="h-screen w-screen flex flex-col overflow-x-hidden dark:bg-black">
      <div className="flex-grow flex ">
        <div className="flex-1 flex items-center justify-center ">
          {getIcon("X_LOGO", {
            fill: fillColor,
            padding: "32px",
            maxHeight: "380px",
          })}
        </div>
        <div className="flex-1  p-4 flex flex-col justify-center">
          <div className="p-[20px] flex flex-col min-w-[437px] max-w-[760px]">
            <span
              className={`font-cHeavy text-[64px] leading-[84px] inline -tracking-[1.2px] my-12 text-[${fillColor}]`}
            >
              Happening now
            </span>
            <div className="mb-8">
              <span
                className={`font-cHeavy text-[31px] leading-[36px] text-[${fillColor}]`}
              >
                Joing today.
              </span>
            </div>
            <div className="flex flex-col w-[300px]">
              <div className="flex flex-col gap-3">
                <Button buttonProps={googleOAuthButton} />
                <Button buttonProps={appleOAuthButton} />
              </div>
              <div className="flex items-center justify-center my-1">
                <div className="flex-grow border-b border-[#71767B]"></div>
                <div
                  className={`px-2 font-cThin text-[15px] text-[${fillColor}]`}
                >
                  or
                </div>
                <div className="flex-grow border-b border-[#71767B]"></div>
              </div>
              <div className="flex flex-col gap-3 mb-2">
                <Button buttonProps={createAccountButton} />
                <Button buttonProps={createDemoAccountButton} />
              </div>
              <div>
                <p className="text-[11px] font-cReg text-[#71767B]">
                  By signing up, you agree to the{" "}
                  <a href="#" className="text-[#1D9BF0]">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#1D9BF0]">
                    Privacy Policy
                  </a>
                  , including{" "}
                  <a href="#" className="text-[#1D9BF0]">
                    Cookie Use.
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-20 gap-4">
              <span
                className={`font-cReg text-[17px] leading-[20px] font-bold text-[${fillColor}]`}
              >
                Already have an account?
              </span>
              <Button buttonProps={signInButton} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex-grow  items-center justify-center flex flex-col ">
        <div className="flex flex-wrap items-center justify-center">
          {links.map((link) => (
            <a
              key={link}
              className="font-cReg text-[13px] leading-[16px] text-[#71767B] mr-4"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center mt-2">
          <span className="font-cReg text-[13px] leading-[16px] text-[#536471]">
            &copy; 2023 Venka
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
