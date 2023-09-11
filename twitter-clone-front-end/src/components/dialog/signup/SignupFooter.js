import React from "react";

import Button from "../../UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  enabledFooterButton,
  disabledFooterButton,
} from "../../../constants/buttonConstants";
import { signupSliceActions } from "../../../state/app/home/signupSlice";

export const SignupFooter = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUpState.currentStep
  );

  const stepOneInfo = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo
  );

  let buttonInfo =
    stepOneInfo.name !== "" &&
    stepOneInfo.email !== "" &&
    stepOneInfo.dob !== ""
      ? enabledFooterButton
      : disabledFooterButton;

  switch (currentStep) {
    case 2:
      break;
    default:
      break;
  }

  console.log(currentStep);

  const handledNext = () => {
    // nextFunction();
    dispatch(signupSliceActions.setCurrentStep(currentStep + 1));
  };
  return <Button buttonProps={buttonInfo} onClick={handledNext} />;
};
