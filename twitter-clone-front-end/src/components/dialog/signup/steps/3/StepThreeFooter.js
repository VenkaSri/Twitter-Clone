import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogFooterButton } from "../../../../DialogFooterButton";
import { signupSliceActions } from "../../../../../state/app/home/signupSlice";
import { useCurrentStep } from "../../../../../hooks/signup/ useCurrentStep";
import { postData } from "../../../../../services/postData";

export const StepThreeFooter = () => {
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();

  const password = useSelector(
    (state) => state.rootReducer.signUpState.password
  );
  const { name, email, dob } = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo
  );

  const validatePasswordLength = (text) => /^.{8,}$/.test(text);
  const validatePasswordStrength = (text) => /^(.)\1*$/.test(text);

  const styles =
    validatePasswordLength(password) && !validatePasswordStrength(password)
      ? "bg-black dark:bg-white dark:hover:bg-[#D7DBDC] hover:bg-[#272C30]"
      : "bg-[#86888b]";

  const handledNext = () => {
    // postData();
    console.log(name);
    console.log(email);
    console.log(dob);
    console.log(password);
  };
  return (
    <DialogFooterButton
      text={"Next"}
      className={`${styles} grow text-white font-cBold dark:text-black`}
      onClick={handledNext}
      disabled={
        !validatePasswordLength(password) && validatePasswordStrength(password)
      }
    />
  );
};
