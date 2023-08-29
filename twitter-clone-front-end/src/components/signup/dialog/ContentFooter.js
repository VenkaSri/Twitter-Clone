import React from "react";

import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useUserData } from "../../../hooks/user-data";
import Button from "../../UI/button/Button";

export const ContentFooter = () => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const { isEmailEntered, isDOBEntered, isNameEntered } = useUserData();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );
  const dispatch = useDispatch();

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
    // dispatch(nameActions.setAutoFocus(false));
    // dispatch(dobActions.setAutoFocus(false));
    // dispatch(emailActions.setAutoFocus(false));
    // dispatch(stepsActions.setCurrentStep(currentStep + 1));
    console.log("hi");
  };

  return (
    <div className={`flex-col-container ${fullScreen ? "px-8" : "px-20"}`}>
      <div className="flex-col-container my-6">
        <div
          className={`flex-col-container min-h-[52px] min-w-[52px] rounded-full `}
        >
          <Button buttonProps={buttonInfo} onClick={handledNext} />
        </div>
      </div>
    </div>
  );
};
