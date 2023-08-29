import React from "react";
import Button from "../../UI/button/Button";
import { useUserData } from "../../../hooks/user-data";
import { useDispatch, useSelector } from "react-redux";
import { nameActions } from "../../../state/auth/sign-up/name-reducer";
import { dobActions } from "../../../state/auth/sign-up/dob-reducer";
import { emailActions } from "../../../state/auth/sign-up/email-reducer";
import { stepsActions } from "../../../state/auth/form/steps-reducer";

const StepTwoFooter = () => {
  const { isEmailEntered, isDOBEntered, isNameEntered } = useUserData();
  const currentStep = useSelector((state) => state.rootReducer.signUp.steps.currentStep);
  const dispatch = useDispatch();

  const buttonInfo = {
    height: 52,
    width: 440,
    text: "Sign Up",
    txtColor: "#FFF",
    hoverBgColor: "#1D9BF0",
    bgColor: "#1D9BF0",
  };

  const handledNext = () => {
    dispatch(stepsActions.setCurrentStep(currentStep + 1));
  }

  return (
    <div className="w-full h-[6.25rem] max:h-[6.25rem] flex justify-center items-center">
      <Button buttonProps={buttonInfo} onClick={handledNext}/>
    </div>
  );
};

export default StepTwoFooter;
