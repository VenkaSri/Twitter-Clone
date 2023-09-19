import React from "react";

import { useDispatch, useSelector } from "react-redux";
import IconButton from "../../UI/button/IconButton";
import { signupSliceActions } from "../../../state/app/home/signupSlice";
import {
  dialogSliceActions,
  setDialogContent,
} from "../../../state/dialog/dialogSlice";
import { DialogHeaderContent } from "./DialogHeaderContent";
import { DialogHeaderLogo } from "./DialogHeaderLogo";
import { UploadProfilePictureStep } from "../signup/steps/profile_picture/UploadProfilePictureStep";
import { useCurrentStep } from "../../../hooks/signup/ useCurrentStep";
const STEP_ZERO = 0;

export const DialogHeaderIcon = ({ step }) => {
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();
  let iconInfo = "";
  let actionFunction = null;

  const back = () => {
    dispatch(dialogSliceActions.setDialogContent("sign_up_step_1"));
    dispatch(signupSliceActions.setSignUpStep(currentStep - 1));
  };
  const close = () => {
    dispatch(dialogSliceActions.setIsDialogOpen(false));
    dispatch(signupSliceActions.resetState());
  };

  if (step === STEP_ZERO) {
    iconInfo = "Close";
    actionFunction = close;
  } else if (step === 2) {
    iconInfo = "Back";
    actionFunction = back;
  } else {
    iconInfo = "Back";
    actionFunction = back;
  }

  return (
    <>
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
    </>
  );
};
