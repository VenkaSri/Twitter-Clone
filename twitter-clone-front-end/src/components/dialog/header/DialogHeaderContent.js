import React from "react";

import { HeaderIcon } from "../HeaderIcon";
import { DialogHeaderIcon } from "./DialogHeaderIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  dialogSliceActions,
  setDialogContent,
} from "../../../state/dialog/dialogSlice";
import { signupSliceActions } from "../../../state/app/home/signupSlice";
import { useCurrentStep } from "../../../hooks/signup/ useCurrentStep";
import { RESET_POST_REG_STEP } from "../../../utils/constants/dialog/dialogConstants";

export const DialogHeaderContent = ({ content, icon, button }) => {
  const currentStep = useCurrentStep();
  const dispatch = useDispatch();
  const postSignUpStep = useSelector(
    (state) => state.rootReducer.signUpState.postRegisterSteps
  );

  let step = currentStep;

  if (postSignUpStep > 0) {
    step = postSignUpStep;
  }

  const handleClick = () => {
    dispatch(dialogSliceActions.setDialogContent("upload_profile_picture"));
    dispatch(signupSliceActions.setPostRegisterSteps(RESET_POST_REG_STEP));
  };

  console.log(step);
  return (
    <>
      {icon && <DialogHeaderIcon step={step} type="postRegister" />}
      <div className="flex flex-grow h-full justify-center items-stretch flex-col">
        {content}
      </div>
      {button && (
        <div
          className="flex-col-container min-h-[32px] min-w-[32px] self-stretch justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <div className="min-h-[32px] min-w-[32px] rounded-full px-4 bg-black flex justify-center items-center leading-5 border border-black  font-cReg text-[15px]">
            <span className="text-white font-bold">Apply</span>
          </div>
        </div>
      )}
    </>
  );
};
