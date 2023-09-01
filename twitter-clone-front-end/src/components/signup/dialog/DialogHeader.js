import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { resetActions } from "../../../state/auth/sign-up/reset-reducer";
import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { unfollowDialogActions } from "../../../state/dialog/dialogState-reducer";
import IconButton from "../../UI/button/IconButton";
import { useMediaQuery } from "@mui/material";
import { useCurrentStep } from "../../../hooks/signup/ useCurrentStep";
import {
  FIRST_STEP,
  NUM_OF_SIGNUP_STEPS,
  PASSWORD_STEP,
} from "../../../constants";

const DialogHeader = () => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();
  const dialogState = useSelector(
    (state) => state.rootReducer.dialogState.isDialogOpen
  );
  const headerIcon = () => {
    if (currentStep <= FIRST_STEP) {
      return (
        <IconButton
          onClick={handleReset}
          type={"Close"}
          options={{
            className: "dark:fill-white dark:hover:bg-[#191919] ",
            width: 20,
            height: 20,
          }}
        />
      );
    } else {
      return (
        <IconButton
          onClick={handleBack}
          type={"Back"}
          options={{
            width: 20,
            height: 20,
            className: "dark:fill-white dark:hover:bg-[#191919] ",
          }}
        />
      );
    }
  };

  const handleReset = () => {
    dispatch(resetActions.resetAll());
    dispatch(unfollowDialogActions.setDialogState(false));
    // window.history.replaceState(null, null, "/");
  };

  const handleBack = () => {
    dispatch(stepsActions.setCurrentStep(currentStep - 1));
  };
  return (
    <div className="h-[53px] flex bg-[#fff] dark:bg-[#000]">
      <div
        className={`flex items-center sticky top-0  ${
          fullScreen ? "mx-[51px]" : "mx-0"
        } px-[16px] w-full justify-center align-center`}
      >
        {currentStep === PASSWORD_STEP ? null : (
          <div className="min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col">
            <div className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center -ml-2">
              {headerIcon()}
            </div>
          </div>
        )}

        <div className="flex flex-grow h-full justify-center items-stretch flex-col">
          <div className="flex flex-col items-start shrink-0 ">
            <h2 className="py-0.5 text-xl leading-6 font-cMed font-bold dark:text-[#fff]">
              <span>
                Step {currentStep} of {NUM_OF_SIGNUP_STEPS}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogHeader;
