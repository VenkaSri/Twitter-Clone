import React from "react";

import Button from "../../UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNameInputState } from "../../../hooks/signup/useNameInputState";
import { signupSliceActions } from "../../../state/app/home/signupSlice";

export const SignupFooter = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );

  const name = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo.name
  );

  const buttonInfo = {
    txtColor: "text-white dark:text-black",
    text: "Next",
    fontSize: "17px",
    className:
      "bg-black dark:bg-white dark:hover:bg-[#D7DBDC] hover:bg-[#272C30]",
  };

  let nextFunction = null;

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
