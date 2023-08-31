import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserData } from "../../../../../hooks/user-data";
import Button from "../../../../UI/button/Button";
import { stepsActions } from "../../../../../state/auth/form/steps-reducer";
import { nameActions } from "../../../../../state/auth/sign-up/name-reducer";
import { dobActions } from "../../../../../state/auth/sign-up/dob-reducer";
import { emailActions } from "../../../../../state/auth/sign-up/email-reducer";

export const StepOneFooter = () => {
  const { isEmailEntered, isDOBEntered, isNameEntered } = useUserData();
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );

  const buttonInfo = {
    txtColor: "#FFF",
    text: "Next",
    hoverBgColor: "#272c30",
    disabled: !(isEmailEntered && isDOBEntered && isNameEntered),
    bgColorEnabled: "#000",
    bgColorDisabled: "#86888b",
    ...(isEmailEntered && isDOBEntered && isNameEntered
      ? { bgColor: "#000" }
      : { bgColor: "#86888b" }),
  };

  const handledNext = () => {
    dispatch(nameActions.setAutoFocus(false));
    dispatch(dobActions.setAutoFocus(false));
    dispatch(emailActions.setAutoFocus(false));
    dispatch(stepsActions.setCurrentStep(currentStep + 1));
  };
  return <Button buttonProps={buttonInfo} onClick={handledNext} />;
};
