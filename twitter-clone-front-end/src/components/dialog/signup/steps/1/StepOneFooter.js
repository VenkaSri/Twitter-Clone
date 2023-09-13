import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogFooterButton } from "../../../../DialogFooterButton";
import { signupSliceActions } from "../../../../../state/app/home/signupSlice";
import { useCurrentStep } from "../../../../../hooks/signup/ useCurrentStep";

export const StepOneFooter = () => {
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();

  const stepOneInfo = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo
  );

  const handleEmailValidation = (text) =>
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text);

  const styles =
    stepOneInfo.name !== "" &&
    handleEmailValidation(stepOneInfo.email) &&
    stepOneInfo.dob.month &&
    stepOneInfo.dob.day &&
    stepOneInfo.dob.year !== ""
      ? "bg-black dark:bg-white dark:hover:bg-[#D7DBDC] hover:bg-[#272C30]"
      : "bg-[#86888b]";

  const handledNext = () => {
    dispatch(signupSliceActions.setCurrentStep(currentStep + 1));
  };
  return (
    <DialogFooterButton
      text={"Next"}
      className={`${styles} grow text-white font-cBold dark:text-black`}
      onClick={handledNext}
      disabled={
        !(
          stepOneInfo.name !== "" &&
          handleEmailValidation(stepOneInfo.email) &&
          stepOneInfo.dob.month &&
          stepOneInfo.dob.day &&
          stepOneInfo.dob.year !== ""
        )
      }
    />
  );
};
