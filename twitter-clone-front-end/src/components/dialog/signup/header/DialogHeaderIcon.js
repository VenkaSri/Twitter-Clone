import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import IconButton from "../../../UI/button/IconButton";
import { signupSliceActions } from "../../../../state/auth/signupSlice";
import { dialogSliceActions } from "../../../../state/dialog/dialogSlice";
import { useCurrentStep } from "../../../../hooks/signup/ useCurrentStep";
import { urlSliceActions } from "../../../../state/url/urlSlice";
import {
  RESET_POST_REG_STEP,
  RESET_REG_STEP,
} from "../../../../utils/constants/dialog/dialogConstants";
import { useNavigate } from "react-router-dom";
const STEP_ZERO = 0;

export const DialogHeaderIcon = ({ step, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [iconHeaderStyles, setIconHeaderStyles] = useState("");
  let iconInfo = "";
  let actionFunction = null;
  const postSignUpStep = useSelector(
    (state) => state.rootReducer.signUpState.postRegisterSteps
  );

  const dialogBodyContent = useSelector(
    (state) => state.rootReducer.dialogSlice.dialogBodyContent
  );

  useState(() => {
    if (dialogBodyContent.type.name === "AuthHome")
      setIconHeaderStyles("grow basis-3/6");
  }, []);

  const close = () => {
    dispatch(dialogSliceActions.setIsDialogOpen(false));
    console.log("closed");
    dispatch(urlSliceActions.setCurrentUrl(""));
    navigate("/");
    dispatch(signupSliceActions.resetState());
  };

  let contentValue = "";

  const back = () => {
    console.log(contentValue);
    console.log(step);
    dispatch(dialogSliceActions.setDialogContent(contentValue));
    if (type === "postRegister") {
      dispatch(signupSliceActions.setPostRegisterSteps(RESET_POST_REG_STEP));
    } else {
      dispatch(signupSliceActions.setSignUpStep(RESET_REG_STEP));
    }
  };

  if (type === "postRegister") {
    if (step === 1) {
      iconInfo = "Back";
      contentValue = "upload_profile_picture";
      actionFunction = back;
    }
  }

  console.log(step);

  if (step === STEP_ZERO) {
    iconInfo = "Close";
    actionFunction = close;
  } else if (step === 1) {
    iconInfo = "Back";
    contentValue = "sign_up_step_1";
    actionFunction = back;
  } else {
    iconInfo = "Back";
    actionFunction = back;
  }

  return (
    <>
      <div
        className={`min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col ${iconHeaderStyles}`}
      >
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
