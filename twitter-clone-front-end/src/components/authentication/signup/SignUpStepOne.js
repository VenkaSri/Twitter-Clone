import React, { useContext } from "react";

import { Link } from "react-router-dom";
import SVG from "../../UI/app/SVG";
import { CLOSE, LOGO } from "../../../utils/ButtonLinkObjects";
import TextField from "../../UI/form/TextField";

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
        <div className="flex flex-col gap-[25px] mt-6">
          <TextField />

        </div>
        <div>
          <h3>Date of birth</h3>
          <p>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpStepOne;
