import React, { useEffect } from "react";
import Button from "../../components/UI/button/Button";
import { signInButton } from "../../constants/buttonConstants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LandingFooter } from "../../components/landing/LandingFooter";
import { SignUpForm } from "../../components/landing/SignUpForm";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Icon } from "../../components/icon";

export const LandingPage = () => {
  const windowWidth = useWindowWidth();

  const dispatch = useDispatch();
  const handleUserLogin = () => {
    window.history.replaceState(
      null,
      "Sign up for Twitter / X",
      "/i/flow/login"
    );
  };

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
            props={{
              padding: "32px",
              maxHeight: "380px",
              className: "dark:fill-white",
            }}
          />
        </div>
        <div className="flex-1  xs:p-4 flex flex-col justify-center">
          <div className="xs:p-[20px] flex flex-col min-w-[437px] max-w-[760px]">
            <div className="flex-1 flex items-center block med:hidden h-[48px]">
              <Icon
                name="X_LOGO"
                props={{
                  maxHeight: "48px",
                  className: "dark:fill-white",
                }}
              />
            </div>
            <div className="my-12 flex  font-cHeavy leading-[84px] text-[64px] font-bold dark:text-[#fff] ">
              <span className="m-0 p-0">Happening now</span>
            </div>

            <div className="mb-8">
              <span
                className={`font-cHeavy text-[31px] leading-[36px]  dark:text-[#fff]`}
              >
                Join today.
              </span>
            </div>
            <SignUpForm />
            <div className="flex flex-col mt-10 gap-4">
              <span
                className={`font-cMed text-[17px] leading-[20px] font-bold dark:text-[#fff]`}
              >
                Already have an account?
              </span>
              <Button buttonProps={signInButton} onClick={handleUserLogin} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <LandingFooter />
      </div>
    </div>
  );
};

export default LandingPage;
