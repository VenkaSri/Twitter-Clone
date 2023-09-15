import React, { useRef, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { StepOneBody } from "./steps/1/StepOneBody";
import StepTwoBody from "./steps/2/StepTwoBody";
import { StepThreeBody } from "./steps/3/StepThreeBody";
import { useMediaQuery } from "@mui/material";
import { unfollowDialogActions } from "../../../state/dialog/dialogState-reducer";

import { UploadProfilePictureStep } from "./steps/profile_picture/UploadProfilePictureStep";
import { EditMedia } from "./steps/profile_picture/EditMedia";

const SignUpHome = () => {
  const dispatch = useDispatch();

  const currentStep = useSelector(
    (state) => state.rootReducer.signUpState.currentStep
  );

  const postRegisterStep = useSelector(
    (state) => state.rootReducer.signUpState.postRegisterSteps
  );

  const fullScreen = useMediaQuery("(max-width:702px)");

  let currentBody = null;

  const containerRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      const element = containerRef.current;
      if (element) {
        const isOver = element.scrollHeight > element.clientHeight;
        dispatch(unfollowDialogActions.setDialogBodyOverFlowing(isOver));
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  switch (currentStep) {
    case 1:
      currentBody = <StepOneBody />;
      break;
    case 2:
      currentBody = <StepTwoBody />;
      break;
    case 3:
      currentBody = <StepThreeBody />;
      break;

    case "SIGNUP_HOME":
      currentBody = <SignUpHome />;
      break;
    default:
      break;
  }

  if (postRegisterStep === 1) {
    currentBody = <UploadProfilePictureStep />;
  } else if (postRegisterStep === "Edit Media") {
    currentBody = <EditMedia />;
  }

  console.log(!(postRegisterStep === "Edit Media"));
  return (
    <>
      {!(postRegisterStep === "Edit Media") ? (
        <div
          ref={containerRef}
          className={`overflow-auto
        flex flex-col items-stretch basis-full flex-grow bg-[#fff] dark:bg-[#000]`}
        >
          <div
            className={`${
              fullScreen ? " px-8" : " px-20"
            } shrink-0 flex flex-col mb-2 grow`}
          >
            {currentBody}
          </div>
        </div>
      ) : (
        <div
          className={`overflow-hidden
        flex flex-col items-stretch basis-full flex-grow bg-[#fff] dark:bg-[#000]`}
        >
          {currentBody}
        </div>
      )}
    </>
  );
};

export default SignUpHome;
