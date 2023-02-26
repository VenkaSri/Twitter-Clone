import React, { useContext } from "react";

import { Link } from "react-router-dom";
import SVG from "../../UI/app/SVG";
import { CLOSE, LOGO } from "../../../utils/ButtonLinkObjects";

const SignUpStepTwo = () => {
  return (
    <>
      <div className="ml-4 mr-4 mt-2 flex items-center bg-[#fff] sticky top-0 bg-[#fff] z-50">
        <Link
          role="button"
          to={"/"}
          className="hover:bg-[#E6E7E7] w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full cursor-pointer"
        >
          <div className="w-[1.25rem] h-[1.25rem]">
            <SVG svgPath={CLOSE} />
          </div>
        </Link>
        <span className="ml-6 text-xl font-cBold">Step 2 of 3</span>
      </div>
      <div className="w-[26.563rem] h-[20.688rem] self-center flex flex-col  mt-8 shrink-0">
        <h1 className="font-cBold text-[2rem]">Create your account</h1>
        <div className="flex flex-col gap-[25px] mt-6">

        </div>
      </div>
      <div className="h-[14.25rem] bg-[#fff] flex items-center justify-center z-50 shrink-0 flex-col sticky bottom-0 border border-rose-500 px-[5rem]">
        <p className="text-[14px] font-cReg text-[#536471] ">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use. Twitter may use your contact information,
          including your email address and phone number for purposes outlined in
          our Privacy Policy, like keeping your account secure and personalizing
          our services, including ads. Learn more. Others will be able to find
          you by email or phone number, when provided, unless you choose
          otherwise here.
        </p>
        <button className="w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#86888B]">
          Next
        </button>
      </div>
    </>
  );
};

export default SignUpStepTwo;
