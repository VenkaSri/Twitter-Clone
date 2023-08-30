import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserData } from "../../../../../hooks/user-data";
import Button from "../../../../UI/button/Button";
import { stepsActions } from "../../../../../state/auth/form/steps-reducer";

export const StepTwoFooter = () => {
  const { isEmailEntered, isDOBEntered, isNameEntered } = useUserData();
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );

  const buttonInfo = {
    height: 52,
    width: 440,
    text: "Sign Up",
    txtColor: "#FFF",
    hoverBgColor: "#1D9BF0",
    bgColor: "#1D9BF0",
  };

  const handledNext = () => {
    // dispatch(nameActions.setAutoFocus(false));
    // dispatch(dobActions.setAutoFocus(false));
    // dispatch(emailActions.setAutoFocus(false));
    dispatch(stepsActions.setCurrentStep(currentStep + 1));
    console.log("hi");
  };
  return (
    <>
      <div className="mt-4 leading-4 text-[13px] font-cLight text-[#536471] ">
        <span className="break-words">
          By signing up, you agree to the{" "}
          <span className="text-[#1D9BF0]">Terms of Service</span> and{" "}
          <span className="text-[#1D9BF0]">Privay Policy</span>, including{" "}
          <span className="text-[#1D9BF0]">Cookie use</span>. Twitter may use
          your contact information, including your email address and phone
          number for purposes outlined in our Privacy Policy, like keeping your
          account secure and personalizing our services, including ads.{" "}
          <span className="text-[#1D9BF0]">Learn more</span>. Others will be
          able to find you by email or phone number, when provided, unless you
          choose otherwise <span className="text-[#1D9BF0]">here</span>.
        </span>
      </div>
      <div className="my-[24px]">
        <Button buttonProps={buttonInfo} onClick={handledNext} />
      </div>
    </>
  );
};
