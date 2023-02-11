import React, { useContext } from "react";

import { Link } from "react-router-dom";
import SVG from "../../UI/app/SVG";
import { CLOSE, LOGO } from "../../../utils/ButtonLinkObjects";

const SignUpStepOne = () => {
  return (
    <>
      <div className="ml-4 mr-4 mt-2 flex items-center bg-[#fff] sticky top-0">
        <Link
          role="button"
          to={"/"}
          className="hover:bg-[#E6E7E7] w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full cursor-pointer"
        >
          <div className="w-[1.25rem] h-[1.25rem]">
            <SVG svgPath={CLOSE} />
          </div>
        </Link>
        <span className="ml-6 text-xl font-cBold">Step 1 of 5</span>
      </div>
      <div className="w-[26.563rem] h-[26.5rem] self-center flex flex-col  mt-8 ">
        <h1 className="font-cBold text-[2rem]">Create your account</h1>
        <div className="">
          <div className="border border-[#CFD9DE] group  h-[57px] flex rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0]">
            <label className="flex flex-col relative ml-2 ">
              <span className="absolute text-[18px] top-3 z-50 group-focus-within:top-1 group-focus-within:text-[14px] transition-all duration-75">Name</span>
              <input type="text" className="absolute bottom-0 mb-2  focus:outline-none "/>
            </label>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpStepOne;
