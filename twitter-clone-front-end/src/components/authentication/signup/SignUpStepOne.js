import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";
import SVG from "../../UI/app/SVG";
import { CLOSE } from "../../../utils/ButtonLinkObjects";
import { TextField } from "@mui/material";
import DOBInput from "./DOBInput";
import NameInputField from "./stepone/NameInputField";
import EmailTextField from "./stepone/EmailTextField";

const SignUpStepOne = (props) => {
  const [authType, setAuthType] = useState(false);


  const handleAuthTypeFalse = () => {
    setAuthType(false);
  };

  const handleAuthTypeTrue = () => {
    setAuthType(true);
  };

  // const nameInputFocusHandler = () => {
  //   setNameInputFocus(true);
  // }



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
        <span className="ml-6 text-xl font-cBold">Step 1 of 5</span>
      </div>
      <div className="w-[26.563rem] h-[26.5rem] self-center flex flex-col  mt-8 shrink-0">
        <h1 className="font-cBold text-[2rem]">Create your account</h1>
        <div className="flex flex-col gap-[25px] mt-6">
          <NameInputField />
          {authType && (
            <EmailTextField />
          )}
          {!authType && (
            <TextField
              type="tel"
              id="outlined-basic"
              label="Phone"
              variant="filled"
              InputProps={{
                className:
                  "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]",
                disableUnderline: true,
              }}
              InputLabelProps={{
                className:
                  "!text-[17px] font-cReg text-[#657480] focus-within:text-[#1d9bf0]",
              }}
            />
          )}
        </div>
        {!authType && (
          <div
            className="mt-2 flex justify-end font-cReg text-[#1D9BF0] hover:underline cursor-pointer"
            onClick={handleAuthTypeTrue}
          >
            Use email instead
          </div>
        )}
        {authType && (
          <div
            className="mt-2 flex justify-end font-cReg text-[#1D9BF0] hover:underline cursor-pointer"
            onClick={handleAuthTypeFalse}
          >
            Use phone instead
          </div>
        )}
        <div className="mt-10">
          <h3 className="font-cBold">Date of birth</h3>
          <p className="text-[14px] font-cReg text-[#536471] mt-2">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
        </div>
        <DOBInput />
      </div>
      <div className=" h-[100px] max-h-[100px] bg-[#fff] flex items-center justify-center mt-auto sticky bottom-0 z-50 shrink-0">
        <button className="w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#86888B]">
          Next
        </button>
      </div>
    </>
  );
};

export default SignUpStepOne;
