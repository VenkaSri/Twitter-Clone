import React from "react";
import Button from "../../UI/button/Button";
import {
  googleOAuthButton,
  appleOAuthButton,
  forgotPasswordButton,
} from "../../../constants/buttonConstants";
import { CustomTextField } from "../../CustomTextField";
export const AuthHome = () => {
  return (
    <div
      className={`overflow-auto
        flex-col-container items-stretch basis-full flex-grow dark:bg-[#000]`}
    >
      <div className="flex-col-container pb-12 min-w-[364px] max-w-[364px] px-8 m-auto ">
        <div className="flex-col-container ">
          <div className="flex-col-container my-5">
            <h1 className="text-[31px] leading-8 font-cMed font-bold break-words inline dark:text-[#fff]">
              <span>Sign in to X</span>
            </h1>
          </div>
        </div>
        <div className="my-3">
          <Button buttonProps={googleOAuthButton} />
        </div>
        <div className="my-3">
          <Button buttonProps={appleOAuthButton} />
        </div>
        <div className="flex items-center justify-center my-1">
          <div
            className={`flex-grow  dark:border-b dark:border-[#3c3e42] border-b border-[#e2e9ec]`}
          ></div>
          <div className={`px-2 font-cThin text-[15px] dark:text-[#fff]`}>
            or
          </div>
          <div
            className={`flex-grow dark:border-b dark:border-[#3c3e42] border-b border-[#e2e9ec]`}
          ></div>
        </div>
        <div className="py-3 flex-col-container"></div>
        <div className="my-3"></div>
        <div className="my-3">
          <Button buttonProps={forgotPasswordButton} />
        </div>
        <div className="text-[#536471] text-[15px] mt-[40px] leading-5 font-cReg">
          <span>
            Don't have an account?{" "}
            <span className="text-[#1d9bf0]">Sign up</span>
          </span>
        </div>
      </div>
    </div>
  );
};
