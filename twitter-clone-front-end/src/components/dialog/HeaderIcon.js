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

  return (
    <>
      {currentStep === NUM_OF_SIGNUP_STEPS ? null : (
        <div className="min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col">
          <div className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center -ml-2">
            <IconButton
              onClick={actionFunction}
              type={iconInfo}
              options={{
                width: 20,
                height: 20,
                className:
                  "dark:fill-white dark:hover:bg-[#191919] hover:bg-[#E6E7E7] ",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
