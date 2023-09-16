import React from "react";

import { FIRST_SIGNUP_STEP_NUMBER, NUM_OF_SIGNUP_STEPS } from "../../constants";
import IconButton from "../UI/button/IconButton";
import { useCurrentStep } from "../../hooks/signup/ useCurrentStep";
import { useDispatch } from "react-redux";
import { signupSliceActions } from "../../state/app/home/signupSlice";
import { unfollowDialogActions } from "../../state/dialog/dialogState-reducer";

export const HeaderIcon = () => {
  const currentStep = useCurrentStep();
  const dispatch = useDispatch();
  let iconInfo = "";
  let actionFunction = null;

  const back = () => {
    dispatch(signupSliceActions.setCurrentStep(currentStep - 1));
  };
  const close = () => {
    dispatch(unfollowDialogActions.setDialogState(false));
  };

  if (currentStep === FIRST_SIGNUP_STEP_NUMBER) {
    iconInfo = "Close";
    actionFunction = close;
  } else {
    iconInfo = "Back";
    actionFunction = back;
  }

  return <></>;
};
