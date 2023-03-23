import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { dobActions } from "../../../state/auth/sign-up/dob-reducer";
import { emailActions } from "../../../state/auth/sign-up/email-reducer";
import { nameActions } from "../../../state/auth/sign-up/name-reducer";

const StepsFooter = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.steps.currentStep);
  const nextStepHandler = () => {
    if (currentStep === 3) return;
    if (currentStep === 1) {
      dispatch(nameActions.setAutoFocus(false));
      dispatch(dobActions.setAutoFocus(false));
      dispatch(emailActions.setAutoFocus(false));
    }
    dispatch(stepsActions.setCurrentStep(currentStep + 1));
  };
  const stepOne = useSelector((state) => state.stepOne);
  const submitButtonClasses =
    stepOne.isEmailEntered && stepOne.isNameEntered && stepOne.isDOBEntered
      ? "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#000]"
      : "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#86888b]";

  const stepTwo = "bg-[#1D9BF0]  hover:bg-[#198CD8] text-[#fff] w-[440px] h-[52px] rounded-full font-cBold";

  

  const disable =
    stepOne.isEmailEntered && stepOne.isNameEntered && stepOne.isDOBEntered
      ? false
      : true;
  return (
      <div className="h-[100px] max-h-[100px] bg-[#fff] flex items-center justify-center sticky bottom-0 z-50 grow">
        <button
          className={currentStep === 2 ? stepTwo : submitButtonClasses}
          disabled={disable}
          onClick={nextStepHandler}
        >
          {currentStep === 2 ? "Sign Up" : "Next"}
        </button>
      </div>

  );
};

export default StepsFooter;
