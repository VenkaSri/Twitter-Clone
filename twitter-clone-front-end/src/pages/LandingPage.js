import React from "react";
import Button from "../components/UI/button/Button";
import { signInButton } from "../constants/buttonConstants";
import { useSelector } from "react-redux";
import { LandingFooter } from "../components/landing/LandingFooter";
import { SignUpForm } from "../components/landing/SignUpForm";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { CustomText } from "../components/CustomText";
import { Icon } from "../components/icon";

export const LandingPage = () => {
  const dark = useSelector((state) => state.rootReducer.globalState.isDarkMode);
  const windowWidth = useWindowWidth();

  const fillColor = dark ? "#fff" : "#000";

  return (
    <div className="h-screen w-screen flex flex-col overflow-x-hidden dark:bg-black">
      <div className="flex-grow flex ">
        <div
          className={`${
            windowWidth >= 1000
              ? "flex-1 flex items-center justify-center"
              : "hidden"
          }`}
        >
          <Icon
            name="X_LOGO"
            props={{ fill: fillColor, padding: "32px", maxHeight: "380px" }}
          />
        </div>
        <div className="flex-1  xs:p-4 flex flex-col justify-center">
          <div className="xs:p-[20px] flex flex-col min-w-[437px] max-w-[760px]">
            <div className="flex-1 flex items-center block med:hidden h-[48px]">
              <Icon
                name="X_LOGO"
                props={{ fill: fillColor, maxHeight: "48px" }}
              />
            </div>
            <CustomText
              fontSize="64px"
              lineHeight="84px"
              color={fillColor}
              text="Happening now"
              additionalClasses="my-12 font-cHeavy"
            />
            <div className="mb-8">
              <span
                className={`font-cHeavy text-[31px] leading-[36px] text-[${fillColor}]`}
              >
                Join today.
              </span>
            </div>
            <SignUpForm />
            <div className="flex flex-col mt-10 gap-4">
              <span
                className={`font-cMed text-[17px] leading-[20px] font-bold text-[${fillColor}]`}
              >
                Already have an account?
              </span>
              <Button buttonProps={signInButton} />
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
