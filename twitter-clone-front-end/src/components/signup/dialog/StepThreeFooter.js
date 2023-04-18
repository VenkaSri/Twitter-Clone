import React, { useEffect } from "react";
import Button from "../../UI/button/Button";
import { useUserData } from "../../../hooks/user-data";
import { useDispatch, useSelector } from "react-redux";
import { nameActions } from "../../../state/auth/sign-up/name-reducer";
import { dobActions } from "../../../state/auth/sign-up/dob-reducer";
import { emailActions } from "../../../state/auth/sign-up/email-reducer";
import { stepsActions } from "../../../state/auth/form/steps-reducer";

const StepThreeFooter = () => {
  const { isPasswordEntered } = useUserData();
  const currentStep = useSelector((state) => state.rootReducer.signUp.steps.currentStep);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isPasswordEntered);
  }, [isPasswordEntered])

  const buttonInfo = {
    height: 52,
    width: 440,
    text: "Next",
    txtColor: "#FFF",
    hoverBgColor: "#272c30",
    disabled: (isPasswordEntered),
    bgColorEnabled: "#000",
    bgColorDisabled: "#86888b",
    ...(isPasswordEntered
      ? { bgColor: "#000" }
      : { bgColor: "#86888b" }),
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

export default StepThreeFooter;
