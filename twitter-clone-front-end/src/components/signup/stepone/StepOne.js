import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DOBInput from "../DOBInput";
import NameInputField from "./NameInputField";
import EmailTextField from "./EmailTextField";
import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { ContentHeading } from "../dialog/ContentHeading";
import { ContentBody } from "../dialog/ContentBody";
import { ContentFooter } from "../dialog/ContentFooter";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

const StepOne = () => {
  const width = useWindowWidth();
  const [authType, setAuthType] = useState(false);
  const dispatch = useDispatch();
  const nextStepHandler = () => {
    dispatch(stepsActions.setStepTwo(true));
  };
  const handleAuthTypeFalse = () => {
    setAuthType(false);
  };

  const handleAuthTypeTrue = () => {
    setAuthType(true);
  };
  return (
    <>
      <div className="overflow-auto flex flex-col items-stretch basis-full flex-grow border border-[red]">
        <div className="flex flex-col h-full">
          <div className="px-8 shrink-0 flex flex-col">
            <ContentHeading />
            <ContentBody />
          </div>
        </div>
      </div>

      {width < 702 && (
        <div className="flex-col-container  fixed bottom-0 left-0 right-0">
          <ContentFooter />
        </div>
      )}
      <div className="flex-col-container">
        <ContentFooter />
      </div>
    </>
  );
};

export default StepOne;

// <div className="h-full min-h-[440px] px-[5rem] overflow-auto">
// <h1 className="font-cBold text-[2rem]">Create your account</h1>
// <div className="flex flex-col gap-[25px] mt-6">
//   <NameInputField />
//   {authType && (
//     <EmailTextField />
//   )}
//   {!authType &&
//   <EmailTextField />}
// </div>
// {!authType && (
//   <div
//     className=" flex justify-end font-cReg text-[#1D9BF0] hover:underline cursor-pointer"
//     onClick={handleAuthTypeTrue}
//   >
//     Use email instead
//   </div>
// )}
// {authType && (
//   <div
//     className="flex justify-end font-cReg text-[#1D9BF0] hover:underline cursor-pointer"
//     onClick={handleAuthTypeFalse}
//   >
//     Use phone instead
//   </div>
// )}
// <div className="mt-10">
//   <h3 className="font-cBold">Date of birth</h3>
//   <p className="text-[14px] font-cReg text-[#536471] mt-2">
//     This will not be shown publicly. Confirm your own age, even if this
//     account is for a business, a pet, or something else.
//   </p>
// </div>
// <DOBInput />
// </div>
