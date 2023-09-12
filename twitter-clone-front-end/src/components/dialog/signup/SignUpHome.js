import React from "react";

import { useSelector } from "react-redux";
import { StepOneBody } from "./steps/1/StepOneBody";
import { DialogBodyContainer } from "../../DialogBodyContainer";
import StepTwoBody from "./steps/2/StepTwoBody";
import { StepThreeBody } from "./steps/3/StepThreeBody";

const SignUpHome = () => {
  const currentStep = useSelector(
    (state) => state.rootReducer.signUpState.currentStep
  );

  let currentBody = null;

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

  return (
    <>
      <DialogBodyContainer>{currentBody}</DialogBodyContainer>
    </>
  );
};

export default SignUpHome;
