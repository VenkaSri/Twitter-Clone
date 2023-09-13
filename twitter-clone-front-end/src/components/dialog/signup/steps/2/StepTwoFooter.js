import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogFooterButton } from "../../../../DialogFooterButton";
import { signupSliceActions } from "../../../../../state/app/home/signupSlice";
import { useCurrentStep } from "../../../../../hooks/signup/ useCurrentStep";

export const StepTwoFooter = () => {
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();

  const nextStepHandler = () => {
    dispatch(signupSliceActions.setCurrentStep(currentStep + 1));
  };
  return (
    <>
      <div className="mt-4 leading-4 text-[13px] font-cLight text-[#536471] flex-col-container">
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
      <DialogFooterButton
        onClick={nextStepHandler}
        text={"Sign up"}
        className={
          "bg-primary-color   hover:bg-[#1A8CD8] grow text-white font-cBold text-white"
        }
      />
    </>
  );
};
