import React from "react";

import { useSelector } from "react-redux";
import { StepOneBody } from "./steps/1/StepOneBody";
import { DialogBodyContainer } from "../../DialogBodyContainer";
import StepTwoBody from "./steps/2/StepTwoBody";

const SignUpHome = () => {
  const currentStep = useSelector(
    (state) => state.rootReducer.signUpState.currentStep
  );

  let currentBody = <StepOneBody />;

  switch (currentStep) {
    case 2:
      currentBody = <StepTwoBody />;
      break;
    case "SIGNUP_HOME":
      currentBody = <SignUpHome />;
      break;
    default:
      break;
  }

  return (
    <>
      <DialogBodyContainer>{currentBody}</DialogBodyContainer>
    </>
  );
};

export default SignUpHome;
