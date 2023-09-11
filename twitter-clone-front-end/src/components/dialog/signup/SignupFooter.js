import React from "react";

import Button from "../../UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  enabledFooterButton,
  disabledFooterButton,
} from "../../../constants/buttonConstants";

export const SignupFooter = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );

  const name = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo.name
  );

  let buttonInfo = name === "" ? disabledFooterButton : disabledFooterButton;

  switch (currentStep) {
    case 1:
      break;
    default:
      break;
  }

  const handledNext = () => {
    // nextFunction();
    console.log(name);
  };
  return <Button buttonProps={buttonInfo} onClick={handledNext} />;
};
