import React from "react";

import { useMediaQuery } from "@mui/material";
import getIcon from "../../UI/icons/iconsutil";
import { HeaderIcon } from "../HeaderIcon";
import IconButton from "../../UI/button/IconButton";
import { resetActions } from "../../../state/auth/sign-up/reset-reducer";
import { useDispatch, useSelector } from "react-redux";
import { unfollowDialogActions } from "../../../state/dialog/dialogState-reducer";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { NUM_OF_SIGNUP_STEPS } from "../../../constants";
import { useCurrentStep } from "../../../hooks/signup/ useCurrentStep";

const SignUpHeader = () => {
  const smallScreen = useMediaQuery("(max-width:498px)");
  const dispatch = useDispatch();
  const darkMode = useDarkMode();

  const currentStep = useCurrentStep();

  const handleReset = () => {
    dispatch(resetActions.resetAll());
    dispatch(unfollowDialogActions.setDialogState(false));
    // window.history.replaceState(null, null, "/");
  };

  const postRegisterStep = useSelector(
    (state) => state.rootReducer.signUpState.postRegisterSteps
  );

  if (postRegisterStep === 1) {
  }

  return (
    <>
      <HeaderIcon />
      <div className="flex flex-grow h-full justify-center items-stretch flex-col">
        {postRegisterStep === 1 ? (
          <div className="flex h-full justify-center items-stretch flex-col">
            <div className="flex flex-col items-center shrink-0 ">
              {getIcon("X_LOGO", {
                height: "2rem",
                maxWidth: "100%",
                fill: darkMode ? "white" : "black",
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-start shrink-0 ">
            <h2
              className={`py-0.5 leading-6 font-cMed font-bold dark:text-[#fff] ${
                smallScreen ? "text-[17px]" : "text-[20px]"
              }`}
            >
              <span>
                Step {currentStep} of {NUM_OF_SIGNUP_STEPS}
              </span>
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUpHeader;
