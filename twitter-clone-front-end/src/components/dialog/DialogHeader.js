import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { resetActions } from "../../state/auth/sign-up/reset-reducer";
import { stepsActions } from "../../state/auth/form/steps-reducer";
import { unfollowDialogActions } from "../../state/dialog/dialogState-reducer";
import IconButton from "../UI/button/IconButton";
import { useMediaQuery } from "@mui/material";
import { useCurrentStep } from "../../hooks/signup/ useCurrentStep";
import {
  FIRST_STEP,
  NUM_OF_SIGNUP_STEPS,
  PASSWORD_STEP,
} from "../../constants";
import getIcon from "../UI/icons/iconsutil";
import { HeaderIcon } from "./HeaderIcon";
import { StepHeaderInfo } from "./signup/steps/StepHeaderInfo";

const DialogHeader = () => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();

  const handleReset = () => {
    dispatch(resetActions.resetAll());
    dispatch(unfollowDialogActions.setDialogState(false));
    // window.history.replaceState(null, null, "/");
  };

  const handleBack = () => {
    dispatch(stepsActions.setCurrentStep(currentStep - 1));
  };
  return (
    <div className="h-[53px] flex bg-[#fff] dark:bg-[#000] px-[16px]">
      {currentStep >= 4 ? (
        <div
          className={`flex items-center sticky top-0  ${
            fullScreen ? "mx-[51px]" : "mx-0"
          } w-full justify-center align-center`}
        >
          <div className="flex-col-container h-full justify-center">
            {getIcon("X_LOGO", { height: "2rem", maxWidth: "100%" })}
          </div>
        </div>
      ) : (
        <div
          className={`flex items-center sticky top-0  ${
            fullScreen ? "mx-[51px]" : "mx-0"
          } px-[16px] w-full justify-center align-center`}
        >
          {currentStep <= PASSWORD_STEP ? (
            <div className="min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col">
              <div className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center -ml-2">
                <HeaderIcon
                  currentStep={currentStep}
                  handleReset={handleReset}
                  handleBack={handleBack}
                />
              </div>
            </div>
          ) : null}
          <StepHeaderInfo currentStep={currentStep} />
        </div>
      )}
    </div>
  );
};

export default DialogHeader;
