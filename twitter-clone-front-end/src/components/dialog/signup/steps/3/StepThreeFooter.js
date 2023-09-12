import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogFooterButton } from "../../../../DialogFooterButton";
import { signupSliceActions } from "../../../../../state/app/home/signupSlice";
import { useCurrentStep } from "../../../../../hooks/signup/ useCurrentStep";

export const StepThreeFooter = () => {
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();

  const password = useSelector(
    (state) => state.rootReducer.signUpState.password
  );

  const styles =
    password !== ""
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
      disabled={!(password !== "")}
    />
  );
};
